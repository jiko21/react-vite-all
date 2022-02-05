import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Todo } from '../src/components/Todo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const App = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
App.args = {};
