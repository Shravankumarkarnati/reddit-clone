module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "95050",
  database: "reddit",
  synchronize: false,
  logging: true,
  entities: ["dist/database/entity/*.js"],
  migrations: ["dist/database/migration/*.js"],
  subscribers: ["dist/database/subscriber/*.js"],
  cli: {
    migrationsDir: "src/database/migration/",
  },
};
