# nasctech-blog

- Использовал не SERIAL для колонки id таблицы articles, а GENERATED ALWAYS AS IDENTITY. SERIAL устарел и его не рекомендуют использовать сами postgres: https://wiki.postgresql.org/wiki/Don't_Do_This#Don.27t_use_serial
- Написание пути роута создания статьи изменил с POST /article/id на POST /articles, так как по REST это валиднее: POST запрос создает запись в коллекции articles
