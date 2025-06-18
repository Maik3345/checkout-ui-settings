import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { MutationObserverManager } from '.';

describe('MutationObserverManager', () => {
  let target: HTMLElement;
  let observer: MutationObserverManager;

  beforeEach(() => {
    target = document.createElement('div');
    target.id = 'target';
    document.body.appendChild(target);
  });

  afterEach(() => {
    observer.stopObserving();
    document.body.removeChild(target);
  });

  it('should call the callback when a new node is added to the target element', async () => {
    const callback = vi.fn();
    observer = new MutationObserverManager(target, { childList: true }, callback);

    const newNode = document.createElement('div');
    target.appendChild(newNode);

    // MutationObserver callbacks are asynchronous in the browser
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(callback).toHaveBeenCalledWith(newNode, expect.any(Function));
  });

  it('should not call the callback when a new node is added to a different element', () => {
    const callback = vi.fn();
    observer = new MutationObserverManager(target, { childList: true }, callback);

    const newNode = document.createElement('div');
    document.body.appendChild(newNode);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should not call the callback when a new attribute is added to the target element', () => {
    const callback = vi.fn();
    observer = new MutationObserverManager(target, { attributes: true }, callback);

    target.setAttribute('data-test', 'value');

    expect(callback).not.toHaveBeenCalled();
  });
});
