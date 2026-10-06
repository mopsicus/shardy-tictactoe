<a href="./README.md">![Static Badge](https://img.shields.io/badge/english-118027)</a>
<a href="./README.ru.md">![Static Badge](https://img.shields.io/badge/russian-0390fc)</a>
<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="media/logo-ttt-dark.png">
        <source media="(prefers-color-scheme: light)" srcset="media/logo-ttt.png">
        <img alt="Крестики-Нолики для Shardy" height="256" width="256" src="media/logo-ttt.png">
    </picture>
</p>
<h3 align="center">Крестики-Нолики для Shardy</h3>
<h4 align="center">Фреймворк для онлайн игр и приложений</h4>
<p align="center">
    <a href="https://github.com/mopsicus/shardy">Shardy</a> · <a href="https://github.com/mopsicus/shardy-template">Пример сервиса</a> · <a href="https://github.com/mopsicus/shardy-unity">Unity клиент</a> · <a href="https://github.com/mopsicus/shardy-tictactoe/issues">Отчёт об ошибке</a>
</p>

# 💬 Описание

Это простейший игровой сервер для игры Крестики-Нолики, сделанный на Shardy. Популярная настольная игра в многопользовательском режиме на TypeScript и Node.js.

Shardy – это фреймворк для онлайн игр и приложений на Node.js. Он предоставляет базовую функциональность для построения микросервисных решений: мобильных, социальных, веб, многопользовательских игр, приложений реального времени, чатов, middleware сервисов и т.п.
 
[Подробнее про Shardy](https://github.com/mopsicus/shardy) 💪

# ✨ Возможности

- Запуск/остановка поиска свободных игр
- Матчмейкинг
- Отправка ходов
- Отправка команды `leave` сопернику
- Обнаружение ничьи и конца игры
- Сохранение текущего счёта игры

# 🚀 Быстрый старт

Запустить и протестировать свой backend Крестиков-Ноликов очень просто:

1. Склонируйте его
    ```
    git clone git@github.com:mopsicus/shardy-tictactoe.git
    ```
2. Установите Shardy и все зависимости
    ```
    npm install
    ```
3. Измените `.env.dev`
4. Запустить дебаг режим
    ```
    npm run debug
    ```

## Вот список того, что вы не найдёте в этом репо

- Переподключение к игре
- Сохранение результатов в БД
- Различная "защита от дурака"
- `Правильная` структура файлов

> [!IMPORTANT]
> Это простейший сервер для Крестиков-Ноликов, не ожидайте что тут будет полная функциональность, это демо :)

Посмотрите [пример сервиса](https://github.com/mopsicus/shardy-template), чтобы понять начать разрабатывать свой backend и изучите [документацию](https://github.com/mopsicus/shardy) для понимания всех возможностей Shardy.

## Клиент для Крестиков-Ноликов

Вы можете подключиться и поиграть на своём сервере с помощью примера из репозитория с [Unity клиентом](https://github.com/mopsicus/shardy-unity). Unity клиент поддерживает сборки для Android, iOS, и WebGL.

# 🤝 Поддержка

Вы можете поддержать проект любым из способов ниже:

* Bitcoin (BTC): bc1qaejavqm0r2fnx3d6mhvt8r6uqzwzun5vwkryn2
* USDT (TRC20): TLDPntuWNZRZTiWmtaKvZH7cVFXuf5TQvS
* TON: UQBrv16QN-6y2Jba0IgoKJEGB4u7_0ilPw8BXDH7M9NnExhw
* Карты Visa, Mastercard через [Boosty](https://boosty.to/mopsicus/donate)
* Карты МИР через [CloudTips](https://pay.cloudtips.ru/p/9f507669)

# ✉️ Контактная информация

Перед тем как задать вопрос, лучшим решением будет посмотреть уже существующие [проблемы](https://github.com/mopsicus/shardy-tictactoe/issues), это может помочь. В любом случае, вы можете задать любой вопрос или отправить предложение по [email](mailto:mail@mopsicus.ru) или [Telegram](https://t.me/mopsicus).

# 🔑 Лицензия

Крестики-Нолики для Shardy выпущены под лицензией [MIT](./LICENSE). Используйте бесплатно и радуйтесь. 🎉
