import { memo } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { RatingCardDeprecated } from "./RatingCardDeprecated/RatingCard";
import { RatingCardRedesigned } from "./RatingCardRedesigned/RatingCard";
import { RatingCardProps } from "../../model/types/rating";

export const RatingCard = memo((props: RatingCardProps) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<RatingCardRedesigned {...props} />}
    off={<RatingCardDeprecated {...props} />}
  />
));
