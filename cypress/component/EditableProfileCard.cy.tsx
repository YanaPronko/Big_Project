/* eslint-disable linebreak-style */
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

// TODO fix this test (mock data for ProfileCard?)

describe('EditableProfileCard.cy.ts', () => {
  it('should load Profile Card', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            profile: {
              readonly: true,
              // data: profileMock,
              // form: profileMock,
            },
            user: {
              authData: {
                id: '1',
                username: 'admin',
              },
            },
            asyncReducers: {
              profile: profileReducer,
            },
          },
        }}
      >
        <EditableProfileCard />
      </TestProvider>,
    );
  });
});
