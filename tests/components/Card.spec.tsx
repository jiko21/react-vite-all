import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from '../../src/components/Card';

describe('components/Card', () => {
  it('correctly render', () => {
    const component = render(<Card>testtest</Card>);
    expect(component.container).toMatchSnapshot();
    expect(screen.getByText('testtest')).toBeTruthy();
  });
});
