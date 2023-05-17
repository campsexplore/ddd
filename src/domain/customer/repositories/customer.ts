import RepositoryInterface from "../../common/repository/repository";
import Customer from "../entities/customer";

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {}
