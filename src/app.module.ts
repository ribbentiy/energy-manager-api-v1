import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { FridgeModule } from './fridge/fridge.module';
import { BaseProductModule } from './base-product/base-product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    UserModule,
    FridgeModule,
    BaseProductModule,
    AuthModule,
  ],

})
export class AppModule {
}
