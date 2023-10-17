const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaNameToLowerCase = `${sliceName}`[0].toLowerCase() + `${sliceName}`.slice(1);
  const schemaName = `${sliceName}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${schemaName} } from './model/types/${schemaNameToLowerCase}Schema';
`
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
