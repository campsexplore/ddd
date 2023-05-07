import Order from "./order";
import OrderItem from "./order-item";

describe("Order", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Order("", "customer-id", [])).toThrowError(
      "Id is required"
    );
  });

  it("should throw error when customer id is empty", () => {
    expect(() => new Order("123", "", [])).toThrowError(
      "Customer id is required"
    );
  });

  it("should throw error when items is empty", () => {
    expect(() => new Order("123", "customer-id", [])).toThrowError(
      "Items are required"
    );
  });

  it("should calculate total", () => {
    const items = [new OrderItem("1", "Item 1", 100, "p1", 3)];

    const order = new Order("123", "customer-id", items);

    expect(order.calculateTotal()).toBe(300);
  });

  it("should throw error when quantity is less than 0", () => {
    const items = [new OrderItem("1", "Item 1", 100, "p1", -1)];

    expect(() => new Order("123", "customer-id", items)).toThrowError(
      "Quantity must be greater than 0"
    );
  });
});
