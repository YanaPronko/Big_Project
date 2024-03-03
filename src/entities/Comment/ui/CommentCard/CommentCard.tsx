import { FC } from "react";

import { ToggleFeatures } from "@/shared/lib/featureFlags";

import { CommentCardDeprecated } from "./CommentCardDeprecated/CommentCard";
import { CommentCardRedesigned } from "./CommentCardRedesigned/CommentCard";
import { CommentCardProps } from "../../model/types/comment";

export const CommentCard: FC<CommentCardProps> = (props) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<CommentCardRedesigned {...props} />}
    off={<CommentCardDeprecated {...props} />}
  />
);
