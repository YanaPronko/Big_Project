import path from "path";
import webpack from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".tsx", ".ts");
  config.module?.rules?.push(buildCssLoader(true));
  return config;
};