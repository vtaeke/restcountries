## Использование

- Инициализировать проект, скачать недостающие модули

```
npm i
```

## Скрипты

- Запустить в режиме разработки

```
npm run dev
```
## Задание
Создайте страницу с информацией о странах мира.

Задание выполняется на React JS. При необходимости можно использовать любые open source - библиотеки.
Результат пришлите в виде архива проекта или разместите на GitHub.
Желательно развернуть работающее приложение на GitHub Pages

Используйте api REST COUNTRIES.

В левой части страницы вывести список стран. В каждом элементе списка: 
Изображение флага (поле flags.png) 
Название страны (поле name.common)
api:
https://restcountries.com/v3.1/all?fields=name,flags,cca3

По клику на элемент списка он полностью открывает данные по выбранной стране.
api:
https://restcountries.com/v3.1/alpha/{cca3}
Ключ cca3 взять из активного пункта в списке. Например:
https://restcountries.com/v3.1/alpha/rus

Вывести следующие данные:
Название страны         name.common
Изображение флага    flags.png
Изображение герба    coatOfArms.png
Столица                          capital
Регион                            region
Территория                   area
Население                    population
Валюта                           currencies
Список соседних стран    borders

По клику на элемент списка соседних стран переходить на соответствующую страну в общем списке.
Стек: React, Redux, Typescript, сборщик проектов: мной был использован инструмент VITE.
```
