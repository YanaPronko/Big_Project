import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileData } from './getProfileData';
// import IMG from '../../../../../shared/assets/test/avatar.png';

describe('Getting Profile Data from state', () => {
  test('getting data from profile', () => {
    const data = {
      first: 'Yana',
      lastname: 'Prankonkjj,',
      age: 78,
      currency: 'USD' as Currency,
      country: 'Kazakhstan' as Country,
      city: 'Minsk',
      username: 'adminbnm,',
      // avatar: IMG,
    };
    const state: DeepPartial<StateSchema> = {
      profile: { data },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('check selector without state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
