import Product from "../entities/product";

export default class ProductService {
  static increasePrices(products: Product[], percentage: number): Product[] {
    for (const product of products) {
      const increasedPrice = (product.price * percentage) / 100 + product.price;
      product.changePrice(increasedPrice);
    }

    return products;
  }
}
