import * as config from 'config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbConfig = config.get('database');

/**
 * Initialize typeORM configurations to link all entities and establish connections
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.db_name,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: dbConfig.synchronize,
};
