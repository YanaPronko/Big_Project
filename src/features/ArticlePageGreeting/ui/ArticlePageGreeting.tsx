import { memo, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDeviceDetect } from "@/shared/lib/hooks/useDeviceDetect/useDeviceDetect";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { Text } from "@/shared/ui/deprecated/Text";

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation("article");
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlePageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  const isMobile = useDeviceDetect();

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
    }
  }, [dispatch, isArticlePageWasOpened]);

  const text = <Text text={`${t("welcome-to-the-articles")}`} />;

  const onClose = () => {
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
