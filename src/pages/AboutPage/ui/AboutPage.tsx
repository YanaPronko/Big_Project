import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Page>
      <h1>{t('about-page')}</h1>
    </Page>
  );
});

export default AboutPage;
