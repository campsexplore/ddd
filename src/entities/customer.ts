import Address from "./address";

export default class Customer {
  private _id: string;
  private name: string;
  private address: Address;

  constructor(id: string, name: string, address: Address) {
    this._id = id;
    this.name = name;
    this.address = address;

    this.validate();
  }

  validate() {
    if (!this._id) {
      throw new Error("Id is required");
    }

    if (!this.name) {
      throw new Error("Name is required");
    }

    if (!this.address) {
      throw new Error("Address is required");
    }

    return true;
  }

  get id() {
    return this._id;
  }

  setAddress(address: Address) {
    this.address = address;
  }
}
