export class MutationObserverManager {
  private observer: MutationObserver | undefined;
  private target: Node;
  private config: MutationObserverInit;
  private callback: (newNode: Node, stopObserving: () => void) => void;

  constructor(
    target: Node,
    config: MutationObserverInit,
    callback: (newNode: Node, stopObserving: () => void) => void
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
        if (newNode) {
          this.callback(newNode, this.stopObserving.bind(this));
        }
      }
    }
  }

  private shouldProcessMutation(mutation: MutationRecord): boolean {
    const { config } = this;

    // Check for childList mutations with addedNodes
    if (config.childList && mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      return true;
    }

    // Check for attributes mutations if enabled
    if (config.attributes && mutation.type === 'attributes') {
      return true;
    }

    // Check for characterData mutations if enabled
    if (config.characterData && mutation.type === 'characterData') {
      return true;
    }

    // If subtree is enabled, apply the same checks
    if (config.subtree) {
      // Additional handling for subtree if needed
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
