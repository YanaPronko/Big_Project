import { RuleSetRule } from 'webpack';
// import ReactRefreshTypeScript from 'react-refresh-typescript';
import { BuildOptions } from '../types/config';
// import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const babelLoader: RuleSetRule = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const SVGLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader: RuleSetRule = buildCssLoader(options);

  //  Если использовать JS, то нужен был бы еще babel-loader
  //  с TS отдеьлный babel-loader не нужен
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        // options: {
        //   getCustomTransformers: () => ({
        //     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        //   }),
        // },
      },
    ],
  };

  return [fileLoader, SVGLoader, babelLoader, tsLoader, cssLoader];
}
