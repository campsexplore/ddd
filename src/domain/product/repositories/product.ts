import RepositoryInterface from "../../common/repository/repository";
import Product from "../entities/product";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}
