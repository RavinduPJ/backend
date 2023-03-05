/* eslint-disable prettier/prettier */
import { Provider } from '@nestjs/common';
import { User } from 'src/models/User.model';
import { DataSource } from 'typeorm';

export const userProvider: Provider[] = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
