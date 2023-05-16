import EventHandlerInterface from "../../@shared/event-handler";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreated
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    console.log("sending email to ...");
  }
}
