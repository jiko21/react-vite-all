import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoForm } from '../src/components/TodoForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/TodoForm',
  component: TodoForm,
} as ComponentMeta<typeof TodoForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoForm> = (args) => <TodoForm {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
