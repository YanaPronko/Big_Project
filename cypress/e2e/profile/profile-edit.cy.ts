/* eslint-disable linebreak-style */
let profileId = '';

describe('Profile', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Profile is loaded succesfully', () => {
    cy.getByTestId('EditableProfileCard.firstName').should('have.value', 'test');
  });

  it('Profile is edited succesfully', () => {
    const newTestName = 'newTestUser';
    const newLastName = 'newTestLastname';
    cy.updateProfile(newTestName, newLastName);
    cy.getByTestId('EditableProfileCard.firstName').should('have.value', newTestName);
    cy.getByTestId('EditableProfileCard.lastName').should('have.value', newLastName);
  });
});
