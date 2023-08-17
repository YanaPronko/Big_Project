import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

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
    <Button
      onClick={onThrowError}
    >
      {t('throw-error')}
    </Button>
  );
};
