import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';

import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';

describe('Testing athyncThunk: fetchProfileData', () => {
  test('success fetch of Profile Data', async () => {
    const profileData = {
      id: '1',
      first: 'Yana',
      lastname: 'Prankonkjj,',
      age: 78,
      currency: 'USD' as Currency,
      country: 'Kazakhstan' as Country,
      city: 'Minsk',
      username: 'adminbnm,',
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callAthyncThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('failed fetch of Profile Data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callAthyncThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
