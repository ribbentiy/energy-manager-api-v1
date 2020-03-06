import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
    try {
      if (user.fridge == id) {
        return this.fridgeModel.findById(user.fridge);
      }
      const [oldFridge, fridge] = await Promise.all([
        this.fridgeModel.findById(user.fridge),
        this.fridgeModel.findById(id),
      ]);
      //TODO need to test out if no conflict in parallel request to db

      // const oldFridge = await this.fridgeModel.findById(user.fridge);
      // const fridge = await this.fridgeModel.findById(id);

      fridge.users.push(user._id);
      oldFridge.users = oldFridge.users.filter((el) => el !== user._id);
      if (oldFridge.users.length === 0) {
        await this.deleteFridge(oldFridge._id);
      }
      await fridge.save();


      return fridge;
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }

  //TODO need to implement addProducts and takeProducts to fridge


  async deleteFridge(id: string): Promise<void> {
    const delFridge = await this.fridgeModel.findByIdAndDelete(id);
    if (!delFridge) {
      throw new NotFoundException();
    }
  }

}
