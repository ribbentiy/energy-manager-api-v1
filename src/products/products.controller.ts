import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
  }

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get('/:productId')
  getProductById(@Param('productId') productId: string): Promise<Product> {
    return this.productsService.getProductById(productId);
  }

  @Post()
  addProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.addProduct(createProductDto);
  }

  @Delete('/:productId')
  deleteProduct(@Param('productId') productId: string): Promise<void> {
    return this.productsService.deleteProduct(productId);
  }

}
