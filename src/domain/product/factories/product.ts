import { v4 as uuid } from "uuid";
import Product from "../entities/product";
import ProductB from "../entities/product-b";
import ProductInterface from "../entities/product.interface";

export default class ProductFactory {
  static create(type: string, name: string, price: number): ProductInterface {
    const id = uuid();

    if (type === "b") {
      return new ProductB(id, name, price);
    }

    return new Product(id, name, price);
  }
}
