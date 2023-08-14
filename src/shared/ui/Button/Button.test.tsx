import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('TEST FOR BUTTON', () => {
  test('First test', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test("Have class", () => {
    render(<Button theme='clear'>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass('clear');
  });
});
