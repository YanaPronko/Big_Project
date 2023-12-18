# Big_Project (En)
## Launch of the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend project in dev mode
```

----

## Scripts

- `npm run start` - Starting a frontend project on the webpack dev server
- `npm run start:dev` - Starting a frontend project on webpack dev server + backend
- `npm run start:dev:server` - Start the backend server
- `npm run start:vite` - Starting a frontend project on vite
- `npm run start:dev:vite` - Starting a frontend project on vite + backend
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minified)
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter
- `npm run test:unit` - Run unit tests with jest
- `npm run chromatic` - Run screenshot tests with chromatic
- `npm run analyze:dev` - Run the code analyzer in dev mode
- `npm run analyze:prod` - Run the code analyzer in prod mode
- `npm run storybook` - launch Storybook
- `npm run build-storybook` - Build the storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, it is recommended to install the plugin for webstorm/vscode

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests for jest - `npm run test:unit`
2) Tests for components with React testing library -`npm run test:unit`
3) Screenshot testing with chromatic (integration with storybook) `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More information about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.
Configuration files are located in the project root

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-path-checker-pryweb*,
which contains 3 rules
1) relative-path-checker - prohibits the use of absolute imports within one module
2) layers-import - checks the correct use of layers from the point of view of FSD
    (for example widgets cannot be used in features and entitites)
3) public-api-imports - allows imports from other modules only from public api. Has auto fix

##### Launching linters
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter

----
## Storybook

The project describes story cases for each component.
Requests to the server are mocked by specifying mock data in the parameters.

A file with story cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import { Meta, StoryObj } from '@storybook/react';

import { Article } from '@/entities/Article';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
   title: 'features/ArticleRecommendationsList',
   component: ArticleRecommendationsList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
   args:{},
   parameters: {
     mockData: [
       {
         url: `${__API__}/articles?_limit=3`,
         method: 'GET',
         status: 200,
         response: [
           { ...article, id: '1' },
           { ...article, id: '2' },
           { ...article, id: '3' },
         ],
         delay: 2000,
       },
     ],
   },
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
   args:{},
   parameters: {
     mockData: [
       {
         url: `${__API__}/articles?_limit=3`,
         method: 'GET',
         status: 200,
         response: [
           { ...article, id: '1' },
           { ...article, id: '2' },
           { ...article, id: '3' },
         ],
       },
     ],
   },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
```


----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing, etc.

----

## CI pipeline and pre commit hooks

The github actions configuration is located in /.github/workflows.
All types of tests, project and storybook assembly, and linting are run in ci.

In precommit hooks we check the project with linters, config in /.husky
In the prepush hook we check the project unit tests, config in /.husky

----

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

To asynchronously connect reducers (so as not to pull them into a common bundle), a custom hook is used
[useDynamicLoad](/src/shared/lib/hooks/useDynamicLoad/useDynamicLoad.tsx)

----
## Application (app)
The app layer contains code that is relevant to the entire application.

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
- [ArticleViewSelector](/src/features/ArticleViewSelector)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [CommentForm](/src/features/CommentForm/)
- [CounterBtn](/src/features/CounterBtn/)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [FiltersOfArticle](/src/features/FiltersOfArticle)
- [LanguageSwitcher](/src/features/LanguageSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [ProfileRating](/src/features/ProfileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

## Widgets

- [NavBar](/src/widgets/NavBar)
- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)
- [SideBar](/src/widgets/SideBar)

## Pages

- [AboutPage](/src/pages/AboutPage)
- [AdminPanelPage](/src/pages/AdminPanelPage)
- [ArticleDetailPage](/src/pages/ArticleDetailPage)
- [ArticleEditPage](/src/pages/ArticleEditPage)
- [ArticleListPage](/src/pages/ArticleListPage)
- [ForbiddenPage](/src/pages/ForbiddenPage)
- [MainPage](/src/pages/MainPage)
- [NotFoundPage](/src/pages/NotFoundPage)
- [ProfilePage](/src/pages/ProfilePage)

## Shared

The common layer contains components and other code that can be used anywhere without being tied to specific business logic


# Big_Project (Ru)
## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run chromatic` - Запуск скриншотных тестов с chromatic
- `npm run analyze:dev` - Запуск анализатора кода в dev режиме
- `npm run analyze:prod` - Запуск анализатора кода в prod режиме
- `npm run storybook` - запуск Storybook
- `npm run build-storybook` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуется установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с chromatic (интеграция со storybook) `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.
Файлы конфигурации находтся в корне проекта

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-path-checker-pryweb*,
который содержит 3 правила
1) relative-path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layers-import - проверяет корректность использования слоев с точки зрения FSD (например, widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью указания моковых данных в параметрах.

Файл со сторикейсами создается рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { Meta, StoryObj } from '@storybook/react';

import { Article } from '@/entities/Article';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
        delay: 2000,
      },
    ],
  },
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
```


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky
В препуш хуке проверяем проект unit тестами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется кастомный хук
[useDynamicLoad](/src/shared/lib/hooks/useDynamicLoad/useDynamicLoad.tsx)

----
## Приложение (app)
В слое app содержится код, который имеет отношение ко всему приложению в целом

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
- [ArticleViewSelector](/src/features/ArticleViewSelector)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [CommentForm](/src/features/CommentForm/)
- [CounterBtn](/src/features/CounterBtn/)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [FiltersOfArticle](/src/features/FiltersOfArticle)
- [LanguageSwitcher](/src/features/LanguageSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [ProfileRating](/src/features/ProfileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

## Виджеты (widgets)

- [NavBar](/src/widgets/NavBar)
- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)
- [SideBar](/src/widgets/SideBar)

## Страницы (pages)

- [AboutPage](/src/pages/AboutPage)
- [AdminPanelPage](/src/pages/AdminPanelPage)
- [ArticleDetailPage](/src/pages/ArticleDetailPage)
- [ArticleEditPage](/src/pages/ArticleEditPage)
- [ArticleListPage](/src/pages/ArticleListPage)
- [ForbiddenPage](/src/pages/ForbiddenPage)
- [MainPage](/src/pages/MainPage)
- [NotFoundPage](/src/pages/NotFoundPage)
- [ProfilePage](/src/pages/ProfilePage)

## Общее (shared)

Общий слой содержит компоненты и другой код, который может быть использован везде без привязки к конкретной бизнес-логике