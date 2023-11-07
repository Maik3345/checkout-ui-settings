import { getOrderForm } from './index';

declare var window: any;

describe('getOrderForm', () => {
  it('should return vtexjs if it exists in the window object', () => {
    const mockCallback = jest.fn();
    window.vtexjs = { someProperty: 'someValue' };

    const result = getOrderForm(mockCallback);

    setTimeout(() => {
      expect(result).toEqual(window.vtexjs);
      expect(mockCallback).not.toHaveBeenCalled();
    }, 300);
  });

  it('should call the callback function and return undefined if vtexjs does not exist in the window object', () => {
    const mockCallback = jest.fn();
    window.vtexjs = undefined;

    const result = getOrderForm(mockCallback);

    setTimeout(() => {
      expect(result).toBeUndefined();
      expect(mockCallback).toHaveBeenCalled();
    }, 300);
  });

  it('should call the callback function and return undefined if vtexjs.checkout.orderForm exists in the window object', () => {
    const mockCallback = jest.fn();
    window.vtexjs = { checkout: { orderForm: 'someValue' } };

    const result = getOrderForm(mockCallback);

    setTimeout(() => {
      expect(result).toBeUndefined();
      expect(mockCallback).toHaveBeenCalled();
    }, 300);
  });

  it('should call the callback function and return undefined if vtexjs.checkout.orderForm does not exist in the window object after 30 attempts', () => {
    const mockCallback = jest.fn();
    window.vtexjs = { checkout: {} };

    const result = getOrderForm(mockCallback);

    setTimeout(() => {
      expect(result).toBeUndefined();
      expect(mockCallback).toHaveBeenCalled();
    }, 300);
  });
});
