export const setRate = (rate: number = 5, feedback: string = 'feedback') => {
  cy.getByTestId(`StarRating.${rate}`).click();
  cy.getByTestId('RatingCard.Feedback').type(feedback);
  cy.getByTestId('RatingCard.Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(rate: number, feedback?: string): Chainable<void>;
    }
  }
}
