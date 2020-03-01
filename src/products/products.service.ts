import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async getProductById(productId: string): Promise<Product> {
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async findProductsByTitle(searchString: string): Promise<Product[]> {
    return await this.productModel.find({ $text: { $search: searchString } }, null, { limit: 10 });
  }

  async addProduct(createProductDto: CreateProductDto): Promise<Product> {
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
