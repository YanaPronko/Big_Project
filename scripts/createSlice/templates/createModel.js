const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e);
    }
  };

  const lowerSliceName = `${sliceName}`[0].toLowerCase() + `${sliceName}`.slice(1);
  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${lowerSliceName}Slice.ts`),
        reduxSliceTemplate(lowerSliceName)
      );
    } catch (e) {
      console.log('Не удалось создать редакс слайс', e);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${lowerSliceName}Schema.ts`),
        schemaTypeTemplate(lowerSliceName)
      );
    } catch (e) {
      console.log('Не удалось создать тип схемы стейта', e);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};
