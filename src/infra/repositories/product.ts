import Product from "../../domain/entities/product";
import ProductRepositoryInterface from "../../domain/repositories/product";
import prisma from "../database/prisma";

export default class ProductRepository implements ProductRepositoryInterface {
  async create(entity: Product): Promise<void> {
    await prisma.product.create({
      data: {
        id: entity.id,
        name: entity.name,
        price: entity.price,
      },
    });
  }
  async update(entity: Product): Promise<void> {
    await prisma.product.update({
      where: {
        id: entity.id,
      },
      data: {
        name: entity.name,
        price: entity.price,
      },
    });
  }
  async find(id: string): Promise<Product> {
    const result = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (!result) {
      throw new Error("Product not found");
    }

    return new Product(result.id, result.name, result.price);
  }
  async findAll(): Promise<Product[]> {
    const result = await prisma.product.findMany();

    return result.map((product) => {
      return new Product(product.id, product.name, product.price);
    });
  }
}
