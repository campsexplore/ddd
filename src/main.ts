import Address from "./domain/entities/address";
import Customer from "./domain/entities/customer";
import Order from "./domain/entities/order";
import OrderItem from "./domain/entities/order-item";

let address = new Address("1", "123 Main St", "Anytown", 0);
let customer = new Customer("1", "John Doe", address);

// Agregado por Objeto
const item1 = new OrderItem("1", "Item 1", 9.99, "1", 1);
const item2 = new OrderItem("2", "Item 2", 19.99, "2", 1);
const order = new Order("1", customer.id, [item1, item2]);
