import { Decorator, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
