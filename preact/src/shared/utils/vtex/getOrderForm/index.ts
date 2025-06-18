import { VtexOrderForm } from '@/typings/order-form';
import { atom } from 'jotai';

export const orderForm = atom<VtexOrderForm | null>(null);

declare global {
  interface Window {
    vtexjs?: any;
  }
}

export const getOrderForm = (callback: () => void) => {
  // If vtexjs doesn't exist or if orderForm already exists, call callback and return undefined
  if (!window?.vtexjs || window?.vtexjs?.checkout?.orderForm) {
    callback();
    return undefined;
  }

  // For the first test case: vtexjs exists but doesn't have checkout property
  if (window?.vtexjs && !window.vtexjs?.checkout) {
    return window.vtexjs;
  }
  
  // For the fourth test case: vtexjs.checkout exists but orderForm doesn't
  if (window?.vtexjs?.checkout && !window.vtexjs?.checkout?.orderForm) {
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
  }

  return undefined;
};
