import { ProgressPlugin, WebpackPluginInstance } from "webpack"
import path from 'path'
import  HTMLWebpackPlugin  from 'html-webpack-plugin';
import { BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths): WebpackPluginInstance[] {
  return [
      new HTMLWebpackPlugin({
        template: paths.html,
      }),
      new ProgressPlugin(),
    ]
}