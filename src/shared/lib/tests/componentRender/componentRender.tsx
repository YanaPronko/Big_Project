import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface ComponentRenderProps {
  route?: string,
  initialState?: DeepPartial<StateSchema>
}

export const componentRender = (componet: ReactNode, options: ComponentRenderProps = {}) => {
  const { route = '/', initialState } = options;
  render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTest}>{componet}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
