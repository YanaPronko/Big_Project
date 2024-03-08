## Working with feature-flags

The use of feature flags is only allowed through the toggleFeatures helper

it takes an object with options

```
{
   name: "feature flag name",
   on: "function that will work after turning on the feature"
   off: "function that will work after turning off the feature"
}
```
As on/off functions allowed only to use concise body arrow function (e.g. () => 1)

To automatically remove a feature, use the ``remove-feature.ts script``, which takes 2 arguments

- Name of the feature flag to be removed
- State (on/off)

Feature-flags in our app are not reactive, and will not update components during the session. To apply new feature-flags user need to reload website.

## Работа с Feature-флагами

Использование флагов функций разрешено только через помощник toggleFeatures.

он принимает объект с опциями

```
{
   name: 'имя флага функции',
   on: 'функция, которая будет работать после включения этой функции'
   off: 'функция, которая будет работать после выключения этой функции'
}
```
В качестве функций включения/выключения разрешено использовать только краткую функцию стрелки тела (например, () => 1)

Чтобы автоматически удалить функцию, используйте скрипт ``Remove-feature.ts``, который принимает 2 аргумента.

- Имя удаляемого флага функции
- Состояние (вкл/выкл)

Флаги функций в нашем приложении не являются реактивными и не обновляют компоненты во время сеанса. Чтобы применить новые флаги функций, пользователю необходимо перезагрузить сайт.