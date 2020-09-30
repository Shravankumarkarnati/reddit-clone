declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    CORS_ORIGIN: string;
    SESSION_SECRET: string;
    COOKIE_DOMAIN: string;
  }
}
