import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getOrderForm } from './index';

declare global {
  interface Window {
    vtexjs?: any;
  }
}

describe('getOrderForm', () => {
  beforeEach(() => {
    // Limpiar las propiedades antes de cada test
    delete window.vtexjs;
  });

  it('should return vtexjs if it exists in the window object', () => {
    const mockCallback = vi.fn();
    window.vtexjs = { someProperty: 'someValue' };

    const result = getOrderForm(mockCallback);

    expect(result).toEqual(window.vtexjs);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('should call the callback function and return undefined if vtexjs does not exist in the window object', () => {
    const mockCallback = vi.fn();
    window.vtexjs = undefined;

    const result = getOrderForm(mockCallback);

    expect(result).toBeUndefined();
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should call the callback function and return undefined if vtexjs.checkout.orderForm exists in the window object', () => {
    const mockCallback = vi.fn();
    window.vtexjs = { checkout: { orderForm: 'someValue' } };

    const result = getOrderForm(mockCallback);

    expect(result).toBeUndefined();
    expect(mockCallback).toHaveBeenCalled();
  });

  it('should call the callback function and return undefined if vtexjs.checkout.orderForm does not exist in the window object after 30 attempts', () => {
    vi.useFakeTimers();
    const mockCallback = vi.fn();
    window.vtexjs = { checkout: {} };

    const result = getOrderForm(mockCallback);
    
    // Fast-forward time to trigger the callback after 30 attempts
    for (let i = 0; i < 31; i++) {
      vi.advanceTimersByTime(100);
    }

    expect(result).toBeUndefined();
    expect(mockCallback).toHaveBeenCalled();
    
    vi.useRealTimers();
  });
});
