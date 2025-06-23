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

  it('should start checking for vtexjs and return undefined', () => {
    const mockCallback = vi.fn();
    window.vtexjs = { someProperty: 'someValue' };

    const result = getOrderForm(mockCallback);

    expect(result).toBeUndefined();
    // No comprobamos el callback porque se ejecuta después del intervalo
  });

  it('should return undefined when vtexjs does not exist and call callback after interval', () => {
    vi.useFakeTimers();
    const mockCallback = vi.fn();
    window.vtexjs = undefined;

    const result = getOrderForm(mockCallback);

    expect(result).toBeUndefined();
    expect(mockCallback).not.toHaveBeenCalled(); // No se llama inmediatamente
    
    // Avanzamos el temporizador para verificar que se llama después de 3 segundos (30 intentos * 100ms)
    vi.advanceTimersByTime(3100);
    expect(mockCallback).toHaveBeenCalled();
    
    vi.useRealTimers();
  });

  it('should call the callback function after interval and return undefined if vtexjs.checkout.orderForm exists', () => {
    vi.useFakeTimers();
    const mockCallback = vi.fn();
    window.vtexjs = { checkout: { orderForm: 'someValue' } };

    const result = getOrderForm(mockCallback);

    expect(result).toBeUndefined();
    expect(mockCallback).not.toHaveBeenCalled(); // No se llama inmediatamente
    
    // Avanzar el primer tick del intervalo
    vi.advanceTimersByTime(100);
    
    // Ahora debería haberse llamado el callback
    expect(mockCallback).toHaveBeenCalled();
    
    vi.useRealTimers();
  });

  it('should call the callback function and return undefined if vtexjs.checkout.orderForm does not exist after 30 attempts', () => {
    vi.useFakeTimers();
    const mockCallback = vi.fn();
    window.vtexjs = { checkout: {} };

    const result = getOrderForm(mockCallback);
    
    expect(result).toBeUndefined();
    expect(mockCallback).not.toHaveBeenCalled(); // No se llama inmediatamente
    
    // Avanzamos el tiempo suficiente para que se ejecuten todos los intentos
    vi.advanceTimersByTime(3100); // 31 * 100ms
    
    // Ahora debería haberse llamado el callback
    expect(mockCallback).toHaveBeenCalled();
    
    vi.useRealTimers();
  });
});
