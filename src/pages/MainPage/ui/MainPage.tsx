import { BugButton } from 'app/providers/ErrorBoundary';
import { CounterBtn } from 'features/CounterBtn/CounterBtn';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation('main');
  const [messages, setMessages] = useState(0);

  return (
    <>
      <h1>{t('MainPage')}</h1>
      <h2>{t('you-have', { count: messages })}</h2>
      <CounterBtn setMessages={() => setMessages(messages + 1)} />
      <BugButton />
    </>
  );
}
