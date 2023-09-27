import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';

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

describe('Testing athyncThunk: updateProfileData', () => {
  test('success update of Profile Data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
    const result = await thunk.callAthyncThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  // test('failed update of Profile Data', async () => {
  //   const thunk = new TestAsyncThunk(updateProfileData);
  //   thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const result = await thunk.callAthyncThunk();

  //   expect(result.meta.requestStatus).toBe('rejected');
  //   console.log(result);
  //   expect(result.payload).toEqual(['server error']);
  // });

  // test('failed update of Profile Data caused incorrect user data', async () => {
  //   const thunk = new TestAsyncThunk(updateProfileData);
  //   thunk.api.put.mockReturnValue(Promise.resolve({ data: { ...profileData, lastname: '' } }));
  //   const result = await thunk.callAthyncThunk();

  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toEqual(['incorrect user data']);
  // });
});
