import EventInterface from "./event";

export default interface EventHandlerInterface<
  T extends EventInterface = EventInterface
> {
  handle(event: T): void;
}
