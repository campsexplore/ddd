import Address from "../../domain/entities/address";
import Customer from "../../domain/entities/customer";
import CustomerRepositoryInterface from "../../domain/repositories/customer";
import prisma from "../database/prisma";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    await prisma.customer.create({
      data: {
        name: entity.name,
        active: entity.active,
        city: entity.address?.city,
        number: entity.address?.number,
        street: entity.address?.street,
        zipcode: entity.address?.zip,
        id: entity.id,
        rewardPoints: entity.rewardPoints,
      },
    });
  }
  async update(entity: Customer): Promise<void> {
    await prisma.customer.update({
      where: {
        id: entity.id,
      },
      data: {
        name: entity.name,
        active: entity.active,
        city: entity.address?.city,
        number: entity.address?.number,
        street: entity.address?.street,
        zipcode: entity.address?.zip,
        rewardPoints: entity.rewardPoints,
      },
    });
  }
  async find(id: string): Promise<Customer> {
    const foundCustomer = await prisma.customer.findUnique({
      where: {
        id,
      },
    });

    if (!foundCustomer) {
      throw new Error("Customer not found");
    }

    const customer = new Customer(foundCustomer.id, foundCustomer.name);
    const address = new Address(
      foundCustomer.street || "",
      foundCustomer.city || "",
      foundCustomer.zipcode || "",
      foundCustomer.number || 0
    );

    customer.setAddress(address);

    return customer;
  }
  async findAll(): Promise<Customer[]> {
    const customers = await prisma.customer.findMany();

    return customers.map((customer) => {
      const newCustomer = new Customer(customer.id, customer.name);
      const address = new Address(
        customer.street || "",
        customer.city || "",
        customer.zipcode || "",
        customer.number || 0
      );

      newCustomer.setAddress(address);

      return newCustomer;
    });
  }
}
