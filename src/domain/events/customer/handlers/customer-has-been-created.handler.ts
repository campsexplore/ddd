import EventHandlerInterface from "../../@shared/event-handler";
import CustomerCreatedEvent from "../customer-created.event";

export default class CustomerHasBeenCreated
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
}
