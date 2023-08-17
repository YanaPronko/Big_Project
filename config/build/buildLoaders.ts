import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
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

  const cssLoader: RuleSetRule = buildCssLoader(isDev);

  //  Если использовать JS, то нужен был бы еще babel-loader
  //  с TS отдеьлный babel-loader не нужен
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
  };

  return [fileLoader, SVGLoader, babelLoader, tsLoader, cssLoader];
}
