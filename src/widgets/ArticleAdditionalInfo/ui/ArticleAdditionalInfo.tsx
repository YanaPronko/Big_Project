import { memo } from "react";

import { useTranslation } from "react-i18next";

import { User } from "@/entities/User";
import { AvatarRedesigned } from "@/shared/ui/redesigned/Avatar";
import { ButtonRedesigned } from "@/shared/ui/redesigned/Button";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";


interface ArticleAdditionalInfoProps {
  author: User;
  createdAt: string;
  views: number;
  canEdit: boolean;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { author, createdAt, views, canEdit, onEdit } = props;

    const { t } = useTranslation("article");

    return (
      <VStack gap="32" align="start">
        <HStack gap="8">
          <AvatarRedesigned src={author.avatar} size={32} alt="user avatar" />
          <TextRedesigned text={author.username} bold />
          <TextRedesigned text={createdAt} />
        </HStack>
        {canEdit && (
          <ButtonRedesigned onClick={onEdit}>{t("edit")}</ButtonRedesigned>
        )}
        <TextRedesigned text={t('views', { count: views })} />
      </VStack>
    );
  },
);
