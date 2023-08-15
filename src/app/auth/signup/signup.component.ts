import { Validators } from '@angular/forms';
import { BaseCreateComponent } from './../../shared/base-component/base-create.component';
import { Component, Input, OnInit, Type } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/users/users.model';
import { TypeUsersService } from 'src/app/users/type-users/type-users.service';
import { GenderService } from 'src/app/users/gender/gender.service';
import { Gender } from 'src/app/users/gender/gender.model';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/common/country/country.service';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input-gg';
import { Country } from 'src/app/common/country/country.model';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';
import { Storage } from 'src/app/helpers/storage/storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent
  extends BaseCreateComponent<User>
  implements OnInit
{
  userInfo: (User & { invitation: number }) | null = null;
  registrationUserType: TypeUserEnum = TypeUserEnum.BusinessAdmin;
  countryList: Country[] = [];
  genderList: Gender[] = [];
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.Ghana,
    CountryISO.Nigeria,
    CountryISO.Senegal,
  ];

  get TypeUserEnum() {
    return TypeUserEnum;
  }

  constructor(
    public authService: AuthService,
    public typeUserService: TypeUsersService,
    public genderService: GenderService,
    public countryService: CountryService,
    public storage: Storage,
    public route: ActivatedRoute
  ) {
    super(authService);
  }

  /**
   * Initializes the component and sets up the necessary subscriptions.
   */
  ngOnInit(): void {
    this.subscribeToQueryParams();
    this.fetchCountryData();
    this.subscribeToTypeUserChanges();
    this.subscribeToCountryData();
    this.initForm();
  }

  /**
   * Subscribes to the query params and sets the registrationUserType based on the 'type-user' param.
   */
  private subscribeToQueryParams(): void {
    this.route.queryParams.subscribe((params: any) => {
      const typeUserParam = params['type-user'];
      if (typeUserParam === 'individual') {
        this.registrationUserType = TypeUserEnum.Individual;
      } else if (typeUserParam === TypeUserEnum.BusinessAdmin) {
        this.registrationUserType = TypeUserEnum.BusinessAdmin;
      } else if (typeUserParam === 'merchant') {
        this.registrationUserType = TypeUserEnum.Merchant;
      }

      this.router.navigate(['/authentication/signup']);
    });
  }

  /**
   * Fetches the country data.
   */
  private fetchCountryData(): void {
    this.countryService.get().subscribe();
  }

  /**
   * Subscribes to the authService's registrationUserType$ and updates the registrationUserType accordingly.
   * Also fetches the gender data and sets up subscriptions if the registrationUserType is Individual.
   */
  private subscribeToTypeUserChanges(): void {
    this.subscriptions['registrationUserType'] =
      this.authService.registrationUserType$.subscribe((params) => {
        this.registrationUserType = params;
        if (this.registrationUserType == TypeUserEnum.Individual) {
          this.fetchGenderData();
          this.subscribeToGenderData();
          this.checkUserInfo();
        }
      });
  }

  /**
   * Subscribes to the countryService's data$ and updates the countryList accordingly.
   */
  private subscribeToCountryData(): void {
    this.subscriptions['country'] = this.countryService.data$.subscribe(
      (data: Country[]) => {
        this.countryList = data;
      }
    );
  }

  /**
   * Fetches the gender data.
   */
  private fetchGenderData(): void {
    this.genderService.get().subscribe();
  }

  /**
   * Subscribes to the genderService's data$ and updates the genderList accordingly.
   */
  private subscribeToGenderData(): void {
    this.subscriptions['genders'] = this.genderService.data$.subscribe(
      (data: Gender[]) => {
        this.genderList = data;
      }
    );
  }

  /**
   * Checks if the userInfo is available and navigates to the login page if it's not.
   */
  private checkUserInfo(): void {
    this.userInfo = this.storage.get('temp_user_info');
    // if (!this.userInfo) {
    //   this.router.navigate(['/authentication/login']);
    // }
  }

  /**
   * Initializes the form.
   */

  initForm() {
    this.form = this.fb.group({
      type_user_id: [this.registrationUserType, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone_number: [null, Validators.required],
      gender_id: [null],
      country_id: [this.countryList[0], Validators.required],
      password: [null, Validators.required],
      password_confirmation: [null, Validators.required],
      business_name: [null],
      store_name: [null],
      invitation_id: [null],
    });

    if (this.registrationUserType === TypeUserEnum.Individual) {
      this.form.get('gender_id')?.setValidators([Validators.required]);
      this.form.get('invitation_id')?.setValidators([Validators.required]);
      if (this.userInfo) {
        this.formValuePatcher('name', this.userInfo.name);
        this.formValuePatcher('email', this.userInfo.email);
        // @ts-expect-error
        this.formValuePatcher('invitation_id', this.userInfo.invitation_id);
      }
    } else if (this.registrationUserType === TypeUserEnum.BusinessAdmin) {
      this.form.get('business_name')?.setValidators([Validators.required]);
    }
  }

  signup(): void {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      this.logInvalidFields(this.form);
      return;
    }

    this.loading = true;
    const data = this.helper.object.omitNullValue({
      ...this.form.value,
      phone_number: this.form.value.phone_number.e164Number,
      country_id: parseInt(this.form.value.country_id),
      gender_id: parseInt(this.form.value.gender_id),
    });

    this.authService
      .signup({
        ...data,
      })
      .subscribe(() => {
        this.loading = false;
        this.initForm();
        this.created.emit();
        this.helper.notification.toastSuccess();
        this.router.navigate(['']);
      });
  }
}
