import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack, { WebpackPluginInstance } from 'webpack';
// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from '../types/config';

export function buildPlugins({
  paths, isDev, analyze, apiURL, project,
}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    // template - нужен для того, чтобы за исходник брал наш текущий html
    // можно использоватьи просто new HtmlWebpackPlugin() - тогда сформируется
    // html по умолчанию
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    // показывает прогресс сборки
    new webpack.ProgressPlugin(),
    new MiniCssExctractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: analyze ? 'server' : 'disabled',
    }),
  ];
  // if (isDev) {
  //   plugins.push(new ReactRefreshWebpackPlugin());
  // }
  return plugins;
}
