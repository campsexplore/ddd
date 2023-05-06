import Address from "./entities/address";
import Customer from "./entities/customer";
import Order from "./entities/order";
import OrderItem from "./entities/order-item";

let address = new Address("1", "123 Main St", "Anytown", "Anystate", "12345");
let customer = new Customer("1", "John Doe", address);

// Agregado por Objeto
const item1 = new OrderItem("1", "Item 1", 9.99);
const item2 = new OrderItem("2", "Item 2", 19.99);
const order = new Order("1", customer.id, [item1, item2]);
