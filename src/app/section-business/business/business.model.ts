import { Currency } from 'src/app/common/currency/currency.model';
import { BaseModel } from 'src/app/shared/models/BaseModel';
import { User } from 'src/app/users/users.model';
import { BusinessType } from './business-type/business-type.model';
import { File } from 'src/app/common/file/file.model';
import { Industry } from 'src/app/common/industry/industry.model';
import { Country } from 'src/app/common/country/country.model';

export interface Business extends BaseModel {
  name?: string;

  business_logo_id?: number;

  email_address?: string;

  description?: string;

  type_business_id?: number;

  industry_id?: number;

  country_id?: number;

  currency_id?: number;

  point_balance?: number;

  creator_id?: number;

  registration_completed: boolean;

  business_logo?: File;

  type_business?: BusinessType;

  country?: Country;

  currency?: Currency;

  creator?: User;

  industry?: Industry;
}
