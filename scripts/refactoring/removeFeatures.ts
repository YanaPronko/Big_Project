import {
  JsxAttribute,
  Node,
  Project,
  SyntaxKind,
} from "ts-morph";

const project = new Project({});

const toggleFunctionName = "toggleFeatures";
const toggleComponentName = "ToggleFeatures";

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
  let isToggleFunction = false;
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFunctionName
    ) {
      isToggleFunction = true;
    }
  });
  return isToggleFunction;
};

function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
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
    ?.getLiteralValue();

  if (featureName !== removedFeatureName) return;

  if (featureState === "on") {
    node.replaceWithText(onFunction?.getBody().getText() ?? "");
  }
  if (featureState === "off") {
    node.replaceWithText(offFunction?.getBody().getText() ?? "");
  }
};

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => jsxAttributes.find((node) => node.getNameNode().getText() === name);

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith("(")) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, "on");

  const offAttribute = getAttributeNodeByName(attributes, "off");

  const featureNameAttribute = getAttributeNodeByName(attributes, "feature");

  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralValue();

  if (featureName !== removedFeatureName) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === "on" && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === "off" && offValue) {
    node.replaceWithText(offValue);
  }
};

files.forEach((file) => {
  file.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      return replaceToggleFunction(node);
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      return replaceToggleComponent(node);
    }
  });
});

project.save();
