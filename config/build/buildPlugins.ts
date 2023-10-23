import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack, { WebpackPluginInstance } from 'webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
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
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ];
  if (isDev) {
    plugins.push(new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }));
  }
  return plugins;
}
