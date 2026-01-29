import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MyModal } from './MyModal';

export default {
  title: 'Shared/Modal',
  component: MyModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyModal>;

const Template: ComponentStory<typeof MyModal> = (args) => <MyModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dollar',
};

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Lorem ipsum dollar',
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
