import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module.rules.push(buildCssLoader(true));
  config.module.rules.push(buildSvgLoader());
  return config;
};
