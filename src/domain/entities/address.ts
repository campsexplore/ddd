export default class Address {
  constructor(
    public street: string,
    public city: string,
    public zip: string,
    public number?: number
  ) {
    this.validate();
  }

  validate() {
    if (!this.street) {
      throw new Error("Street is required");
    }
    if (!this.city) {
      throw new Error("City is required");
    }
    if (!this.zip) {
      throw new Error("Zip is required");
    }

    return true;
  }

  toString() {
    return `${this.street}\n${this.city}, ${this.zip}`;
  }
}
