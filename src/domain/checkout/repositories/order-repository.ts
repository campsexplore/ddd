import RepositoryInterface from "../../common/repository/repository";
import Order from "../entities/order";

export default interface OrderRepositoryInterface
  extends RepositoryInterface<Order> {}
