import { Validators } from '@angular/forms';
import { BaseCreateComponent } from './../../shared/base-component/base-create.component';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/users/users.model';
import { Country } from 'src/app/mocks/country.model';
import { countries } from 'src/app/mocks/countries.mock';
import { AuthMockService } from '../auth-mock.service';
import { TypeUsersService } from 'src/app/users/type-users/type-users.service';
import { TypeUsers } from 'src/app/users/type-users/type-users.model';
import { GenderService } from 'src/app/users/gender/gender.service';
import { CountryService } from 'src/app/users/country/country.service';
import { Gender } from 'src/app/users/gender/gender.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent
  extends BaseCreateComponent<User>
  implements OnInit
{
  @Input() typeUserId!: number;
  typeUser: number = 1;
  countryList: Country[] = [];
  genderList: Gender[] = [];
  typeUsers: TypeUsers[] = [];
  constructor(
    public authService: AuthService,
    public typeUserService: TypeUsersService,
    public genderService: GenderService,
    public countryService: CountryService,
    public route: ActivatedRoute
  ) {
    super(authService);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.typeUser =
        params['type-user'] && params['type-user'] == 'customer' ? 2 : 1;
    });

    this.countryList = countries;

    this.typeUserService.get().subscribe();
    this.genderService.get().subscribe();
    this.countryService.get().subscribe();

    this.subscriptions['country'] = this.countryService.data$.subscribe(
      (data) => {
        this.countryList = data;
      }
    );

    this.subscriptions['genders'] = this.genderService.data$.subscribe(
      (data) => {
        this.genderList = data;
      }
    );

    this.subscriptions['typeUsers'] = this.typeUserService.data$.subscribe(
      (data) => {
        this.typeUsers = data;
        console.log(this.typeUsers);
      }
    );

    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      type_user_id: [this.typeUser, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone_number: [null, Validators.required],
      gender_id: [null, Validators.required],
      country_id: [this.countryList[0], Validators.required],
      password: [null, Validators.required],
      password_confirmation: [null, Validators.required],
    });

    this.form.controls['gender_id'].valueChanges.subscribe((value) => {});
  }

  signup(): void {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      return;
    }

    this.loading = true;
    const data = {
      ...this.form.value,
      country_id: parseInt(this.form.value.country_id),
      gender_id: parseInt(this.form.value.gender_id),
    };
    this.authService
      .signup({
        ...data,
      })
      .subscribe((response) => {
        this.loading = false;
        this.initForm();
        this.created.emit();
        this.helper.notification.toastSuccess();
        // this.router.navigate(['./']);
      });
  }
}
