import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles input changes', async () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Hello');

    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('Hello');
  });

  it('can be disabled', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Input helperText="Enter your username" />);
    expect(screen.getByText('Enter your username')).toBeInTheDocument();
  });

  it('renders with error', () => {
    render(<Input error="This field is required" />);
    const errorText = screen.getByText('This field is required');
    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveClass('text-error-600');
  });

  it('applies size styles', () => {
    const { rerender } = render(<Input size="sm" />);
    expect(screen.getByRole('textbox')).toHaveClass('h-8');

    rerender(<Input size="lg" />);
    expect(screen.getByRole('textbox')).toHaveClass('h-12');
  });

  it('has proper aria attributes when error is present', () => {
    render(<Input error="Invalid input" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby');
  });
});
