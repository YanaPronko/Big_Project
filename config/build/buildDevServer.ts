import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from '../types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    hot: true,
    // allowedHosts: ['all'],
    // Для того, чтобы после обновления был доступ к странице
    historyApiFallback: true,
  };
}
