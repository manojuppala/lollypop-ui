import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card data-testid="card">Card content</Card>);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('renders with compound components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Content here</CardContent>
        <CardFooter>Footer here</CardFooter>
      </Card>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Content here')).toBeInTheDocument();
    expect(screen.getByText('Footer here')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    const { rerender } = render(<Card data-testid="card" variant="bordered" />);
    expect(screen.getByTestId('card')).toHaveClass('border');

    rerender(<Card data-testid="card" variant="elevated" />);
    expect(screen.getByTestId('card')).toHaveClass('shadow-md');
  });

  it('supports custom className', () => {
    render(
      <Card data-testid="card" className="custom-class">
        Content
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('custom-class');
  });
});
