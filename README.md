textArea-selector
=================

Данный виджет позволяет выделять цветом слова, выбранные с помощью пользовательской функции.

Пример использования:
var a =  new TextareaExtension(document.getElementById("areaId"), function (a) { return a.indexOf('а') >= 0; });

Описание конструктора - TextareaExtension(target /*textarea node*/,process /*функция проверки слова*/, font /*Пользовательский скрипт (по умолчанию 14px Arial*/);
