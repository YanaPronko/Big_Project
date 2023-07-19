import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <h1>{t('page-not-found')}</h1>
  );
}
