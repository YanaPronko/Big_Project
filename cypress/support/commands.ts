import * as articleCommands from "./commands/article";
import * as commentsCommands from "./commands/comments";
import * as common from "./commands/common";
import * as profileCommands from "./commands/profile";
import * as ratingCommands from "./commands/rating";

// -- This is a parent command --
Cypress.Commands.addAll(common);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

export {};
