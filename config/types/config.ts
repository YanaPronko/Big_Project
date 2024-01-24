export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
  // assets: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  analyze: boolean;
  apiURL: string;
  project: "storybook" | "frontend" | "jest";
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
  analyze: boolean;
  apiURL: string;
}
