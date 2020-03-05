import { Controller, Delete, Get, Param } from '@nestjs/common';
import { FridgeService } from './fridge.service';
import { IFridge } from './interface/fridge.interface';

@Controller('fridge')
export class FridgeController {
  constructor(private fridgeService: FridgeService) {
  }

  //TODO need to validate Id to be ObjectId

  @Get('id')
  getFridgeById(@Param('id') id: string): Promise<IFridge> {
    return this.fridgeService.gelFridgeById(id);
  }

  @Delete('id')
  deleteFridge(@Param('id') id: string): Promise<void> {
    return this.fridgeService.deleteFridge(id);
  }
}
