import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { FridgeService } from '../fridge/fridge.service';
import { IFridge } from '../fridge/interface/fridge.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
    @Inject(forwardRef(() => FridgeService)) private fridgeService: FridgeService,
  ) {
  }

  async createUser(): Promise<IUser> {
    const newUser = new this.userModel();
    const fridge: IFridge = await this.fridgeService.createFridge(newUser);
    newUser.fridge = fridge._id;
    await newUser.save();
    return newUser;
  }

  async getUserById(id: mongoose.Types.ObjectId): Promise<IUser> {
    return this.userModel.findById(id);
  }

}
