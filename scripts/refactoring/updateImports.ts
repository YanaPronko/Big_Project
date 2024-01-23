import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const layers = ["app", "shared", "entities", "features", "widgets", "pages"];
const isAbsolute = (path: string) =>
  layers.some((layer) => path.startsWith(layer));

const files = project.getSourceFiles();

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach((declaration) => {
    const value = declaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      declaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
