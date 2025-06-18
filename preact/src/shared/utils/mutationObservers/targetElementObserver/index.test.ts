import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
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

  it('should call the onLoadCallback when the target element is found', async () => {
    const onLoadCallback = vi.fn();
    new TargetElementObserver(target, onLoadCallback);
    
    // En Vitest, podemos usar await flushPromises() o simplemente verificar directamente
    expect(onLoadCallback).toHaveBeenCalled();
  });
});
