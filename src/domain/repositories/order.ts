import Order from "../entities/order";
import RepositoryInterface from "./repository";

export default interface OrderRepositoryInterface
  extends RepositoryInterface<Order> {}
