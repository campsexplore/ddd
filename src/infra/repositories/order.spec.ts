import Customer from "../../domain/entities/customer";
import Order from "../../domain/entities/order";
import OrderItem from "../../domain/entities/order-item";
import Product from "../../domain/entities/product";
import { prismaMock } from "../database/prisma/prisma.mock";
import OrderRepository from "./order";

describe("Order Repository", () => {
  it("should create a new order", async () => {
    const mockedData = {
      id: "1",
      total: 10,
      customer_id: "1",
      items: [
        {
          id: "1",
          price: 10,
          quantity: 1,
          name: "Pizza",
          product_id: "1",
        },
      ],
    };
    prismaMock.order.findUnique.mockResolvedValue(mockedData);
    const orderRepository = new OrderRepository();

    const customer = new Customer("1", "John Doe");
    const product = new Product("1", "Pizza", 10);
    const orderItem = new OrderItem("1", "Pizza", 10, product.id, 1);
    const order = new Order("1", customer.id, [orderItem]);

    await orderRepository.create(order);

    const orderCreated = await orderRepository.find(order.id);

    expect(orderCreated).toEqual(order);
  });

  it("should update an order", async () => {
    const mockedData = {
      id: "1",
      total: 20,
      customer_id: "1",
      items: [
        {
          id: "1",
          price: 10,
          quantity: 1,
          name: "Pizza",
          product_id: "1",
        },
        {
          id: "2",
          price: 10,
          quantity: 1,
          name: "Pizza",
          product_id: "1",
        },
      ],
    };
    prismaMock.order.findUnique.mockResolvedValue(mockedData);
    const orderRepository = new OrderRepository();

    const customer = new Customer("1", "John Doe");
    const product = new Product("1", "Pizza", 10);
    const orderItem = new OrderItem("1", "Pizza", 10, product.id, 1);
    const order = new Order("1", customer.id, [orderItem]);

    await orderRepository.create(order);

    const orderItem2 = new OrderItem("2", "Pizza", 10, product.id, 1);
    order.changeItems([orderItem, orderItem2]);

    await orderRepository.update(order);

    const orderUpdated = await orderRepository.find(order.id);

    expect(orderUpdated).toEqual(order);
  });

  it("should get an order by id", async () => {
    const mockedData = {
      id: "1",
      total: 10,
      customer_id: "1",
      items: [
        {
          id: "1",
          price: 10,
          quantity: 1,
          name: "Pizza",
          product_id: "1",
        },
      ],
    };
    prismaMock.order.findUnique.mockResolvedValue(mockedData);
    const orderRepository = new OrderRepository();

    const orderItem = new OrderItem("1", "Pizza", 10, "1", 1);
    const newOrder = new Order("1", "1", [orderItem]);

    await orderRepository.create(newOrder);

    const order = await orderRepository.find("1");

    expect(order).toEqual(newOrder);
  });

  it("should get all orders", async () => {
    const mockedData = [
      {
        id: "1",
        total: 10,
        customer_id: "1",
        items: [
          {
            id: "1",
            price: 10,
            quantity: 1,
            name: "Pizza",
            product_id: "1",
          },
        ],
      },
      {
        id: "2",
        total: 10,
        customer_id: "1",
        items: [
          {
            id: "1",
            price: 10,
            quantity: 1,
            name: "Pizza",
            product_id: "1",
          },
        ],
      },
    ];
    prismaMock.order.findMany.mockResolvedValue(mockedData);
    const orderRepository = new OrderRepository();

    const orderItem = new OrderItem("1", "Pizza", 10, "1", 1);
    const newOrder = new Order("1", "1", [orderItem]);
    const orderItem2 = new OrderItem("1", "Pizza", 10, "1", 1);
    const newOrder2 = new Order("2", "1", [orderItem2]);

    await orderRepository.create(newOrder);
    await orderRepository.create(newOrder2);

    const orders = await orderRepository.findAll();

    expect(orders).toEqual([newOrder, newOrder2]);
  });
});
