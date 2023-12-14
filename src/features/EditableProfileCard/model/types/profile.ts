import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export type ValidateProfileErrors =
  | 'incorrect user data'
  | 'incorrect age'
  | 'incorrect country'
  | 'server error'
  | 'no data';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateProfileErrors?: ValidateProfileErrors[];
}
