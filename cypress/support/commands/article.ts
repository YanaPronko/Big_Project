import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Test Article',
  subtitle: 'IT, Economics, Science',
  img: 'https://cdn.pixabay.com/photo/2015/12/13/02/07/pebble-1090536_960_720.jpg',
  views: 1022,
  createdAt: '26.04.2022',
  userId: '1',
  type: [
    'IT',
    'Economics',
    'Science',
  ],
  blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
  method: 'POST',
  url: 'http://localhost:8000/articles',
  headers: { Authorization: 'hkjh' },
  body: article ?? defaultArticle,
}).then((response) => response.body);

export const removeArticle = (articleId: string) => cy.request({
  method: 'DELETE',
  url: `http://localhost:8000/articles/${articleId}`,
  headers: { Authorization: 'lmlll' },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
