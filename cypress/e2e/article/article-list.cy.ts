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

  // Example with stubs(fixtures)
  it('articles are loaded with fixture', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
