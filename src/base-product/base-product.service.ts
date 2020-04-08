import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBaseProduct } from './interfaces/base-product.interface';
import { SearchProductsDto } from './dto/search-products.dto';

@Injectable()
export class BaseProductService {

  constructor(
    @InjectModel('BaseProductModel') private readonly baseProductModel: Model<IBaseProduct>,
  ) {
  }

  async searchProducts(searchProductsDto: SearchProductsDto): Promise<IBaseProduct[]> {
    const { search, skip = 0, limit = 10000 } = searchProductsDto;
    return this.baseProductModel.find({ $text: { $search: search, $caseSensitive: false } }).skip(+skip).limit(+limit);
  }

  async getProductsTitles(searchProductsDto: SearchProductsDto): Promise<string[]> {
    const { substr, limit = 10000 } = searchProductsDto;
    const prods = await this.baseProductModel
      .find({ title: new RegExp(substr, 'i') })
      .select({ title: 1 }).limit(+limit);
    if (prods.length === 10000) {
      return null;
    }
    const titles: string[] = [];
    prods.forEach(el => titles.push(el.title));
    return titles;
  }

}
