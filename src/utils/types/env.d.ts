declare namespace NodeJS {
  export interface ProcessEnv {
    POSTGRES_DB_URL: string;
    REDIS_DB_URL: string;
    PORT: string;
    CORS_ORIGIN: string;
    SESSION_SECRET: string;
  }
}
