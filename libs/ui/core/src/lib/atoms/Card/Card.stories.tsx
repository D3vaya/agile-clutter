import { Story, Meta } from '@storybook/react';
import { CardProps } from '../commons';
import { Card } from './';

export default {
  component: Card,
  title: 'UiCore',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;
export const Primary = Template.bind({});
Primary.args = {};

<div>hola</div>;
