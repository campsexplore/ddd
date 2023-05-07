import Order from "../entities/order";

export default class OrderService {
  static total(orders: Order[]) {
    return orders.reduce((total, order) => total + order.calculateTotal(), 0);
  }
}
