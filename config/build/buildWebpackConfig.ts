import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";


export function buildWebpackConfig(options: BuildOptions): Configuration {
  const {mode, paths} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
    ignoreWarnings: [
      {
        module: /node_modules\/@types\/node/,
      },
    ]
  }
}