import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { clearComponentCache, navigateTo, type RoutesConfig } from '@/shared';
import { checkIsRouteActive, getPathFromRouteNameOrPath, isVtexRoute, reloadRouteElement } from '../use-router';

// Mock de las dependencias
vi.mock('@/shared', () => ({
  clearComponentCache: vi.fn(),
  DEFAULT_ROUTE_PATHS: {
    cart: '#/cart',
    shipping: '#/shipping',
    payment: '#/payment',
    email: '#/email',
    profile: '#/profile',
  },
  navigateTo: vi.fn(),
}));

describe('Funciones de utilidad de Router', () => {
  describe('isVtexRoute', () => {
    it('debe retornar true para rutas VTEX válidas', () => {
      expect(isVtexRoute('cart')).toBe(true);
      expect(isVtexRoute('shipping')).toBe(true);
      expect(isVtexRoute('payment')).toBe(true);
      expect(isVtexRoute('email')).toBe(true);
      expect(isVtexRoute('profile')).toBe(true);
    });

    it('debe retornar false para rutas no VTEX', () => {
      expect(isVtexRoute('other')).toBe(false);
      expect(isVtexRoute('custom')).toBe(false);
    });
  });

  describe('getPathFromRouteNameOrPath', () => {
    const routesConfig: RoutesConfig = {
      cart: { elements: [] },
      shipping: { elements: [] },
      profile: { elements: [] },
      genericElements: [],
    };

    it('debe convertir un nombre de ruta VTEX a su path correspondiente', () => {
      expect(getPathFromRouteNameOrPath('cart', routesConfig)).toBe('#/cart');
      expect(getPathFromRouteNameOrPath('shipping', routesConfig)).toBe('#/shipping');
    });

    it('debe mantener el path original si no es una ruta VTEX', () => {
      expect(getPathFromRouteNameOrPath('/custom-path', routesConfig)).toBe('/custom-path');
      expect(getPathFromRouteNameOrPath('#/other', routesConfig)).toBe('#/other');
    });

    it('debe mantener el path original si el nombre no está en la configuración', () => {
      expect(getPathFromRouteNameOrPath('other', routesConfig)).toBe('other');
    });
  });

  describe('checkIsRouteActive', () => {
    const currentRoute = { name: 'cart', path: '#/cart', elements: [] };

    it('debe retornar false si currentRoute es null', () => {
      expect(checkIsRouteActive(null, 'cart')).toBe(false);
    });

    it('debe retornar true si el nombre de la ruta coincide', () => {
      expect(checkIsRouteActive(currentRoute, 'cart')).toBe(true);
    });

    it('debe retornar true si el path de la ruta coincide', () => {
      expect(checkIsRouteActive(currentRoute, '#/cart')).toBe(true);
    });

    it('debe retornar false si ni el nombre ni el path coinciden', () => {
      expect(checkIsRouteActive(currentRoute, 'shipping')).toBe(false);
      expect(checkIsRouteActive(currentRoute, '#/shipping')).toBe(false);
    });
  });

  describe('reloadRouteElement', () => {
    // Hay un problema con el spy de dispatchEvent en el entorno de pruebas
    // Así que vamos a mockear directamente window.dispatchEvent
    const originalDispatchEvent = window.dispatchEvent;
    const mockDispatchEvent = vi.fn();

    beforeEach(() => {
      vi.clearAllMocks();
      window.dispatchEvent = mockDispatchEvent;
    });

    afterEach(() => {
      window.dispatchEvent = originalDispatchEvent;
    });

    it('debe limpiar la caché y disparar popstate cuando la ruta actual coincide con el path', () => {
      const currentRoute = { name: 'cart', path: '#/cart', elements: [] };

      reloadRouteElement('cart', 'element1', '#/cart', currentRoute);

      expect(clearComponentCache).toHaveBeenCalledWith('#/cart', 'element1');
      expect(mockDispatchEvent).toHaveBeenCalled();
      expect(navigateTo).not.toHaveBeenCalled();
    });

    it('debe limpiar la caché y disparar popstate cuando la ruta actual coincide con el nombre', () => {
      const currentRoute = { name: 'cart', path: '#/cart', elements: [] };

      reloadRouteElement('cart', 'element1', '#/other-path', currentRoute);

      expect(clearComponentCache).toHaveBeenCalledWith('#/other-path', 'element1');
      expect(mockDispatchEvent).toHaveBeenCalled();
      expect(navigateTo).not.toHaveBeenCalled();
    });

    it('debe limpiar la caché y navegar cuando la ruta actual no coincide', () => {
      const currentRoute = { name: 'shipping', path: '#/shipping', elements: [] };

      reloadRouteElement('cart', 'element1', '#/cart', currentRoute);

      expect(clearComponentCache).toHaveBeenCalledWith('#/cart', 'element1');
      expect(mockDispatchEvent).not.toHaveBeenCalled();
      expect(navigateTo).toHaveBeenCalledWith('cart', { forceRerender: true, elementId: 'element1' });
    });
  });
});
