import EventInterface from "./event";
import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler";

export default class EventDispatcher implements EventDispatcherInterface {
  private handlers: Map<string, EventHandlerInterface<EventInterface>[]> =
    new Map();

  get getHandlers(): Map<string, EventHandlerInterface<EventInterface>[]> {
    return this.handlers;
  }

  register(
    event: string,
    handler: EventHandlerInterface<EventInterface>
  ): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, []);
    }

    this.handlers.get(event)?.push(handler);
  }

  notify(event: EventInterface): void {
    const name = event.constructor.name;

    if (!this.handlers.has(name)) {
      return;
    }

    const handlers = this.handlers.get(name);
    handlers?.forEach((handler) => handler.handle(event));
  }

  unregister(
    event: string,
    handler: EventHandlerInterface<EventInterface>
  ): void {
    if (!this.handlers.has(event)) {
      return;
    }

    const handlers = this.handlers.get(event);
    handlers?.splice(handlers.indexOf(handler), 1);
  }
  unregisterAll(): void {
    this.handlers.clear();
  }
}
