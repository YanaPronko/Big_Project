import { memo } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/deprecated/Text";
import { Page } from "@/widgets/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page
      className={classNames("", {}, [className])}
      data-testid="AdminPanelPage"
    >
      <Text title={t("admin-panel-page")} size="xl" />
    </Page>
  );
});

export default AdminPanelPage;
