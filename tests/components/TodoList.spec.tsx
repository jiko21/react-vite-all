import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { TodoList } from '../../src/components/TodoList';

describe('components/TodoList', () => {
  const todos = [
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
  ];
  const onRemoveMock = vi.fn();

  it('correctly render', () => {
    const component = render(<TodoList todos={todos} onRemove={onRemoveMock} />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly fire event', async () => {
    const testId = 'unit';
    render(<TodoList todos={todos} onRemove={onRemoveMock} testId={testId} />);
    const removeButton = await screen.getByTestId(`${testId}-remove-1-button`);
    fireEvent.click(removeButton);
    expect(onRemoveMock).toBeCalledWith(1);
  });
});
