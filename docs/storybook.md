# Storybook (En)

Storybook is a tool that allows you to develop and test UI components in isolation. In this project, we use Storybook to describe the different use cases for each component in the file next to it.

## Starting Storybook

To start Storybook, run the following command in your terminal:

- `npm run storybook`

## Writing stories

Stories are written in a file with the `.stories.tsx` extension, located next to the component file.

You can learn more about writing stories in the [official Storybook documentation](https://storybook.js.org/docs/7.1/react/writing-stories/introduction)

Here is an example of a story file for the `NotificationButton` component in our app:

```tsx
import { Meta, StoryObj } from '@storybook/react';

import { mockNotifications } from '@/entities/Notification/testing';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

```

For shared components, we write stories for every possible scenario and theme. Here is an example of a story file for the `Button` component:

```tsx
import { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { BtnSize, Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: 'clear_inverted',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};

export const OutlineRed: Story = {
  args: {
    children: 'Text',
    theme: 'outline_red',
  },
};
export const OutlineRedDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline_red',
  },
};
OutlineRedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeM: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.M,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.XL,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background_inverted',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    disabled: true,
  },
};

DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
  },
};

export const SquarL: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
    size: BtnSize.L,
  },
};

export const SquarXL: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
    size: BtnSize.XL,
  },
};

export const FullWidth: Story = {
  args: {
    children: '<',
    fullWidth: true,
  },
};

```

## Story arguments

### Title

Title describes story name and folder when you run storybook.

Example:

```tsx
export default {
  title: 'entities/Article/ArticleList',
  // ...
} as Meta<typeof ArticlesPage>
```

Title should include layer (shared/entities/features/widgets/pages), slice and name of the component.

### Component

Pass there component for stories to render.

### Parameters

Parameters are a set of static, named metadata about a story, typically used to control the behavior of Storybook features and addons.

You can read more about them [here](https://storybook.js.org/docs/7.1/react/writing-stories/parameters)

### Decorators

A decorator is a way to wrap a story in extra “rendering” functionality.

You can read more about them [here](https://storybook.js.org/docs/7.1/react/writing-stories/decorators)

All decorators are placed in [src/shared/lib/storybook](../src/shared/lib/storybook). You can read more about each of them there.

> **_NOTE:_** In Storybook, the order in which decorators are applied matters. Decorators are applied in reverse order, from the last decorator to the first decorator. This means that the last decorator in the list will be applied first, and the first decorator in the list will be applied last. It’s important to keep this in mind when defining decorators, as the order can affect how your stories are rendered.

# Storybook (Ru)

Storybook — это инструмент, который позволяет разрабатывать и тестировать компоненты пользовательского интерфейса изолированно. В этом проекте мы используем Storybook для описания различных вариантов использования каждого компонента в файле рядом с ним.

## Запуск Storybook

Чтобы запустить Storybook, выполните в терминале следующую команду:

- `npm run storybook`

## Написание stories

Stories записываются в файл с расширением `.stories.tsx`, расположенный рядом с файлом компонента.

Вы можете узнать больше о написании историй в [официальной  Storybook документации](https://storybook.js.org/docs/7.1/react/writing-stories/introduction)

Вот пример файла истории для компонента `NotificationButton` в нашем приложении:

```tsx
import { Meta, StoryObj } from '@storybook/react';

import { mockNotifications } from '@/entities/Notification/testing';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

```
Для shared компонентов мы пишем истории для каждого возможного сценария и темы. Вот пример файла истории для компонента `Button`:

```tsx
import { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { BtnSize, Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: 'clear_inverted',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};

export const OutlineRed: Story = {
  args: {
    children: 'Text',
    theme: 'outline_red',
  },
};
export const OutlineRedDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline_red',
  },
};
OutlineRedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeM: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.M,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.XL,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background_inverted',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    disabled: true,
  },
};

DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
  },
};

export const SquarL: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
    size: BtnSize.L,
  },
};

export const SquarXL: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
    size: BtnSize.XL,
  },
};

export const FullWidth: Story = {
  args: {
    children: '<',
    fullWidth: true,
  },
};

```

## Story  аргументы

### Title

Title описывает имя и папку истории при запуске storybook.

Пример:

```tsx
export default {
  title: 'entities/Article/ArticleList',
  // ...
} as Meta<typeof ArticlesPage>
```

Title должен включать слой (shared/entities/features/widgets/pages),  фрагмент и имя компонента.

### Component

Название компонента, который рендерим

### Parameters

Параметры — это набор статических именованных метаданных об истории, обычно используемых для управления поведением функций и дополнений Storybook.

Можете  прочитать об этом больше [здесь](https://storybook.js.org/docs/7.1/react/writing-stories/parameters)

### Decorators

Декоратор — это способ обернуть историю дополнительными функциями «рендеринга».

Можете  прочитать об этом больше [здесь](https://storybook.js.org/docs/7.1/react/writing-stories/decorators)

Все декораторы размещены в [src/shared/config/storybook](../src/shared/config/storybook). Вы можете прочитать о каждом из них там.

> **_ПРИМЕЧАНИЕ:_** В Storybook порядок применения декораторов имеет значение. Декораторы применяются в обратном порядке, от последнего декоратора к первому. Это означает, что последний декоратор в списке будет применен первым, а первый декоратор в списке будет применен последним. Важно помнить об этом при определении декораторов, поскольку порядок может повлиять на отображение ваших историй.