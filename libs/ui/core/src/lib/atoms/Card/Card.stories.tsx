import { Story, Meta } from '@storybook/react';
import { Card } from './index';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<any> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
