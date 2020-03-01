import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }), DishesModule],

})
export class AppModule {
}
