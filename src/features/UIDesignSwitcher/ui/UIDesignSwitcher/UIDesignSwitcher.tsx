import { memo, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";
import { getFeatureFlags, updateFeatureFlags } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ListBoxRedesigned } from "@/shared/ui/redesigned/Popups";
import { SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

interface UIDesignSwitcherProps {
  className?: string;
}

export const UIDesignSwitcher = memo((props: UIDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const isAppRedesigned = getFeatureFlags("isAppRedesigned");
  const [isLoading, setIsLoading] = useState(false);


  const items = [
    {
      content: t("new-interface"),
      value: "new",
    },
    {
      content: t("old-interface"),
      value: "old",
    },
  ];

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlags({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: value === "new",
          },
        }),
      ).unwrap();
      setIsLoading(false);
    }
  };

  return (
    <HStack gap="8">
      <TextRedesigned text={t("interfaces-varian")}/>
      {isLoading ? (
        <SkeletonRedesigned width={100} height={40} />
      ) : (
        <ListBoxRedesigned
          onChange={onChange}
          items={items}
          selectedVal={isAppRedesigned ? "new" : "old"}
          className={className}

        />
      )}
    </HStack>
  );
});
