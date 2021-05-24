module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST"),
        port: env("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL", false) ? {
          require: true,
          rejectUnauthorized: false,
        } : false,
      },
      options: {},
    },
  },
});
