import { RuleSetRule } from 'webpack';

// import ReactRefreshTypeScript from 'react-refresh-typescript';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from '../types/config';
// import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  // const babelLoader: RuleSetRule = {
  //   test: /\.(js|jsx|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['@babel/preset-env'],
  //     },
  //   },
  // };

  const SVGLoader: RuleSetRule = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              }
            }
          ]
        }
      }
    }],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader: RuleSetRule = buildCssLoader(options);

  //  Если использовать JS, то нужен был бы еще babel-loader
  //  с TS отдеьлный babel-loader не нужен

  // const tsLoader: RuleSetRule = {
  //   test: /\.tsx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: 'ts-loader',
  //       // options: {
  //       //   getCustomTransformers: () => ({
  //       //     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //       //   }),
  //       // },
  //     },
  //   ],
  // };

  return [
    fileLoader,
    SVGLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    /* babelLoader */ /* tsLoader */
    cssLoader,
  ];
}
