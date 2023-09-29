import { Decorator, StoryContext, StoryFn } from '@storybook/react';
import {
  BrowserRouter, MemoryRouter, Route, Routes,
} from 'react-router-dom';

export const RouterDecorator: Decorator = (Story: StoryFn, { parameters: { router } }: StoryContext) => {
  if (!router) {
    return (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    );
  }
  const { path, route } = router;
  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <Routes>
        <Route path={path} element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};
