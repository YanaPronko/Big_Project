import path from "path";

import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const uiPath = path.resolve(__dirname, "..", "..", "src", "shared", "ui");
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

const layers = ["app", "shared", "entities", "features", "widgets", "pages"];
const isAbsolute = (path: string) =>
  layers.some((layer) => path.startsWith(layer));

const files = project.getSourceFiles();

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);

  if (indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}';`;
    const file = directory.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    });

    file.save();
  }
});

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach((declaration) => {
    const value = declaration.getModuleSpecifierValue();

    const valueWithoutAlias = value.replace("@/", "");

    const segments = valueWithoutAlias.split("/");

    const isSharedLayer = segments?.[0] === "shared";
    const isUiSlice = segments?.[1] === "ui";

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split("/").slice(0, 3).join("/");
      declaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
