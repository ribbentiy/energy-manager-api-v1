import { Controller, Get, UseGuards } from '@nestjs/common';
import { FridgeService } from './fridge.service';
import { IFridge } from './interface/fridge.interface';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../users/get-user.decorator';
import { IUser } from '../users/interfaces/user.interface';
import { IBaseProduct } from '../product-with-desc/interfaces/base-product.interface';

@Controller('fridge')
@UseGuards(AuthGuard())
export class FridgeController {
  constructor(private fridgeService: FridgeService) {
  }

  @Get()
  getFridgeById(@GetUser() user: IUser): Promise<IFridge> {
    return this.fridgeService.getFridgeForUser(user);
  }

  @Get('/content')
  getContent(@GetUser() user: IUser): Promise<[{ product: IBaseProduct, amount: number }]> {
    return this.fridgeService.getContentForUser(user);
  }


}
