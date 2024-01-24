/* eslint-disable linebreak-style */
import { selectByTestId } from "../../helpers/selectByTestId";

describe("Router", () => {
  describe("Non authorised user", () => {
    it("Move to Main page", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("Redirect to Main page", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("Redirect to Not found page", () => {
      cy.visit("/assdsfgdg");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });

  describe("Authorised user", () => {
    beforeEach(() => {
      cy.login();
    });

    it("Move to Profile page", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });

    it("Move to Articles list page", () => {
      cy.visit("/articles");
      cy.get(selectByTestId("ArticleListPage")).should("exist");
    });
  });
});
