import { v4 as uuid } from "uuid";
import Customer from "../../customer/entities/customer";
import Order from "../entities/order";
import OrderItem from "../entities/order-item";

export default class OrderService {
  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (!customer) {
      throw new Error("Customer is required");
    }

    if (!items || items.length === 0) {
      throw new Error("Items are required");
    }

    const id = uuid();
    const order = new Order(id, customer.id, items);

    const rewardPoints = Number((order.calculateTotal() * 0.05).toFixed(0));
    customer.addRewardPoints(rewardPoints);

    return order;
  }

  static total(orders: Order[]) {
    return orders.reduce((total, order) => total + order.calculateTotal(), 0);
  }
}
