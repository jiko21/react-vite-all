import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoList } from '../src/components/TodoList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoList> = (args) => {
  const [todos, setTodos] = useState(args.todos);
  const onRemove = (i: number) => {
    setTodos((state) => state.filter((item) => item.id !== i));
  };
  return <TodoList todos={todos} onRemove={onRemove} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  todos: [
    {
      id: 0,
      content: 'aaa',
    },
    {
      id: 1,
      content: 'bbb',
    },
    {
      id: 2,
      content: 'ccc',
    },
  ],
};
