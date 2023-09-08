import { BugButton } from 'app/providers/ErrorBoundary';
import { CounterBtn } from 'features/CounterBtn/CounterBtn';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation('main');
  const [messages, setMessages] = useState(0);

  return (
    <>
      <h1>{t('main-page')}</h1>
      <h2>{t('you-have', { count: messages })}</h2>
      <CounterBtn setMessages={() => setMessages(messages + 1)} />
      <BugButton />
    </>
  );
});

export default MainPage;
