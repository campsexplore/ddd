import Order from "../../domain/entities/order";
import OrderItem from "../../domain/entities/order-item";
import OrderRepositoryInterface from "../../domain/repositories/order";
import prisma from "../database/prisma";

export default class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await prisma.order.create({
      data: {
        id: entity.id,
        total: entity.total,
        customer_id: entity.customerId,
        items: {
          createMany: {
            data: entity.items.map((item) => ({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              product_id: item.productId,
            })),
          },
        },
      },
    });
  }
  async update(entity: Order): Promise<void> {
    await prisma.order.update({
      where: {
        id: entity.id,
      },
      data: {
        total: entity.total,
        customer_id: entity.customerId,
        items: {
          createMany: {
            data: entity.items.map((item) => ({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              product_id: item.productId,
            })),
          },
        },
      },
    });
  }
  async find(id: string): Promise<Order> {
    const order = await prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        items: true,
      },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    return new Order(
      order.id,
      order.customer_id,
      order.items.map(
        (item) =>
          new OrderItem(
            item.id,
            item.name,
            item.price,
            item.product_id,
            item.quantity
          )
      )
    );
  }
  async findAll(): Promise<Order[]> {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
    });

    return orders.map(
      (order) =>
        new Order(
          order.id,
          order.customer_id,
          order.items.map(
            (item) =>
              new OrderItem(
                item.id,
                item.name,
                item.price,
                item.product_id,
                item.quantity
              )
          )
        )
    );
  }
}
