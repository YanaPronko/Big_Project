import { BuildOptions } from "config/types/config";
import { Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // Для того, чтобы после обновления был доступ к странице
    historyApiFallback: true,
  }
}