import { memo, useState } from "react";

import { useTranslation } from "react-i18next";

// eslint-disable-next-line path-checker-pryweb/layers-import
import { BugButton } from "@/app/providers/ErrorBoundary";
import { CounterBtn } from "@/features/CounterBtn";
import { Page } from "@/widgets/Page";
import { getFeatureFlags } from "@/shared/lib/featureFlags";

const MainPage = memo(() => {
  const { t } = useTranslation("main");
  const [messages, setMessages] = useState(0);
  const isCounterEnabled = getFeatureFlags('isCounterEnabled');

  return (
    <Page data-testid="MainPage">
      <h1>{t("main-page")}</h1>
      <h2>{t("you-have", { count: messages })}</h2>
      {isCounterEnabled && (
        <CounterBtn setMessages={() => setMessages(messages + 1)} />
      )}
      <BugButton />
    </Page>
  );
});

export default MainPage;
