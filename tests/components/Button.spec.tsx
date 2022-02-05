import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '../../src/components/Button';

describe('components/Button', () => {
  it('correctly render: primary', () => {
    const component = render(<Button label={'sample'} />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly fire event: primary', () => {
    const testId = 'unit';
    const onClickMock = vi.fn();
    render(<Button label={'sample'} testId={testId} onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId(`${testId}-button`));
    expect(onClickMock).toBeCalled();
  });

  it('correctly render: danger', () => {
    const component = render(<Button label={'sample'} buttonStyle="danger" />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly fire event: danger', () => {
    const testId = 'unit';
    const onClickMock = vi.fn();
    render(<Button label={'sample'} testId={testId} buttonStyle="danger" onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId(`${testId}-button`));
    expect(onClickMock).toBeCalled();
  });

  it('correctly render: disabled', () => {
    const component = render(<Button label={'sample'} disabled />);
    expect(component.container).toMatchSnapshot();
  });

  it('correctly not fire event: disabled', () => {
    const testId = 'unit';
    const onClickMock = vi.fn();
    render(<Button label={'sample'} testId={testId} disabled onClick={onClickMock} />);
    fireEvent.click(screen.getByTestId(`${testId}-button`));
    expect(onClickMock).not.toBeCalled();
  });
});
