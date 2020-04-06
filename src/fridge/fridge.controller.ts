import { Controller, Get, UseGuards } from '@nestjs/common';
import { FridgeService } from './fridge.service';
import { IFridge } from './interface/fridge.interface';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { IBaseProduct } from '../product-with-desc/interfaces/base-product.interface';
import { IAuth } from '../auth/interfaces/auth.interface';

@Controller('fridge')
@UseGuards(AuthGuard())
export class FridgeController {
  constructor(private fridgeService: FridgeService) {
  }

  @Get()
  getFridgeById(@GetUser() user: IAuth): Promise<IFridge> {
    return this.fridgeService.getFridgeForUser(user);
  }

  @Get('/content')
  getContent(@GetUser() user: IAuth): Promise<[{ product: IBaseProduct, amount: number }]> {
    return this.fridgeService.getContentForUser(user);
  }


}
