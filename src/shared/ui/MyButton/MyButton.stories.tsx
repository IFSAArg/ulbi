import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MyButton, MyButtonSize, MyButtonTheme } from './MyButton';

export default {
  title: 'Shared/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Clear',
  theme: MyButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  theme: MyButtonTheme.OUTLINE,
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Outline',
  theme: MyButtonTheme.OUTLINE,
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Background = Template.bind({});
Background.args = {
  children: 'Outline',
  theme: MyButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Outline',
  theme: MyButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '<',
  theme: MyButtonTheme.BACKGROUND,
  square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '<',
  theme: MyButtonTheme.BACKGROUND,
  square: true,
  size: MyButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '<',
  theme: MyButtonTheme.BACKGROUND,
  square: true,
  size: MyButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '<',
  theme: MyButtonTheme.BACKGROUND,
  square: true,
  size: MyButtonSize.XL,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  theme: MyButtonTheme.OUTLINE,
  size: MyButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: MyButtonTheme.OUTLINE,
  size: MyButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: MyButtonTheme.OUTLINE,
  size: MyButtonSize.XL,
};
