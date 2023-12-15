// Footer.test.js

// Button.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByText } = render(<Button handleClick={mockHandleClick}>Click me</Button>);
    
    fireEvent.click(getByText('Click me'));
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom color if provided', () => {
    const { container } = render(<Button color="red">Click me</Button>);
    const button = container.firstChild;
    
    expect(button).toHaveStyle('backgroundColor: red');
  });

  it('applies default color if not provided', () => {
    const { container } = render(<Button>Click me</Button>);
    const button = container.firstChild;
    
    expect(button).toHaveStyle('backgroundColor: blue');
  });
});
