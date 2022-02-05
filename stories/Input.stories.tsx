import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../src/components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  const [text, setText] = useState('');
  return (
    <Input
      {...args}
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  type: 'text',
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
  type: 'email',
};

export const Number = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Number.args = {
  type: 'number',
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  type: 'password',
};
