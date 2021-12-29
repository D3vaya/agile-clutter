import { Story, Meta } from '@storybook/react';
import { UiCore, UiCoreProps } from './ui-core';

export default {
  component: UiCore,
  title: 'UiCore',
} as Meta;

const Template: Story<UiCoreProps> = (args) => <UiCore {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
