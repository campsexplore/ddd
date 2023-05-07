import Address from "./address";
import Customer from "./customer";

describe("Customer", () => {
  const address = new Address(
    "1",
    "123 Main St",
    "Anytown",
    "Anystate",
    "12345"
  );

  it("should throw error when id is empty", () => {
    expect(() => new Customer("", "John Doe", address)).toThrowError(
      "Id is required"
    );
  });

  it("should throw error when name is empty", () => {
    expect(() => new Customer("1", "", address)).toThrowError(
      "Name is required"
    );
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "John Doe", address);
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(100);
    expect(customer.rewardPoints).toBe(100);

    customer.addRewardPoints(50);
    expect(customer.rewardPoints).toBe(150);
  });
});
