import React, { useMemo, useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

type Props = {
  handleSubmit: (text: string) => void;
};

export const TodoForm: React.FC<Props> = ({ handleSubmit }) => {
  const [text, setText] = useState('');
  const disabled = useMemo(() => text.length === 0, [text]);
  const onSubmit = () => {
    if (text.length > 0) {
      handleSubmit(text);
      setText('');
    }
  };

  return (
    <div>
      <Input type="text" value={text} onChange={(e) => setText(e.target.value)} testId="todoForm" />
      <Button onClick={onSubmit} disabled={disabled} label="ADD" testId="todoForm" />
    </div>
  );
};
