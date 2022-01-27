import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  //productService: any;
  constructor(private readonly productService: ProductService) { }

  @Post()
  @HttpCode(201)
  async create(@Body() createProductDto: CreateProduct
  Dto): Promise<void> {
    await this.productService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  // @Get(':name')
  // async findOne(@Param('name') name: string) {
  //   return await this.productService.findOne(name);
  // }

  @Patch(':name')
  async update(
    @Param('name') name: string,
    @Body() updateProductDto: UpdateProductDto) {
    await this.productService.update(name,updateProductDto);
  }
}
