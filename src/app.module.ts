import { appConfig } from '@config/app.config';
import { jwtConfig } from '@config/jwt.config';
import { LoggerMiddleware } from '@middlewares/logger/logger.middleware';
import { AuthModule } from '@modules/auth/auth.module';
import { DatabaseModule } from '@modules/database/database.module';
import { ProductsModule } from '@modules/products/products.module';
import { UsersModule } from '@modules/users/users.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const featureModules = [AuthModule, UsersModule, ProductsModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev',
      load: [appConfig],
      cache: true,
      expandVariables: true,
    }),
    {
      ...JwtModule.registerAsync(jwtConfig),
      global: true,
    },
    DatabaseModule,
    ...featureModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
