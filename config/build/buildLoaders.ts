import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders(options: BuildOptions): RuleSetRule[] {

  const cssLoader  = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/, 
    use: 'ts-loader', 
    exclude: /node_modules/, 
  }
 
  return [
      tsLoader,
      cssLoader,
  ]
}