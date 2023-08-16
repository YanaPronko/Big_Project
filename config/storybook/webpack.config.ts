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
  if (config.module?.rules) {
    // @ts-ignore
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module?.rules?.push({
    test: /\.s(a|c)ss$/,
    // include: path.resolve(__dirname, '../'),
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: "[path][name]__[local]--[hash:base64:5]"
          },
          // modules: {
          //   auto: true,
          //   localIdentName: '[name]__[local]--[hash:base64:5]',
          // },
        },
      },
      "sass-loader",
    ],
  });
  return config;
};