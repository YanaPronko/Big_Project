/* eslint-disable no-param-reassign */
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
// import { BuildPaths } from '../types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  // const paths: BuildPaths = {
  //   build: '',
  //   entry: '',
  //   html: '',
  //   src: path.resolve(__dirname, '..', '..', 'src'),
  // };

  if (config.resolve) {
    config.resolve.modules = [
      path.resolve(__dirname, '../../src'),
      'node_modules',
    ];
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../../src'),
    };
  }
  config.resolve?.extensions?.push('.tsx', '.ts');

  if (config.module?.rules) {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push({
    test: /\.s(a|c)ss$/,
    // include: path.resolve(__dirname, '../'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
          // modules: {
          //   auto: true,
          //   localIdentName: '[name]__[local]--[hash:base64:5]',
          // },
        },
      },
      'sass-loader',
    ],
  });
  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://apitest.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );
  return config;
};
