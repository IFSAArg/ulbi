import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

export default {
  title: 'page/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

// @ts-ignore
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Dark = Template.bind({});
Dark.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
