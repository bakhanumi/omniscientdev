# Omniscient Dev

Веб-сайт сообщества разработчиков Omniscient в Фергане.

## Особенности

- Next.js 14 с App Router
- TypeScript для типобезопасности
- SQLite для локальной разработки
- Аутентификация с Next Auth
- Функции администратора для управления контентом

## Локальная разработка

1. **Клонировать репозиторий**
   ```bash
   git clone https://github.com/yourusername/omniscient-dev.git
   cd omniscient-dev
   ```

2. **Установить зависимости**
   ```bash
   npm install
   ```

3. **Настроить базу данных**
   ```bash
   npm run create-tables
   ```

4. **Запустить сервер разработки**
   ```bash
   npm run dev
   ```

5. **Открыть http://localhost:3000**

## Деплой на Vercel

1. **Создать аккаунт на Vercel**
   - Посетите [Vercel](https://vercel.com) и создайте аккаунт

2. **Настроить проект**
   - Импортируйте GitHub репозиторий
   - В настройках проекта добавьте следующие переменные окружения:
     - `NEXTAUTH_URL`: URL вашего приложения (например, https://your-app.vercel.app)
     - `NEXTAUTH_SECRET`: Секретный ключ для сессий (можно сгенерировать с помощью `openssl rand -base64 32`)

3. **Выполнить деплой**
   - Нажмите "Deploy" для запуска процесса деплоя

## Административные функции

Пользователь с именем "bakhanumi" имеет административные привилегии:

- Создание/редактирование событий
- Создание/редактирование проектов
- Создание/редактирование статей

## Структура проекта

```
📁 omniscient-dev
│
├── 📁 app
│   ├── 📁 (site)
│   │   ├── contacts
│   │   ├── events
│   │   ├── projects
│   │   ├── articles
│   │   └── ...
│   ├── 📁 api
│   │   ├── events
│   │   ├── projects
│   │   ├── articles
│   │   └── ...
│   └── ...
│
├── 📁 components
│   ├── AdminCheck.tsx
│   ├── EventCard.tsx
│   ├── ProjectCard.tsx
│   ├── ArticleCard.tsx
│   └── ...
│
├── 📁 lib
│   ├── 📁 db
│   │   ├── schema.ts
│   │   ├── index.ts
│   │   └── ...
│   └── ...
│
└── ...
```

## Лицензия

MIT
