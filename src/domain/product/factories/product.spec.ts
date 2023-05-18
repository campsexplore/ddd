import ProductFactory from "./product";

describe("Product Factory", () => {
  it("should create a product A", () => {
    const product = ProductFactory.create("a", "Product A", 10.0);
    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product A");
    expect(product.price).toBe(10.0);
    expect(product.constructor.name).toBe("Product");
  });

  it("should create a product B", () => {
    const product = ProductFactory.create("b", "Product B", 20.0);
    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product B");
    expect(product.price).toBe(40.0);
    expect(product.constructor.name).toBe("ProductB");
  });
});
