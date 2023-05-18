import Address from "../value-objects/address";
import CustomerFactory from "./customer";

describe("Customer Factory", () => {
  it("should create a customer", () => {
    const customer = CustomerFactory.create("Customer A");
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Customer A");
    expect(customer.address).toBeUndefined();
    expect(customer.constructor.name).toBe("Customer");
  });

  it("should create a customer with address", () => {
    const address = new Address("Street A", "City A", "10000123", 100);
    const customer = CustomerFactory.createWithAddress("Customer A", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Customer A");
    expect(customer.address).toBeDefined();
    expect(customer.address?.street).toBe("Street A");
    expect(customer.address?.city).toBe("City A");
    expect(customer.address?.zip).toBe("10000123");
    expect(customer.address?.number).toBe(100);
    expect(customer.constructor.name).toBe("Customer");
  });
});
