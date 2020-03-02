import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
  }

  @Get()
  getAllProducts(): Promise<IProduct[]> {
    return this.productsService.getAllProducts();
  }

  @Get('/:productId')
  getProductById(@Param('productId') productId: string): Promise<IProduct> {
    return this.productsService.getProductById(productId);
  }

  @Post()
  addProduct(@Body() createProductDto: CreateProductDto): Promise<IProduct> {
    return this.productsService.addProduct(createProductDto);
  }

  @Delete('/:productId')
  deleteProduct(@Param('productId') productId: string): Promise<void> {
    return this.productsService.deleteProduct(productId);
  }

}
