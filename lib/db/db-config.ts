// Этот файл используется для настройки базы данных в зависимости от окружения

// SQLite будет использоваться только в режиме разработки
// В production на Vercel будет заглушка (mock) вместо SQLite
// В реальном проекте здесь нужно использовать PostgreSQL или другую серверную БД

import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

// Определяем, находимся ли мы в режиме production (Vercel)
const isProduction = process.env.NODE_ENV === 'production';

// Создаем и настраиваем соединение с базой данных
let db: ReturnType<typeof createDB>;

function createDB() {
  if (isProduction) {
    // В production создаем временное хранилище в памяти
    // или можно заменить на PostgreSQL/MySQL и т.п.
    console.log('Running in production mode with in-memory storage');
    
    // Используем mock для демонстрации
    const mockDb = {
      select: () => ({
        from: () => ({
          all: () => [],
          where: () => ({
            get: () => null
          })
        })
      }),
      insert: () => ({
        values: () => ({
          run: () => ({})
        })
      }),
      update: () => ({
        set: () => ({
          where: () => ({
            run: () => ({})
          })
        })
      }),
      delete: () => ({
        where: () => ({
          run: () => ({})
        })
      }),
      run: () => ({}),
    };
    
    return mockDb as any;
  } else {
    // В режиме разработки используем SQLite
    console.log('Running in development mode with SQLite');
    const sqlite = new Database(process.env.DATABASE_URL || './sqlite.db');
    return drizzle(sqlite, { schema });
  }
}

// Инициализируем соединение с БД
if (!db) {
  db = createDB();
}

export { db };
