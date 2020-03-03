import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DishesModule } from './dishes/dishes.module';
import { UsersModule } from './users/users.module';
import { FridgeModule } from './fridge/fridge.module';

//import { ProductWithDescModule } from './product-with-desc/product-with-desc.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }), DishesModule, UsersModule, FridgeModule],

})
export class AppModule {
}
