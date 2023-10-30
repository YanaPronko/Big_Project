import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptionsConfig } from '@/app/providers/StoreProvider';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkOptionsConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());
  const validateErrors = validateProfileData(formData);
  if (validateErrors.length) {
    return rejectWithValue(validateErrors);
  }
  try {
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData,
    );
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue(['server error']);
  }
});
