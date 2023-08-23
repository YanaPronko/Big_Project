import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Render Counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    expect(screen.getByRole('heading')).toHaveTextContent(/value:10/);
  });
  test('Test increment button', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    const incrBtn = screen.getByTestId('increment');
    await userEvent.click(incrBtn);
    expect(screen.getByRole('heading')).toHaveTextContent(/value:11/);
  });

  test('Test decrement button', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    const decrBtn = screen.getByTestId('decrement');
    await userEvent.click(decrBtn);
    expect(screen.getByRole('heading')).toHaveTextContent(/value:9/);
  });
});
