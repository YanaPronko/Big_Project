import { BuildOptions } from "config/types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export function buildLoaders({isDev }: BuildOptions): RuleSetRule[] {
  const cssLoader = {
    test: /\.s|[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,

      // Translates CSS into CommonJS
      // Если нам нужны доп опции для лоадера, то передаем вместо названия
      // лоадера объект, в котором указываем название лоадера и нужные опции
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:8]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  //  Если использовать JS, то нужен был бы еще babel-loader
  //  с TS отдеьлный babel-loader не нужен
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    cssLoader,
    tsLoader,
  ];
}