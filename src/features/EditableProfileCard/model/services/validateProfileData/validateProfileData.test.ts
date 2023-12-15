import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { validateProfileData } from './validateProfileData';

describe('Test validateProfileData function', () => {
  const profileData = {
    first: 'Yana',
    lastname: 'Prankonkjj',
    age: 78,
    currency: 'USD' as Currency,
    country: 'Kazakhstan' as Country,
    city: 'Minsk',
    username: 'adminbnm,',
  };
  test('should return  "no data"', () => {
    expect(validateProfileData()).toEqual(['no data']);
  });
  test('should return  "incorrect user data"', () => {
    expect(validateProfileData({ ...profileData, lastname: '' })).toEqual(['incorrect user data']);
  });
  test('should return  "incorrect user data"', () => {
    expect(validateProfileData({ ...profileData, first: '' })).toEqual([
      'incorrect user data',
    ]);
  });
  test('should return  "incorrect age"', () => {
    expect(validateProfileData({ ...profileData, age: 0 })).toEqual(['incorrect age']);
  });
  test('should return  "incorrect country"', () => {
    expect(validateProfileData({ ...profileData, country: undefined })).toEqual(['incorrect country']);
  });
});
