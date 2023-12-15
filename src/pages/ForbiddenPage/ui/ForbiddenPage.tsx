import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      <Text title={t('you-havent-access')} size="xl" />
    </Page>
  );
});
