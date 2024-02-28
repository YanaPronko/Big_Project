import { Profile } from "@/entities/Profile";

import { ValidateProfileErrors } from "../../types/profileSchema";

export const validateProfileData = (
  profile?: Profile,
): ValidateProfileErrors[] => {
  if (!profile) {
    return ["no data"];
  }

  const { first, lastname, age, country, city } = profile;

  const validateErrors: ValidateProfileErrors[] = [];
  if (!first || !lastname) {
    validateErrors.push("incorrect user data");
  }
  if (!age || !Number.isInteger(age)) {
    validateErrors.push("incorrect age");
  }
  if (!country) {
    validateErrors.push("incorrect country");
  }
  if (!city) {
    validateErrors.push("incorrect city");
  }
  return validateErrors;
};
