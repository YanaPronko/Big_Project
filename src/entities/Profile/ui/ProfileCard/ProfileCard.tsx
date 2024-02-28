import { FC } from "react";

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { ProfileCardDeprecated } from "./ProfileCardDeprecated/ProfileCardDeprecated";
import { ProfileCardRedesigned } from "./ProfileCardRedesigned/ProfileCardRedesigned";
import { Profile } from "../../model/types/profile";

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCountry?: (value: Country) => void;
  onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => (

  <ToggleFeatures
    feature="isAppRedesigned"
    on={<ProfileCardRedesigned {...props} />}
    off={<ProfileCardDeprecated {...props} />}
  />
);
