import EventInterface from "./event";
import EventHandlerInterface from "./event-handler";

export default interface EventDispatcherInterface {
  notify(event: EventInterface): void;
  register(event: string, handler: EventHandlerInterface): void;
  unregister(event: string, handler: EventHandlerInterface): void;
  unregisterAll(): void;
}
