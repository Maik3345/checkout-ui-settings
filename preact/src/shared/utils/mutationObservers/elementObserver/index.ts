export class MutationObserverManager {
  private observer: MutationObserver | undefined;
  private target: Node;
  private config: MutationObserverInit;
  private callback: (newNode: Node, stopObserving: () => void) => void;

  constructor(
    target: Node,
    config: MutationObserverInit,
    callback: (newNode: Node, stopObserving: () => void) => void,
  ) {
    this.config = config;
    this.target = target;
    this.observer = undefined;
    this.callback = callback;
    this.mutationCallback = this.mutationCallback.bind(this);
    this.startObserving = this.startObserving.bind(this);

    this.initialize();
  }

  private initialize() {
    if (!this.target) {
      console.debug('Element not found', this.target);
      return;
    }

    this.startObserving();
  }

  private mutationCallback(records: MutationRecord[]) {
    for (const mutation of records) {
      if (this.shouldProcessMutation(mutation)) {
        const newNode = mutation.addedNodes[0];
        console.log('Nuevo elemento añadido al DOM:', newNode);
        this.callback(newNode, this.stopObserving.bind(this));
      } else {
        console.log('No se procesa la mutación:', mutation);
      }
    }
  }

  private shouldProcessMutation(mutation: MutationRecord): boolean {
    const { config } = this;

    // Propiedades de configuración relacionadas con la validación de mutaciones
    const mutationProperties = ['childList', 'subtree', 'attributes', 'characterData'];

    for (const property of mutationProperties) {
      if (config[property as keyof MutationObserverInit] && mutation.type === property) {
        return true; // Valida la mutación si la propiedad está habilitada
      }
    }

    // Si no se cumple ninguna de las condiciones anteriores, no se procesa
    return false;
  }

  private startObserving() {
    console.debug('Watching creation - Target element:', this.target);

    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.target) {
      this.observer = new MutationObserver(this.mutationCallback);
      this.observer.observe(this.target, this.config);
    }
  }

  public stopObserving() {
    if (this.observer) {
      console.debug('Stopping observer interval, Element found:', this.target);
      this.observer.disconnect();
    }
  }
}
