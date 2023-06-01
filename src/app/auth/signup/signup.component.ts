import { Validators } from '@angular/forms';
import { BaseCreateComponent } from './../../shared/base-component/base-create.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/users/users.model';
import { Country } from 'src/app/mocks/country.model';
import { countries } from 'src/app/mocks/countries.mock';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent
  extends BaseCreateComponent<User>
  implements OnInit
{
  countryList!: Country[];
  genderList!: { name: string }[];
  constructor(public authService: AuthService) {
    super(authService);
  }

  ngOnInit(): void {
    this.countryList = countries;
    this.genderList = [
      {
        name: 'Male',
      },
      {
        name: 'Female',
      },
      {
        name: 'Other',
      },
    ];
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone_number: [null, Validators.required],
      gender: [null, Validators.required],
      location: [this.countryList[0], Validators.required],
      password: [null, Validators.required],
      password_confirmation: [null, Validators.required],
    });
  }

  signup(): void {
    this.loading = true;
    this.authService
      .signup({
        ...this.form.value,
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
