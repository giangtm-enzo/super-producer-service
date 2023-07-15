import { Global, Module } from '@nestjs/common';
import { mongoProviders } from './database.providers';

@Global()
@Module({
  providers: [...mongoProviders],
  exports: [...mongoProviders],
})
export class DatabaseModule {}
