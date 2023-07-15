import { isProd } from '@config/constants';
import { NestjsConfig } from '@interfaces/config.interface';
import { registerAs } from '@nestjs/config';

export const appConfig = registerAs(
  'appConfig',
  (): NestjsConfig => ({
    port: parseInt(process.env.PORT || '3000', 10) || 3000,
    isProd,
    secret: process.env.SECRET || '',
  }),
);
