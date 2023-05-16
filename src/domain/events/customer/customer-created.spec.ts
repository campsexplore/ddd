import EventDispatcher from "../@shared/event-dispatcher";
import CustomerCreatedEvent from "./customer-created.event";
import CustomerHasBeenCreatedTwo from "./handlers/customer-has-been-created-two.handler";
import CustomerHasBeenCreated from "./handlers/customer-has-been-created.handler";

describe("Customer created dispatcher", () => {
  it("should register an event handler", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerHasBeenCreated();
    dispatcher.register("CustomerCreated", handler);
    expect(dispatcher.getHandlers.get("CustomerCreated")).toEqual([handler]);
  });
  it("should unregister an event handler", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerHasBeenCreated();
    dispatcher.register("CustomerCreated", handler);
    expect(dispatcher.getHandlers.get("CustomerCreated")).toEqual([handler]);
    dispatcher.unregister("CustomerCreated", handler);
    expect(dispatcher.getHandlers.get("CustomerCreated")).toEqual([]);
  });
  it("should unregister all event handlers", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerHasBeenCreated();
    dispatcher.register("CustomerCreated", handler);
    expect(dispatcher.getHandlers.get("CustomerCreated")).toEqual([handler]);
    dispatcher.unregisterAll();
    expect(dispatcher.getHandlers.get("CustomerCreated")).toEqual(undefined);
  });
  it("should notify all event handlers", () => {
    const dispatcher = new EventDispatcher();
    const handler = new CustomerHasBeenCreated();
    const handlerTwo = new CustomerHasBeenCreatedTwo();
    dispatcher.register("CustomerCreatedEvent", handler);
    dispatcher.register("CustomerCreatedEvent", handlerTwo);
    const customerCreatedEvent = new CustomerCreatedEvent({
      id: 1,
      name: "Cliente",
      address: "Rua José de Alencar, 123",
    });
    const spy = jest.spyOn(handler, "handle");
    const spyTwo = jest.spyOn(handlerTwo, "handle");
    dispatcher.notify(customerCreatedEvent);
    expect(spy).toBeCalledTimes(1);
    expect(spyTwo).toBeCalledTimes(1);
  });
});
