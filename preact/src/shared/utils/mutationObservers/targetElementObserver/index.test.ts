import { TargetElementObserver } from '../targetElementObserver';

describe('TargetElementObserver', () => {
  let target: HTMLElement;

  beforeEach(() => {
    target = document.createElement('div');
    target.id = 'target';
    document.body.appendChild(target);
  });

  afterEach(() => {
    document.body.removeChild(target);
  });

  it('should call the onLoadCallback when the target element is found', (done) => {
    const onLoadCallback = jest.fn();
    new TargetElementObserver(target, onLoadCallback);

    setTimeout(() => {
      expect(onLoadCallback).toHaveBeenCalled();
      done();
    }, 300);
  });
});
