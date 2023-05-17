import EventDispatcher from "../../common/event/event-dispatcher";
import CustomerAddressChangedEvent from "./customer-address-changed.event";
import CustomerAddressHasBeenChanged from "./handlers/customer-address-has-been-changed.handler";

describe("Customer address changed dispatcher", () => {
  it("should register an event handler", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerAddressHasBeenChanged();
    dispatcher.register("CustomerAddressChanged", handler);
    expect(dispatcher.getHandlers.get("CustomerAddressChanged")).toEqual([
      handler,
    ]);
  });

  it("should unregister an event handler", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerAddressHasBeenChanged();
    dispatcher.register("CustomerAddressChanged", handler);
    expect(dispatcher.getHandlers.get("CustomerAddressChanged")).toEqual([
      handler,
    ]);
    dispatcher.unregister("CustomerAddressChanged", handler);
    expect(dispatcher.getHandlers.get("CustomerAddressChanged")).toEqual([]);
  });

  it("should unregister all event handlers", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerAddressHasBeenChanged();
    dispatcher.register("CustomerAddressChanged", handler);
    expect(dispatcher.getHandlers.get("CustomerAddressChanged")).toEqual([
      handler,
    ]);
    dispatcher.unregisterAll();
    expect(dispatcher.getHandlers.get("CustomerAddressChanged")).toEqual(
      undefined
    );
  });

  it("should notify all event handlers", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerAddressHasBeenChanged();
    dispatcher.register("CustomerAddressChangedEvent", handler);
    const customerAddressChangedEvent = new CustomerAddressChangedEvent({
      id: 1,
      name: "Cliente",
      address: "Rua José de Alencar, 123",
    });
    const spy = jest.spyOn(handler, "handle");
    dispatcher.notify(customerAddressChangedEvent);
    expect(spy).toBeCalledTimes(1);
  });
});
