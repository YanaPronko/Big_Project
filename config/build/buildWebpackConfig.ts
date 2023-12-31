import { Configuration } from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from '../types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
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
      filename: '[name].[contenthash].js',
      path: paths.build,
      // Паблик пас нужен для того, чтобы в пути не появлялось лишних вставок
      publicPath: '/',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
