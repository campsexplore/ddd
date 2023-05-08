import Address from "../../domain/entities/address";
import Customer from "../../domain/entities/customer";
import { prismaMock } from "../../infra/database/prisma/prisma.mock";
import {
  default as CustomerRepository,
  default as ProductRepository,
} from "./customer";

describe("Customer Repository", () => {
  const mockResult = {
    id: "1",
    name: "Customer 1",
    active: true,
    city: "City 1",
    number: 1,
    street: "Street 1",
    zipcode: "Zipcode 1",
    rewardPoints: 0,
  };
  const address = new Address("Street 1", "City 1", "Zipcode 1", 1);

  it("should create a customer", async () => {
    prismaMock.customer.findFirst.mockResolvedValueOnce(mockResult);

    const customerRepository = new ProductRepository();
    const customer = new Customer("1", "Customer 1", address);

    await customerRepository.create(customer);

    const expected = await prismaMock.customer.findFirst({
      where: {
        id: "1",
      },
    });

    expect(expected).toEqual(mockResult);
  });

  it("should update a customer", async () => {
    prismaMock.customer.findFirst
      .mockResolvedValue(null)
      .mockResolvedValueOnce(mockResult)
      .mockResolvedValueOnce({
        id: "1",
        name: "Customer 2",
        active: true,
        city: "City 2",
        number: 2,
        street: "Street 2",
        zipcode: "Zipcode 2",
        rewardPoints: 10,
      });

    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "Customer 1", address);

    await customerRepository.create(customer);

    const expected = await prismaMock.customer.findFirst({
      where: {
        id: "1",
      },
    });

    expect(expected).toEqual(mockResult);

    const newAddress = new Address("Street 2", "City 2", "Zipcode 2", 2);
    customer.setAddress(newAddress);
    customer.addRewardPoints(10);

    await customerRepository.update(customer);

    const expectedUpdated = await prismaMock.customer.findFirst({
      where: {
        id: "1",
      },
    });

    expect(expectedUpdated).toEqual({
      id: "1",
      name: "Customer 2",
      active: true,
      city: "City 2",
      number: 2,
      street: "Street 2",
      zipcode: "Zipcode 2",
      rewardPoints: 10,
    });
  });

  it("should find a customer", async () => {
    prismaMock.customer.findUnique.mockResolvedValueOnce(mockResult);
    const customer = new Customer("1", "Customer 1", address);

    const customerRepository = new ProductRepository();

    const expected = await customerRepository.find("1");

    expect(expected).toEqual(customer);
  });

  it("should find all products", async () => {
    const mockResult = [
      {
        id: "1",
        name: "Customer 1",
        active: true,
        city: "City 1",
        number: 1,
        street: "Street 1",
        zipcode: "Zipcode 1",
        rewardPoints: 0,
      },
      {
        id: "2",
        name: "Customer 2",
        active: true,
        city: "City 1",
        number: 1,
        street: "Street 1",
        zipcode: "Zipcode 1",
        rewardPoints: 0,
      },
    ];
    prismaMock.customer.findMany.mockResolvedValueOnce(mockResult);
    const customer1 = new Customer("1", "Customer 1", address);
    const customer2 = new Customer("2", "Customer 2", address);

    const customerRepository = new ProductRepository();

    const expected = await customerRepository.findAll();

    expect(expected).toEqual([customer1, customer2]);
  });
});
