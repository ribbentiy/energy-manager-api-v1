import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFridge } from './interface/fridge.interface';

@Injectable()
export class FridgeService {
  constructor(@InjectModel('Fridge') private readonly fridgeModel: Model<IFridge>) {
  }

  async gelFridgeById(id: string): Promise<IFridge> {
    const fridge = await this.fridgeModel.findById(id);
    if (!fridge) {
      throw new NotFoundException();
    }
    return fridge;
  }

  //TODO need to implement CREATE and UPDATE logic

  async deleteFridge(id: string): Promise<void> {
    const delFridge = await this.fridgeModel.findByIdAndDelete(id);
    if (!delFridge) {
      throw new NotFoundException();
    }
  }

}
