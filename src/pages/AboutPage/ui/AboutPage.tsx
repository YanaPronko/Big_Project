import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <h1>{t('about-page')}</h1>
  );
}
