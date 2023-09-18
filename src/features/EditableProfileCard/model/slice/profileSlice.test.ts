import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData';
import {
  profileActions,
  profileReducer,
} from 'features/EditableProfileCard/model/slice/profileSlice';
import { ProfileSchema } from 'features/EditableProfileCard/model/types/profile';

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
