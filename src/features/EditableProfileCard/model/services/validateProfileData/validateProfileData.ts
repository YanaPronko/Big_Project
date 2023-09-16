import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidateProfileErrors[] => {
  if (!profile) {
    return ['no data'];
  }

  const {
    first, lastname, age, country,
  } = profile;

  const validateErrors: ValidateProfileErrors[] = [];
  if (!first || !lastname) {
    validateErrors.push('incorrect user data');
  }
  if (!age || !Number.isInteger(age)) {
    validateErrors.push('incorrect age');
  }
  if (!country) {
    validateErrors.push('incorrect country');
  }
  return validateErrors;
};
