import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConfigKeys } from '../config/config.keys';
export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: config.get(ConfigKeys.DB_DRIVER),
        host: config.get(ConfigKeys.DB_HOST),
        username: config.get(ConfigKeys.DB_USER_NAME),
        password: config.get(ConfigKeys.DB_PASSWORD),
        database: config.get(ConfigKeys.DB_DATABASE),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*.{.ts,.js}'],
      } as any;
    },
  }),
];
