import { DATABASE_CONNECTION } from '@config/constants';
import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: User.name,
      useFactory: (connection: Connection) =>
        connection.model(User.name, UserSchema),
      inject: [DATABASE_CONNECTION],
    },
    UsersService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
