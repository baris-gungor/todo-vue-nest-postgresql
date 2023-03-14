import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'barisgungor',
  database: 'shoptest',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
