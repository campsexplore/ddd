import Address from "../value-objects/address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address?: Address;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string, address?: Address) {
    this._id = id;
    this._name = name;
    this._address = address;

    this.validate();
  }

  validate() {
    if (!this._id) {
      throw new Error("Id is required");
    }

    if (!this._name) {
      throw new Error("Name is required");
    }

    return true;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get address() {
    return this._address;
  }

  get active() {
    return this._active;
  }

  get rewardPoints() {
    return this._rewardPoints;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  setAddress(address: Address) {
    this._address = address;
  }
}
