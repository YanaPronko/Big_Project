import { Node, Project, StringLiteral, SyntaxKind } from "ts-morph";

const project = new Project({});

const removedFeatureName = process.argv[2]; /* isArtcileRatingEnabled */
const featureState = process.argv[3]; /* on|off */

if (!removedFeatureName) {
  throw new Error("Print the name of feature flag");
}
if (!featureState) {
  throw new Error("Print the state of feature flag");
}

if (featureState !== "on" && featureState !== "off") {
  throw new Error("Print the valid state of feature flag ('on' or 'off')");
}


project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
  let istoggleFunction = false;
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === "toggleFeatures"
    ) {
      istoggleFunction = true;
    }
  });
  return istoggleFunction;
};

files.forEach((file) => {
  file.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
      );

      if (!objectOptions) return;

      const onFunctionProperty = objectOptions.getProperty("on");
      const offFunctionProperty = objectOptions.getProperty("off");
      const featureNameProperty = objectOptions.getProperty("name");

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

      if (featureName !== removedFeatureName) return;

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }
      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
