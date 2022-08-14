interface DatabaseCredentials {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: [];
  synchronize: boolean;
}
