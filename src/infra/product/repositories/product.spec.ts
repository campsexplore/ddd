import Product from "../../../domain/product/entities/product";
import { prismaMock } from "../../database/prisma/prisma.mock";
import ProductRepository from "./product";

describe("Product Repository", () => {
  const mockResult = {
    id: "1",
    name: "Product 1",
    price: 10,
    order_id: "1",
  };

  it("should create a product", async () => {
    prismaMock.product.findFirst.mockResolvedValueOnce(mockResult);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);

    await productRepository.create(product);

    const expected = await prismaMock.product.findFirst({
      where: {
        id: "1",
      },
    });

    expect(expected).toEqual(mockResult);
  });

  it("should update a product", async () => {
    prismaMock.product.findFirst
      .mockResolvedValue(null)
      .mockResolvedValueOnce(mockResult)
      .mockResolvedValueOnce({
        id: "1",
        name: "Product 2",
        price: 20,
        order_id: "1",
      });

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);

    await productRepository.create(product);

    const expected = await prismaMock.product.findFirst({
      where: {
        id: "1",
      },
    });

    expect(expected).toEqual(mockResult);

    product.changeName("Product 2");
    product.changePrice(20);

    await productRepository.update(product);

    const expectedUpdated = await prismaMock.product.findFirst({
      where: {
        id: "1",
      },
    });

    expect(expectedUpdated).toEqual({
      id: "1",
      name: "Product 2",
      price: 20,
      order_id: "1",
    });
  });

  it("should find a product", async () => {
    prismaMock.product.findFirst.mockResolvedValueOnce(mockResult);
    const product = new Product("1", "Product 1", 10);

    const productRepository = new ProductRepository();

    const expected = await productRepository.find("1");

    expect(expected).toEqual(product);
  });

  it("should find all products", async () => {
    const mockResult = [
      {
        id: "1",
        name: "Product 1",
        price: 10,
        order_id: "1",
      },
      {
        id: "2",
        name: "Product 2",
        price: 20,
        order_id: "1",
      },
    ];
    prismaMock.product.findMany.mockResolvedValueOnce(mockResult);
    const product1 = new Product("1", "Product 1", 10);
    const product2 = new Product("2", "Product 2", 20);

    const productRepository = new ProductRepository();

    const expected = await productRepository.findAll();

    expect(expected).toEqual([product1, product2]);
  });
});
