import { ProgressPlugin, WebpackPluginInstance } from "webpack"
import path from 'path'
import  HTMLWebpackPlugin  from 'html-webpack-plugin';

export function buildPlugins(): WebpackPluginInstance[] {
  return [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new ProgressPlugin(),
    ]
}