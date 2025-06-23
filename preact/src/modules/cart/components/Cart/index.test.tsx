import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderCartContainer } from './index';
import * as preact from 'preact';

// Mock necesario para jQuery
vi.stubGlobal('$', vi.fn());

// Mock para render de Preact
vi.mock('preact', () => {
  return {
    render: vi.fn()
  };
});

// Mock para EmptyCart
vi.mock('../EmptyCart', () => ({
  EmptyCart: () => null
}));

// Mock para Jotai
vi.mock('jotai', () => ({
  useAtom: vi.fn(() => ['', vi.fn()]),
  atom: vi.fn()
}));

describe('renderCartContainer', () => {
  let mockQuery: any;
  let mockPrepend: any;
  let consoleSpy: any;
  
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Preparar mocks
    mockQuery = vi.fn();
    mockPrepend = vi.fn();
    
    // Espiar en console.log
    consoleSpy = vi.spyOn(console, 'log');
    
    // Mock para getElementById
    document.getElementById = vi.fn().mockReturnValue({});
  });
  
  it('should not render cart if it already exists', () => {
    // Configurar jQuery para este test
    mockQuery.mockReturnValue({ length: 1 });
    vi.stubGlobal('$', mockQuery);
    
    renderCartContainer();
    
    // Verificar que se muestra el mensaje en la consola
    expect(consoleSpy).toHaveBeenCalledWith('Already rendered the cart');
    // Verificar que no se llama a render
    expect(preact.render).not.toHaveBeenCalled();
  });
  
  it('should create container and render cart if it does not exist', () => {
    // Configurar jQuery para este test - contenedor no existe
    mockQuery.mockImplementation((selector: string) => {
      if (selector === '#cart-container-custom') {
        return { length: 0 };
      }
      return { 
        prepend: mockPrepend
      };
    });
    vi.stubGlobal('$', mockQuery);
    
    renderCartContainer();
    
    // Verificar que se llamó a prepend
    expect(mockPrepend).toHaveBeenCalled();
    // Verificar que se llamó a render
    expect(preact.render).toHaveBeenCalled();
  });
});
