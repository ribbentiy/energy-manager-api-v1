import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { IRecipe } from '../interfaces/recipe.interface';
import { InjectModel } from '@nestjs/mongoose';
import { IBaseProduct } from '../interfaces/base-product.interface';
import { RecipeSchema } from '../schemas/recipe.schema';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { IAuth } from '../../auth/interfaces/auth.interface';
import { UserService } from '../../user/user.service';

@Injectable()
export class RecipeService {
  private readonly recipeModel: Model<IRecipe>;

  constructor(
    @InjectModel('BaseProductModel') baseProductModel: Model<IBaseProduct>,
    @Inject(forwardRef(() => UserService)) private userService: UserService,
  ) {
    this.recipeModel = baseProductModel.discriminator('Recipe', RecipeSchema);
  }

  async getAllRecipes(): Promise<IRecipe[]> {
    return this.recipeModel.find();
  }

  async getRecipeById(recipeId: string): Promise<IRecipe> {
    const recipe = await this.recipeModel.findById(recipeId);
    if (!recipe) {
      throw new NotFoundException();
    }
    return recipe;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto, auth: IAuth): Promise<IRecipe> {
    const user = await this.userService.getUserById(auth.profile);
    if (user) {
      try {
        const newRecipe = new this.recipeModel(createRecipeDto);
        newRecipe.creator = user._id;
        return await newRecipe.save();
      } catch (error) {
        throw new InternalServerErrorException();
      }
    } else {
      throw new UnauthorizedException();
    }
  }

  //TODO Need to implement Create And Update func

  async deleteRecipe(recipeId: string): Promise<void> {
    const deletedRecipe = await this.recipeModel.findByIdAndDelete(recipeId);
    if (!deletedRecipe) {
      throw new NotFoundException();
    }
  }
}
