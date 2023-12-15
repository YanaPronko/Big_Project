import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

import cls from './BugButton.module.scss';

// Тестовый компонент для отработкі ошибок
export const BugButton = () => {
  const { t } = useTranslation('main');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrowError = () => {
    setError(true);
  };

  return (
    <Button className={cls.btn} theme="outline" onClick={onThrowError}>
      {t('throw-error')}
    </Button>
  );
};
