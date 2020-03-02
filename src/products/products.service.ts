import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>) {
  }

  async getAllProducts(): Promise<IProduct[]> {
    return await this.productModel.find();
  }

  async getProductById(productId: string): Promise<IProduct> {
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async findProductsByTitle(searchString: string): Promise<IProduct[]> {
    return await this.productModel.find({
      $text: {
        $search: searchString,
        $language: 'russian',
      },
    }, null, { limit: 10 });
  }

  async addProduct(createProductDto: CreateProductDto): Promise<IProduct> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async deleteProduct(productId: string): Promise<void> {
    const product = await this.productModel.findByIdAndDelete(productId);
    if (!product) {
      throw new NotFoundException();
    }
  }

}
