export const updateProfile = (firstName: string = 'newUser', lastName: string = 'newLastname') => {
  cy.getByTestId('EditableProfileCard.EditBtn').click();
  cy.getByTestId('EditableProfileCard.firstName').clear().type(firstName);
  cy.getByTestId('EditableProfileCard.lastName').clear().type(lastName);
  cy.getByTestId('EditableProfileCard.SaveBtn').click();
};

export const resetProfile = (testId: string) => cy.request({
  method: 'PUT',
  url: `http://localhost:8000/profile/${testId}`,
  headers: { Authorization: 'test' },
  body: {
    id: '5',
    first: 'test',
    lastname: 'User',
    age: 35,
    currency: 'BYN',
    country: 'Russia',
    city: 'Minsk',
    username: 'testuser',
    avatar: 'https://avatars.githubusercontent.com/u/11681863311111111',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName?: string, lastName?: string): Chainable<void>;
      resetProfile(testId: string): Chainable<void>;
    }
  }
}
