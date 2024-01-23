import { Meta, StoryObj } from "@storybook/react";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleInfiniteList } from "./ArticleInfiniteList";

// const entities = entitiesMock;
const ids = ["1", "2"];
const meta: Meta<typeof ArticleInfiniteList> = {
  title: "pages/ArticleListPages/ArticleInfiniteList",
  component: ArticleInfiniteList,
  decorators: [
    StoreDecorator({
      articlesPage: {
        entities: {
          1: {
            id: "1",
            title: "Javascript news",
            subtitle: "Что нового в JS за 2022 год?",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
            views: 1022,
            createdAt: "26.02.2022",
            user: {
              id: "1",
              username: "Stas",
              avatar: "https://avatars.githubusercontent.com/u/116818633",
            },
            type: ["IT"],
            blocks: [
              {
                id: "1",
                type: "TEXT",
                title: "Заголовок этого блока",
                paragraphs: [
                  "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                  "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                  "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
                ],
              },
              {
                id: "4",
                type: "CODE",
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
              },
            ],
          },
          2: {
            id: "1",
            title: "Javascript news",
            subtitle: "Что нового в JS за 2022 год?",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
            views: 1022,
            createdAt: "26.02.2022",
            user: {
              id: "1",
              username: "Stas",
              avatar: "https://avatars.githubusercontent.com/u/116818633",
            },
            type: ["IT"],
            blocks: [
              {
                id: "1",
                type: "TEXT",
                title: "Заголовок этого блока",
                paragraphs: [
                  "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                  "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                  "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
                ],
              },
              {
                id: "4",
                type: "CODE",
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
              },
            ],
          },
        },
        ids,
      },
      articlesFilters: {},
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Primary: Story = {
  args: { isLoading: false, view: "grid" },
};

export const PrimaryDark: Story = {
  args: {
    isLoading: false,
    view: "grid",
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
