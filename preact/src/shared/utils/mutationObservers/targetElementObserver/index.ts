export class TargetElementObserver {
  private target: Node;
  private onLoadCallback?: (stopObserving: () => void) => void;
  private checkTargetInterval: NodeJS.Timeout | null;

  constructor(target: Node, onLoadCallback?: () => void) {
    this.target = target;
    this.checkTargetInterval = null;
    this.onLoadCallback = onLoadCallback;

    this.initialize();
  }

  private initialize() {
    clearInterval(this.checkTargetInterval!);
    console.debug('Watching creation - Target element:', this.target);

    if (!this.target) {
      this.checkTargetInterval = setInterval(() => {
        this.initialize();
      }, 100);
      return;
    }

    this.onLoadCallback && this.onLoadCallback(this.stopObserving.bind(this));
  }

  public stopObserving() {
    if (this.checkTargetInterval) {
      console.debug('Stopping observer interval, Element found:', this.target);
      clearInterval(this.checkTargetInterval);
    }
  }
}
