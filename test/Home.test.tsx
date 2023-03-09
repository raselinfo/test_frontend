import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '../src/views/Home';

describe('Home.tsx', () => {
  it('hello world', () => {
    // Arrange
    render(<Home />);
    // Act
    // Assert
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Hello Soft Node Developer');
  });
});
