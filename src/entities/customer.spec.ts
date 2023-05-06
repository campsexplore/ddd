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
});
