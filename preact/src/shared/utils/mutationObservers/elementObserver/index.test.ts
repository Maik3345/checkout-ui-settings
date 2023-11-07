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

  it('should call the callback when a new node is added to the target element', () => {
    const callback = jest.fn();
    const stopObserving = jest.fn();
    observer = new MutationObserverManager(target, { childList: true }, callback);

    const newNode = document.createElement('div');
    target.appendChild(newNode);

    setTimeout(() => {
      expect(callback).toHaveBeenCalledWith(newNode, stopObserving);
    }, 300);
  });

  it('should not call the callback when a new node is added to a different element', () => {
    const callback = jest.fn();
    observer = new MutationObserverManager(target, { childList: true }, callback);

    const newNode = document.createElement('div');
    document.body.appendChild(newNode);

    expect(callback).not.toHaveBeenCalled();
  });

  it('should not call the callback when a new attribute is added to the target element', () => {
    const callback = jest.fn();
    observer = new MutationObserverManager(target, { attributes: true }, callback);

    target.setAttribute('data-test', 'value');

    expect(callback).not.toHaveBeenCalled();
  });
});
