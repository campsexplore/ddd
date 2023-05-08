import Customer from "../entities/customer";
import RepositoryInterface from "./repository";

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {}
