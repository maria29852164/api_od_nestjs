import * as dotenv from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  constructor() {
    dotenv.config();
    this.envConfig = {
      PORT: process.env.PORT,
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_DATABASE: process.env.DB_DATABASE,
      DB_DRIVER: process.env.DB_DRIVER,
    };
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
