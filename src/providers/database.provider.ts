/* eslint-disable prettier/prettier */
import { Admin } from 'src/models/Admin.model';
import { OrderBook } from 'src/models/OrderBook.model';
import { User } from 'src/models/User.model';
import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: true,
        logging: false,
        entities: [User, Admin, OrderBook],
      });

      return dataSource.initialize();
    },
  },
];
