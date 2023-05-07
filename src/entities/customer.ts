import Address from "./address";

export default class Customer {
  private _id: string;
  private name: string;
  private address?: Address;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string, address?: Address) {
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

    return true;
  }

  get id() {
    return this._id;
  }

  get rewardPoints() {
    return this._rewardPoints;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  setAddress(address: Address) {
    this.address = address;
  }
}
