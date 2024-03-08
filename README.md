[Документация](#big_project-ru)
[Docs](#big_project)

# Big_Project

A project is a blog that have several pages.

The project _lazy loads_ not only pages, but also some _reducers and libraries_.
The code is optimized, _code splitting_ is used.

On the _Articles_ page you can search and sort articles. Implemented functionality for loading articles when scrolling the page.
On the User _Profile_ page, you can rate your profile and edit it.
On the page of an individual _Article_ you can leave a comment and rate the article.
On the _Settings_ page you can switch the new design to the old design and back.
The project implements _routing_, _fake authorization_ with different _user roles_ and corresponding access to pages.
The project uses three color*themes* and two _languages_ ​​(English and Russian)
In addition, the project was uploaded to a remote server using _nginx_ technology
The project is covered with _tests_, including integration ones
Most of the components have _stories_ written on them that support both the old design and the new design.
The project uses its own _custom eslint plugin_ - which checks the correct use of the FSD architecture
The entire project is created using _FSD architecture_

###Technology stack

- Typescript
- React
- Redux Toolkit
- RTK Query
- Jest
- React Testing Library
- Cypress
- Storybook
- Chromatic
- ESLint
- StyleLint
- Prettier
- Webpack
- Vite
- Babel
- Nginx

---

## Launch of the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend project in dev mode
```

---

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
- `npm run remove:feature` - Removes feature using feature flag name, and state on/off (read more about feature flags [here](/docs/features.md))
- `npm run postinstall` - Apply patches after npm i

---

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, it is recommended to install the plugin for webstorm/vscode

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project uses 4 types of tests:

1. Regular unit tests for jest - `npm run test:unit`
2. Tests for components with React testing library -`npm run test:unit`
3. Screenshot testing with chromatic (integration with storybook) `npm run test:ui`
4. e2e testing with Cypress `npm run test:e2e`

More information about tests - [testing documentation](/docs/tests.md)

---

## Linting

The project uses eslint to check typescript code and stylelint to check style files.
Configuration files are located in the project root

Also for strict control of the main architectural principles
uses its own eslint plugin _eslint-plugin-path-checker-pryweb_,
which contains 3 rules

1. relative-path-checker - prohibits the use of absolute imports within one module
2. layers-import - checks the correct use of layers from the point of view of FSD
   (for example widgets cannot be used in features and entitites)
3. public-api-imports - allows imports from other modules only from public api. Has auto fix

##### Launching linters

- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter

---

## Storybook

The project describes story cases for each component.
Requests to the server are mocked by specifying mock data in the parameters.

A file with story cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:

- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import { Meta, StoryObj } from "@storybook/react";

import { Article } from "@/entities/Article";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: "features/ArticleRecommendationsList",
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
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
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
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
        ],
      },
    ],
  },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
```

---

## Project configuration

For development, the project contains 2 configs:

1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config and in src folder

- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing, etc.

---

## CI pipeline, pre commit hooks and lint-staged

The github actions configuration is located in /.github/workflows.
All types of tests, project and storybook assembly, and linting are run in ci.

In precommit hooks we check the project with linters and unit tests using [lint-staged](https://github.com/lint-staged/lint-staged), config in /.husky
In the prepush hook we can check the project unit tests, config in /.husky

---

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

To asynchronously connect reducers (so as not to pull them into a common bundle), a custom hook is used
[useDynamicLoad](/src/shared/lib/hooks/useDynamicLoad/useDynamicLoad.tsx)

---

### Working with feature-flags

Allow the use of feature flags only using the toggleFeatures helper

an object with options is passed into it

{
name: name of the feature flag,
on: function that will work after the feature is enabled
of: function that will work after turning off the feature
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments

1. Name of the feature flag to be removed
2. State (on/off)

---

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

- [ArticlePageGreeting](/src/features/ArticlePageGreeting)
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
- [ScrollToTopbutton](/src/features/ScrollToTopbutton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
- [UIDesignSwitcher](/src/features/UIDesignSwitcher)

## Widgets

- [ArticleAdditionalInfo](/src/widgets/ArticleAdditionalInfo)
- [ArticlesFilters](/src/widgets/ArticlesFilters)
- [NavBar](/src/widgets/NavBar)
- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)
- [ScrollToolbar](src/widgets/ScrollToolbar)
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
- [SettingsPage](/src/pages/SettingsPage)

## Shared

The common layer contains components and other code that can be used anywhere without being tied to specific business logic
Contains

-[Redesigned Components](/src/shared/ui/redesigned) -[Deprecated Components](/src/shared/ui/deprecated)

# Big_Project-(Ru)

Проект - это блог, в котором есть несколько страниц.

В проекте _лениво подгружаются_ не только страницы, но и некоторые _редьюсеры_, _библиотеки_
Код оптимизирован, иcпользуется _code splitting_
На странице _Статей_ можно искать, сортировать статьи. Реализован функционал по подгрузке статей при скролле страницы.
На странице _Профиля_ пользователя, можно оценивать профиль, редактировать его.
На странице _Отдельной статьи_ можно оставить комментарий, оценить статью.
На странице _Настроек_ можно переключать новый дизайн, на старый дизайн и обратно.

В проекте реализован _роутинг_, _фейковая авторизация_ с разными ролями пользователей и соответствующим доступом к страницам.
В проекте используется три цветовые _темы_ и два языка(_английский и русский_)
Кроме того, проект загружен на удаленный сервер с использованием _nginx_ технологии
Проект покрыт _тестами_, в том числе интеграционными
На большую часть компонентов написаны _stories_, которые поддерживают и старый дизайн и новый дизайн
В проекте использован свой _кастомный eslint plugin_ - который проверяет правильное использование FSD архитектуры
Весь проект создан с использованием _FSD архитектуры_

### Стек технологий

- Typescript
- React
- Redux Toolkit
- RTK Query
- Jest
- React Testing Library
- Cypress
- Storybook
- Chromatic
- ESLint
- StyleLint
- Prettier
- Webpack
- Vite
- Babel
- Nginx

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

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
- `npm run remove:feature` - Удаление фичи используя название фича-флага, и стейта(on/off)([здесь](/docs/features.md) можно прочитать подробнее )
- `npm run postinstall` - Применение исправлений после npm i

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуется установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с chromatic (интеграция со storybook) `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.
Файлы конфигурации находтся в корне проекта

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-path-checker-pryweb_,
который содержит 3 правила

1. relative-path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layers-import - проверяет корректность использования слоев с точки зрения FSD (например, widgets нельзя использовать в features и entities)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью указания моковых данных в параметрах.

Файл со сторикейсами создается рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { Meta, StoryObj } from "@storybook/react";

import { Article } from "@/entities/Article";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: "features/ArticleRecommendationsList",
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
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
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
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
        ],
      },
    ],
  },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config и в корне проекта(src)

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В хуках precommit мы проверяем проект с помощью линтеров и модульных тестов, используя [lint-staged](https://github.com/lint-staged/lint-staged), конфиг в /.husky
В препуш хуке проверяем проект unit тестами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется кастомный хук
[useDynamicLoad](/src/shared/lib/hooks/useDynamicLoad/useDynamicLoad.tsx)

---

### Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями

{
name: название фича-флага,
on: функция, которая отработает после Включения фичи
of: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента

1. Название удаляемого фича-флага
2. Состояние (on\off)

---

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

- [ArticlePageGreeting](/src/features/ArticlePageGreeting)
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
- [ScrollToTopbutton](/src/features/ScrollToTopbutton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
- [UIDesignSwitcher](/src/features/UIDesignSwitcher)

## Виджеты (widgets)

- [ArticleAdditionalInfo](/src/widgets/ArticleAdditionalInfo)
- [ArticlesFilters](/src/widgets/ArticlesFilters)
- [NavBar](/src/widgets/NavBar)
- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)
- [ScrollToolbar](src/widgets/ScrollToolbar)
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
- [SettingsPage](/src/pages/SettingsPage)

## Общее (shared)

Общий слой содержит компоненты и другой код, который может быть использован везде без привязки к конкретной бизнес-логике

Содержит

-[Redesigned Components](/src/shared/ui/redesigned) -[Deprecated Components](/src/shared/ui/deprecated)
