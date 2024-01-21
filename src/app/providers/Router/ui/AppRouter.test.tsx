import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/AppRoutes';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppRouter } from './AppRouter';

describe('Router tests', () => {
  test('Page should be rendered', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });
  test('Page should\'nt be found', async () => {
    componentRender(<AppRouter />, {
      route: '/asdfgh',
    });
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  // TODO: rewrite test for lazy

  test('User should be redirected to Main page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test.skip('Authorised user get access to Profile Page', async () => {
    act(() => {
      componentRender(<AppRouter />, {
        route: getRouteProfile('1'),
        initialState: {
          user: {
            authData: {},
            _inited: true,
          },
        },
      });
    });

    await waitFor(async () => {
      const page = await screen.findByTestId('ProfilePage');
      expect(page).toBeInTheDocument();
    });
  });
  test('Authorised user without the required role should be redirected to Forbidden Page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {},
          _inited: true,
        },
      },
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });
  test('Authorised user with the required role can get access to Admin Panel', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: {
            roles: ['MANAGER'],
          },
          _inited: true,
        },
      },
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
