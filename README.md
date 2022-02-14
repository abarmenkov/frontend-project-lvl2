[![Actions Status](https://github.com/abarmenkov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/abarmenkov/frontend-project-lvl2/actions) [![Node.js CI](https://github.com/abarmenkov/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/abarmenkov/frontend-project-lvl2/actions/workflows/node.js.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/16e7bf666655cc78ae59/maintainability)](https://codeclimate.com/github/abarmenkov/frontend-project-lvl2/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/16e7bf666655cc78ae59/test_coverage)](https://codeclimate.com/github/abarmenkov/frontend-project-lvl2/test_coverage)

Diff Generator (Генератор различий)

### Консольное приложение для определения разницы двух структур данных

#### Особенности приложения:

- Поддержка разных форматов: yaml/yml, json
- Представление отчета в форматах: plain text, stylish, json

### Установка и запуск

```
$ git clone git@github.com:abarmenkov/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
$ npm link
$ gendiff -h
```
[![asciicast](https://asciinema.org/a/F70DoUwItLXSpGmqwWVp5Ew9S.svg)](https://asciinema.org/a/F70DoUwItLXSpGmqwWVp5Ew9S)


### Примеры сравнения:

stylish format

$gendiff file1.json file2.json
$gendiff file1.yml file2.yml

[![asciicast](https://asciinema.org/a/DcHNk5PU3w4nh2xt8ArYcuVxW.svg)](https://asciinema.org/a/DcHNk5PU3w4nh2xt8ArYcuVxW)

plain format

$gendiff -f plain file1.json file2.json
$gendiff --format plain file1.yml file2.yml

[![asciicast](https://asciinema.org/a/TQ0sAQ4dCz5iOELCT87VSNXly.svg)](https://asciinema.org/a/TQ0sAQ4dCz5iOELCT87VSNXly)

json format

$gendiff -f json file1.json file2.json
$gendiff --format json file1.yml file2.yml

[![asciicast](https://asciinema.org/a/3fisjLN4WzecWQwc72orvGM4N.svg)](https://asciinema.org/a/3fisjLN4WzecWQwc72orvGM4N)



