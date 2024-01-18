/* eslint-disable linebreak-style */
describe('Profile', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      cy.visit(`/profile/${data.id}`);
    });
  });
  it('Profile is loaded succesfully', () => {
    cy.getByTestId('EditableProfileCard.firstName').should('have.value', 'test');
  });

  it('Profile is edited succesfully', () => {
    // cy.getByTestId('EditableProfileCard.firstName').should('have.value', 'test');
  });
});
