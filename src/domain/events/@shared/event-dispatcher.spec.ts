import SendEmailWhenProductIsCreated from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("EventDispatcher", () => {
  it("should register an event handler", () => {
    const dispatcher = new EventDispatcher();
    const handler = new SendEmailWhenProductIsCreated();
    dispatcher.register("ProductCreatedEvent", handler);
    expect(dispatcher.getHandlers.get("ProductCreatedEvent")).toEqual([
      handler,
    ]);
  });

  it("should unregister an event handler", () => {
    const dispatcher = new EventDispatcher();
    const handler = new SendEmailWhenProductIsCreated();
    dispatcher.register("ProductCreatedEvent", handler);
    expect(dispatcher.getHandlers.get("ProductCreatedEvent")).toEqual([
      handler,
    ]);
    dispatcher.unregister("ProductCreatedEvent", handler);
    expect(dispatcher.getHandlers.get("ProductCreatedEvent")).toEqual([]);
  });

  it("should unregister all event handlers", () => {
    const dispatcher = new EventDispatcher();
    const handler = new SendEmailWhenProductIsCreated();
    dispatcher.register("ProductCreatedEvent", handler);
    expect(dispatcher.getHandlers.get("ProductCreatedEvent")).toEqual([
      handler,
    ]);
    dispatcher.unregisterAll();
    expect(dispatcher.getHandlers.get("ProductCreatedEvent")).toEqual(
      undefined
    );
  });

  it("should notify all event handlers", () => {
    const dispatcher = new EventDispatcher();
    const handler = new SendEmailWhenProductIsCreated();
    dispatcher.register("ProductCreatedEvent", handler);
    const productCreatedEvent = new ProductCreatedEvent({
      name: "ProductCreatedEvent",
      description: "Product created",
      price: 100,
    });
    const spy = jest.spyOn(handler, "handle");
    dispatcher.notify(productCreatedEvent);
    expect(spy).toBeCalledTimes(1);
  });
});
