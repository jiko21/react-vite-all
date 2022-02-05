import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Input } from '../../src/components/Input';

describe('components/Input', () => {
  it('correctly render', () => {
    const component = render(<Input value={'sample'} />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly fire event', async () => {
    const testId = 'unit';
    const onChangeMock = vi.fn();
    render(<Input testId={testId} value={'dddd'} onChange={onChangeMock} type="text" />);
    const input = await screen.getByTestId(`${testId}-input`);
    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });
    expect(onChangeMock).toBeCalled();
  });
});
