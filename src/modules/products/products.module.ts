import { DATABASE_CONNECTION } from '@config/constants';
import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  controllers: [ProductsController],
  providers: [
    {
      provide: Product.name,
      useFactory: (connection: Connection) =>
        connection.model(Product.name, ProductSchema),
      inject: [DATABASE_CONNECTION],
    },
    ProductsService,
  ],
})
export class ProductsModule {}
