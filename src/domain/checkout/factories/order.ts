import { v4 as uuid } from "uuid";
import Order from "../entities/order";
import OrderItem from "../entities/order-item";

type OrderProps = {
  id?: string;
  customerId: string;
  items: {
    id: string;
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[];
};

export default class OrderFactory {
  static create(props: OrderProps): Order {
    const id = props.id || uuid();

    const items = props.items.map(
      ({ id, name, price, productId, quantity }) =>
        new OrderItem(id, name, price, productId, quantity)
    );

    return new Order(id, props.customerId, items);
  }
}
