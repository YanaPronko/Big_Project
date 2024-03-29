import { useTranslation } from "react-i18next";

import { Page } from "@/widgets/Page";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Page data-testid="NotFoundPage">
      <h1>{t("page-not-found")}</h1>
    </Page>
  );
}
