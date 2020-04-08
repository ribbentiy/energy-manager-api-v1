import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BaseProductService } from './base-product.service';
import { SearchProductsDto } from './dto/search-products.dto';

@Controller('products')
export class BaseProductController {
  constructor(private baseProductService: BaseProductService) {
  }

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  searchProduct(@Query() searchProductsDto: SearchProductsDto): Promise<any> {
    if (searchProductsDto.substr) {
      return this.baseProductService.getProductsTitles(searchProductsDto);
    }
    if (searchProductsDto.search) {
      return this.baseProductService.searchProducts(searchProductsDto);
    }
  }

}
