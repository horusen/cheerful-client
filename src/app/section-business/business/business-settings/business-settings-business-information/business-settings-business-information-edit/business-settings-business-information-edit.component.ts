import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { Business } from '../../../business.model';
import { BusinessService } from '../../../business.service';
import { CountryService } from 'src/app/common/country/country.service';
import { BusinessTypeService } from '../../../business-type/business-type.service';
import { CurrencyService } from 'src/app/common/currency/currency.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IndustryService } from 'src/app/common/industry/industry.service';
import { Validators } from '@angular/forms';
import { BusinessType } from '../../../business-type/business-type.model';
import { Industry } from 'src/app/common/industry/industry.model';
import { Currency } from 'src/app/common/currency/currency.model';
import { Country } from 'src/app/common/country/country.model';

@Component({
  selector: 'app-business-settings-business-information-edit',
  templateUrl: './business-settings-business-information-edit.component.html',
  styleUrls: ['./business-settings-business-information-edit.component.scss'],
})
export class BusinessSettingsBusinessInformationEditComponent extends BaseCreateComponent<Business> {
  logoImage: string | null = null;
  coverImage = 'assets/img/content/profile/profile-cover-1.png';

  business: Business;
  businessTypes: BusinessType[] = [];
  industries: Industry[] = [];
  currencies: Currency[] = [];
  countries: Country[] = [];

  constructor(
    public businessService: BusinessService,
    public industryService: IndustryService,
    public countryService: CountryService,
    public typeBusinessService: BusinessTypeService,
    public currencyService: CurrencyService,
    public authService: AuthService
  ) {
    super(businessService);
    this.business = this.authService.business;
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.business.name, [Validators.required]],
      email_address: [this.business.email_address, [Validators.required]],
      type_business_id: [
        this.business.type_business?.id,
        [Validators.required],
      ],
      industry_id: [this.business.industry?.id, [Validators.required]],
      country_id: [this.business.country?.id, [Validators.required]],
      currency_id: [this.business.currency?.id, [Validators.required]],
      description: [this.business.description, [Validators.required]],
    });

    if (this.business.business_logo) {
      this.logoImage = this.business.business_logo.url;
    }
  }

  displayImage(image: File): void {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.logoImage = reader.result as string;
    };
  }

  override onFileChanged(event: any) {
    let fichier: File = event.target.files[0];
    // if (fichier.type !== 'application/image') {
    //   return this.helper.notification.alertDanger('Format Invalide');
    // }

    this.formData.append('business_logo', fichier);
    this.displayImage(fichier);
  }

  ngOnInit(): void {
    this.typeBusinessService.get().subscribe();
    this.currencyService.get().subscribe();
    this.countryService.get().subscribe();
    this.industryService.get().subscribe();

    this.subscriptions['types'] = this.typeBusinessService.data$.subscribe(
      (data: any) => {
        this.businessTypes = data;
      }
    );

    this.subscriptions['currency'] = this.currencyService.data$.subscribe(
      (data: any) => {
        this.currencies = data;
      }
    );

    this.subscriptions['country'] = this.countryService.data$.subscribe(
      (data: any) => {
        this.countries = data;
      }
    );

    this.subscriptions['industry'] = this.industryService.data$.subscribe(
      (data: any) => {
        this.industries = data;
      }
    );

    this.initForm();
  }

  override create() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      this.logInvalidFields(this.form);

      return;
    }

    this.loading = true;
    const data = {
      ...this.form.value,
      currency_id: Number(this.form.value.currency_id),
      country_id: Number(this.form.value.country_id),
      type_business_id: Number(this.form.value.type_business_id),
      industry_id: Number(this.form.value.industry_id),
    };

    this.fillFormData(data);
    this.service.update(this.business.id!, this.formData).subscribe(() => {
      this.loading = false;
      this.helper.notification.alertSuccess('Information added successfully');
      this.created.emit();
    });
  }
}
