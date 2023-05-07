import Order from "../entities/order";
import OrderItem from "../entities/order-item";
import OrderService from "./order.service";

describe("Order service unit service", () => {
  it("should get total of all orders", () => {
    const item1 = new OrderItem("1", "Product 1", 100, "1", 1);
    const item2 = new OrderItem("2", "Product 2", 200, "2", 2);

    const order1 = new Order("1", "1", [item1]);
    const order2 = new Order("2", "2", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toEqual(500);
  });
});
