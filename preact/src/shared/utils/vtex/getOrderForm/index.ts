import { VtexOrderForm } from '@/typings/order-form';
import { atom } from 'jotai';

export const orderForm = atom<VtexOrderForm | null>(null);

declare global {
  interface Window {
    vtexjs?: any;
  }
}

export const getOrderForm = (callback: () => void) => {
  // Check for vtexjs.checkout.orderForm in an interval
  let attempts = 0;
  const time = setInterval(function () {
    if (window?.vtexjs?.checkout?.orderForm) {
      callback();
      clearInterval(time);
    } else if (attempts++ >= 30) {
      callback(); // Call callback after 30 attempts if orderForm still doesn't exist
      clearInterval(time);
    }
  }, 100);

  return undefined;
};
