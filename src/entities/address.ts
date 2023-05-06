export default class Address {
  constructor(
    public street: string,
    public city: string,
    public state: string,
    public zip: string,
    public country: string
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
    if (!this.state) {
      throw new Error("State is required");
    }
    if (!this.zip) {
      throw new Error("Zip is required");
    }
    if (!this.country) {
      throw new Error("Country is required");
    }

    return true;
  }

  toString() {
    return `${this.street}\n${this.city}, ${this.state} ${this.zip}\n${this.country}`;
  }
}
