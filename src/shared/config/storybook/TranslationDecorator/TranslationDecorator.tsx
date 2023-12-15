import { Suspense, useEffect } from 'react';

import { Decorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../../config/i18n/i18n';

export const TranslationDecorator: Decorator = (Story, context) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { locale } = context.globals;
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
