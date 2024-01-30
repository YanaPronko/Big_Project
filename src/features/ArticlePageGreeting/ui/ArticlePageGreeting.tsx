import { memo, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDeviceDetect } from "@/shared/lib/hooks/useDeviceDetect/useDeviceDetect";
import { Drawer } from "@/shared/ui/Drawer";
import { Modal } from "@/shared/ui/Modal";
import { Text } from "@/shared/ui/Text";

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
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

  const text = <Text text={`${t("hello")}`} />;

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
