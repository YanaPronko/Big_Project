import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
  profileActions,
  profileReducer,
} from './profileSlice';
import { ProfileSchema } from '../types/profileSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

describe('Test ProfileSlice', () => {
  const data = {
    first: 'Yana',
    lastname: 'Prankonkjj,',
    age: 78,
    currency: 'USD' as Currency,
    country: 'Kazakhstan' as Country,
    city: 'Minsk',
    username: 'adminbnm,',
  };

  test('test setRedonly reducer', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({
      readonly: true,
    });
  });

  test('test cancelEdit reducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data, lastname: '' },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      data,
      form: data,
      validateProfileErrors: undefined,
      readonly: true,
    });
  });
  test('test updateProfile reducer', () => {
    const state: DeepPartial<ProfileSchema> = { form: { age: 87 } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ age: 34 }),
      ),
    ).toEqual({
      form: { age: 34 },
    });
  });
  test('test profileReducer pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
    };
    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending),
    ).toEqual({ isLoading: true });
  });
  test('test profileReducer fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true };
    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, '', '')),
    ).toEqual({
      isLoading: false,
      data,
      form: data,
    });
  });
  test('test profileReducer rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.rejected),
    ).toEqual({ isLoading: false });
  });
  test('test updateProfileData extra reducer, pending status', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({ isLoading: true });
  });
  test('test updateProfileData extra reducer, fullfilled status', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      validateProfileErrors: undefined,
      readonly: true,
      data,
      form: data,
    });
  });
});
