import EventHandlerInterface from "../../../common/event/event-handler";
import CustomerCreatedEvent from "../customer-created.event";

export default class CustomerHasBeenCreatedTwo
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}
