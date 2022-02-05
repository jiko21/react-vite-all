import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { TodoForm } from '../../src/components/TodoForm';

describe('components/TodoForm', () => {
  it('correctly render', () => {
    const handleSubmitMock = vi.fn();
    const component = render(<TodoForm handleSubmit={handleSubmitMock} />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly fill input', async () => {
    const handleSubmitMock = vi.fn();
    const component = render(<TodoForm handleSubmit={handleSubmitMock} />);
    const input = await screen.getByTestId('todoForm-input');
    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });
    expect(component.container).toMatchSnapshot();
  });

  it('correctly call handleSubmit when input is not empty', async () => {
    const handleSubmitMock = vi.fn();
    const component = render(<TodoForm handleSubmit={handleSubmitMock} />);
    const input = await screen.getByTestId('todoForm-input');
    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });
    const button = await screen.getByTestId('todoForm-button');
    fireEvent.click(button);
    expect(component.container).toMatchSnapshot();
    expect(handleSubmitMock).toBeCalled();
  });

  it('correctly not call handleSubmit when input is empty', async () => {
    const handleSubmitMock = vi.fn();
    render(<TodoForm handleSubmit={handleSubmitMock} />);
    const button = await screen.getByTestId('todoForm-button');
    fireEvent.click(button);
    expect(handleSubmitMock).not.toBeCalled();
  });
});
