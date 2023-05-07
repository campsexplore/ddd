import Customer from "../entities/customer";
import Order from "../entities/order";
import OrderItem from "../entities/order-item";
import OrderService from "./order.service";

describe("Order service unit service", () => {
  it("should place an order", () => {
    const customer = new Customer("1", "John Doe");
    const item = new OrderItem("1", "Product 1", 100, "1", 1);

    const order = OrderService.placeOrder(customer, [item]);

    expect(customer.rewardPoints).toEqual(5);
    expect(order.calculateTotal()).toBe(100);
  });

  it("should get total of all orders", () => {
    const item1 = new OrderItem("1", "Product 1", 100, "1", 1);
    const item2 = new OrderItem("2", "Product 2", 200, "2", 2);

    const order1 = new Order("1", "1", [item1]);
    const order2 = new Order("2", "2", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toEqual(500);
  });
});
