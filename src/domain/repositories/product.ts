import Product from "../entities/product";
import RepositoryInterface from "./repository";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}
