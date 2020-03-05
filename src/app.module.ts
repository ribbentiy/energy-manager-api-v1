import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FridgeModule } from './fridge/fridge.module';

import { ProductWithDescModule } from './product-with-desc/product-with-desc.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    UsersModule,
    FridgeModule,
    ProductWithDescModule,
    JwtModule.register({
      secret: 'devSecret',
      signOptions: {
        expiresIn: 604800,
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],

})
export class AppModule {
}
