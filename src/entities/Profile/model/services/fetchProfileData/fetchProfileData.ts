import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptionsConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkOptionsConfig<string>>(
  'profile/fetchingProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get('/profile');

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
