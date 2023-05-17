import Order from "./domain/checkout/entities/order";
import OrderItem from "./domain/checkout/entities/order-item";
import Customer from "./domain/customer/entities/customer";
import Address from "./domain/customer/value-objects/address";

let address = new Address("1", "123 Main St", "Anytown", 0);
let customer = new Customer("1", "John Doe", address);

// Agregado por Objeto
const item1 = new OrderItem("1", "Item 1", 9.99, "1", 1);
const item2 = new OrderItem("2", "Item 2", 19.99, "2", 1);
const order = new Order("1", customer.id, [item1, item2]);
