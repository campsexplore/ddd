import EventHandlerInterface from "../../@shared/event-handler";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class CustomerAddressHasBeenChanged
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle(event: CustomerAddressChangedEvent): void {
    const { id, name, address } = event.eventData;

    console.log(
      `Endereço do cliente: ${id}, ${name} alterado para: ${address}`
    );
  }
}
