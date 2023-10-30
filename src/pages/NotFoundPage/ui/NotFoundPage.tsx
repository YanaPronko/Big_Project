import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('page-not-found')}</h1>
    </Page>
  );
}
