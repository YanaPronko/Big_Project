import { Profile } from "@/entities/Profile";

export type ValidateProfileErrors =
  | "incorrect user data"
  | "incorrect age"
  | "incorrect country"
  | "server error"
  | "no data";

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateProfileErrors?: ValidateProfileErrors[];
}
