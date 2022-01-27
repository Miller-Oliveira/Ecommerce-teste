import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { hashSync } from 'bcrypt'

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(product: Prisma.ProductCreateInput): Promise<void> {
    const productExist = await this.prismaService.product.findMany({
      where: {
        OR: [
          { name: product.name },
        ]
      }
    })

    if (productExist) throw new ConflictException("Product Already Exist");

    const password = hashSync(product.password, 10);

    await this.prismaService.product.create({ data: { ...product, password } })
  }

  async findAll(): Promise<any> {
    return await this.prismaService.product.findMany({
      select:
      {
        id: true,
        name: true,
        description: true,
        price: true,
        percentageDiscount: true,
        role: true
      }
    });
  }

  async update(product: string, updateProductDto: UpdateProductDto): Promise<void> {
    const product = await this.prismaService.product.findUnique({ where: { product: product } })

    if (!product) throw new BadRequestException("product not exist")

    await this.prismaService.product.update({ data: { ...updateProductDto }, where: { product } })
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
