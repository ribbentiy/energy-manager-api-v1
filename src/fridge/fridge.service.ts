import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { IFridge } from './interface/fridge.interface';
import { IUser } from '../users/interfaces/user.interface';
import { IBaseProduct } from '../product-with-desc/interfaces/base-product.interface';

@Injectable()
export class FridgeService {
  constructor(
    @InjectModel('Fridge') private readonly fridgeModel: Model<IFridge>,
  ) {
  }

  async getFridgeForUser(user: IUser): Promise<IFridge> {
    const fridge = await this.fridgeModel.findById(user.fridge);
    if (!fridge) {
      throw new NotFoundException();
    }
    return fridge;
  }

  async getContentForUser(user: IUser): Promise<[{ product: IBaseProduct, amount: number }]> {
    const fridge = await this.getFridgeForUser(user);
    return fridge.content;
  }

  async createFridge(user: IUser): Promise<IFridge> {
    const fridge = new this.fridgeModel();
    fridge.users.push(user._id);
    return fridge.save();
  }

  async updateFridgeUsers(user: IUser, id: mongoose.Types.ObjectId): Promise<IFridge> {
    const fridge = await this.fridgeModel.findById(id);
    if (!fridge.users.includes(user._id)) {
      fridge.users.push(user._id);
    }
    return fridge.save();
  }

  //TODO need to implement addProducts and takeProducts to fridge


  async deleteFridge(id: string): Promise<void> {
    const delFridge = await this.fridgeModel.findByIdAndDelete(id);
    if (!delFridge) {
      throw new NotFoundException();
    }
  }

}
