/* eslint-disable linebreak-style */
let articleId = '';

describe('User visit Article detail page spec', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      articleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
  });

  it('Article is loaded successfully', () => {
    cy.getByTestId('ArticleDetails.Content').should('exist');
  });

  it('Articles recomendations are loaded successfully', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('User can leave a comment', () => {
    cy.getByTestId('ArticleDetails.Content').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('Test Comment Text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('User can leave a star and a feedback', () => {
    const rate = 4;
    cy.getByTestId('ArticleDetails.Content').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(rate, 'Test feedback');
    cy.get('[data-selected=true]').should('have.length', rate);
  });
});
