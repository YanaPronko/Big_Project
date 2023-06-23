import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { Configuration } from "webpack";
import { BuildOptions } from "../types/config";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): Configuration {
  const {mode, paths, isDev} = options
  return {
    mode,
    // Можно указывать несколько entry points, тогда нужно сделать объектом entry{},
    // а внутри уже ключ - это название файла, а значение пишем путь к нему
    // (в итоге в build - несколько файлов)
    /*   entry: {
    app: './src/app.js',
    adminApp: './src/adminApp.js',
  }, */
    entry: paths.entry,
    output: {
      // contenthash - добавление hash к файлу, чтобы браузер отслеживал изменения файла
      // [name] - дефолтное имя подставляется
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool:  isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
