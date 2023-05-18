import { v4 as uuid } from "uuid";
import Customer from "../entities/customer";
import Address from "../value-objects/address";

export default class CustomerFactory {
  static create(name: string): Customer {
    const id = uuid();
    return new Customer(id, name);
  }

  static createWithAddress(name: string, address: Address): Customer {
    const customer = this.create(name);
    customer.setAddress(address);

    return customer;
  }
}
