/* eslint-disable linebreak-style */
describe('User visit articles page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('articles');
  });

  it('articles are loaded successfully', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
