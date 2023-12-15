import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { SideBar } from './SideBar';

describe('SideBar', () => {
  test('Render SideBar', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Have a collapsed class', () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collappsed');
  });
});
