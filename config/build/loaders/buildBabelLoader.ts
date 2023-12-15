import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          // isDev && require.resolve('react-refresh/babel'),
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx && !isDev && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
        ].filter(Boolean),
      },
    },
  };
}
