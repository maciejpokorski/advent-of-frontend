type EventCallback = () => void;

export class ChristmasEmitter {
  private eventListeners: Record<string, EventCallback[]> = {};

  on(event: string, callback: EventCallback): void {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
  }

  off(event: string, callback: EventCallback): void {
    const listeners = this.eventListeners[event];
    if (listeners) {
      this.eventListeners[event] = listeners.filter((listener) => listener !== callback);
    }
  }

  emit(event: string): void {
    const listeners = this.eventListeners[event];
    if (listeners) {
      listeners.forEach((listener) => listener());
    }
  }
}
