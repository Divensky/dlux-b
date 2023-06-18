﻿**Review** с ответами

**1. Для логотипа лучше использовать svg**

**Изменила на SVG.**

Пояснение: из комментариев Александра на более раннем этапе я поняла, что раз дизайнер дал логотип в PNG, придётся использовать что есть. Экспорт из Фигмы в формате SVG давал очень большой файл. Сейчас я попробовала PNG-файл логотипа преобразовать в SVG через онлайн-конвертер. Размер в 90 раз меньше! Но рано радоваться: цвета совсем не те. Попробовала ещё несколько онлайн-конвертеров, нашла тот, который выдал верные цвета. Однако созданный им SVG-файл вёл себя как растровый при увеличении масштаба. Попробовала ещё несколько онлайн-конвертеров – безуспешно… Решила остановиться на SVG-файле, который выдала Фигма. Насколько я нашла, картинка легко преобразуется в SVG через Adobe Illustrator; у меня его нет, но на реальном проекте я бы попросила дизайнера преобразовать.

**2. скрипт `toggle_menu` нигде не используется, удалить**

**Удалила.**

(Это пережиток предыдущей версии; я его исправила согласно коррекциям Александра, а потом и вовсе заменила на Mmenu, но сразу не удалила, чтобы можно было убедиться, что исправления в этом файле сделаны как указано: там нужно было сделать функцию независимой)

**3. файл `js/mmenu.js` не нужен, что бы мменю заработал нужно импортировать mmenu в том файле в котором вызываешь его `import Mmenu from "mmenu-js";`**

**Разобралась, сделала его импорт** в том файле, в котором вызываю (`fire_mmenu.js`).

При этом ESLint ругается на `const menu = new Mmenu`: эта константа потом не используется. Однако, если константу удалить, опять же ругается на использование `new Mmenu` без записи в переменную.

В примере [https://frontend-docs.upline.studio/mmenu.html#пример-использования]() это меню используется так:

```
    menuTriggerElement.addEventListener('click', () => {
      menu.open();
    });
```

Однако у меня уже работает event listener, встроенный в Mmenu; не увидела смысла писать его повторно. Так что я **закомментила это правило о неиспользуемой переменной**: `/* eslint-disable @typescript-eslint/no-unused-vars */`

**4. стили для `mmenu` подключить из либы, файл `scss/-mmenu/mmenu.scss` не нужен**

**Подключила**. Спасибо за картинку, я бы без неё несколько часов тыкалась!

**5. в роутах не нужны точки**

**Убрала** все эти точки.

**6. меню в хедере (для десктопа и для мобилки) вынести в компонент, тогда мы избавимся от дублирования кода**

**Сделала.** Я верно поняла, что речь о компоненте в 11ty? Я вынесла в компонент всю верхнюю часть хедера (логотип + меню), которая раньше дублировалась. И заодно убрала дублирование кода в футере: из двух версий футера сделала одну.

**7. при такой записи создается директория, это имеет смысл если у нас есть вложенные маршруты, а так как здесь только одна страница то лучше сделать `permalink: pers-data.html`, тогда эта страница будет доступна по роуту `/pers-data.html`**

**Сделала.** И поставила ссылки на эти страницы.

**8. стилизовать заголовки предлагаю через селектор тега, тогда сохранится консистентность, у тебя стили для параграфа добавляются через селектор тега `<p>`, тоже самое надо сделать для заголовков. После h1 должен быть h2**

**Сделала консистентным и поменяла заголовки на h2.**

Это тоже пережитки прошлого: я сперва завершила проект, не зная о БЕМ, а потом, когда меняла на БЕМ, то этот кусок решила оставить по-старому как неважный. Но ради консистентности пусть лучше будет БЕМ везде. Так что все эти стили тега я заменила на стили классов.

**9. дублируются стили, оставь один класс другой можно удалить**

**Удалила лишний.**

(Тоже пережиток прошлого.)

**10. каждый шрифт подключается отдельно через директиву `@font-face`**

**Исправила.**

**11. не мешать стили в файлах, в каждом файле должны лежать только стили для данного класса, например здесь должны быть только стили для `contacts` и файл должен называться `contacts.scss`, стили для `reques-form` должны быть в файле `request-form.scss`**

**Исправила.**

12. стили для инпута предлагаю вынести в отдельный класс, потому что они могут использоваться не только на странице contacts, а например странице заказа или логина, регистрации

**Вынесла.**

Ценная деталь: делать стили инпута такими, чтобы их можно было использовать в разных местах. Хотя в данном случае, ради floating labels, в коде столько наверчено, что я не уверена, легко ли будет его использовать на других страницах…

**13. препроцессор позволяет тебе сокращать запись, можно сделать вот так:**

**Да, сделала.**

**14. исправить ошибки линтов: `stylelint, eslint, prettier` <https://frontend-docs.upline.studio/linters.html>**

**Исправила.** Во всяком случае `npm run test` ошибок не выдаёт. Внутри PHP Storm выводятся ошибки про нераспознанные имена файлов и папок, но когда я прогоняю проверки из терминала, этой ошибки нет (имена правильно указаны по отношению к папке public). Это нормально?

Ещё PHP Storm выдаёт мне `Unknown at-rule` в файле `_animation.scss`. И выдавал такую же ошибку, когда я попыталась использовать `@mixin`, так что я не стала его использовать. Однако терминал ошибку на `Unknown at-rule` не выдаёт. В будущем `@mixin` использовать можно?

**Спасибо большое за review!** Благодаря ему я узнала ценные данные и освоилась с линтерами! Долго было непонятно, почему линтер предлагает использовать `kebab-case` вместо БЕМ; но в итоге я увидела, что он так ругается только в тех местах, где БЕМ использован кривовато или не вложен правильно. И правило `stylelint-bem-ruleset/nested` долго выдавало мне ошибки, но в итоге я разобралась, прочитав регулярные выражения из его кода.