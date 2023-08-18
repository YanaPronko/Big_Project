import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface ComponentRenderProps {
  route?: string
}

export const componentRender = (componet: ReactNode, options: ComponentRenderProps = {}) => {
  const { route } = options;
  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {componet}
      </I18nextProvider>
    </MemoryRouter>,
  );
};
