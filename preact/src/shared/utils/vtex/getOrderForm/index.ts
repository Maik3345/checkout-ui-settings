import { VtexOrderForm } from '@/typings/order-form';
import { atom,use } from 'jotai';

export const orderForm = atom<VtexOrderForm | null>(null);
export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

declare var window: any;

export const getOrderForm = (callback: () => void) => {
  if (window?.vtexjs) return vtexjs;

  let attempts = 0;
  const time = setInterval(function () {
    window?.vtexjs.checkout.orderForm && (callback(), clearInterval(time)),
      attempts++ >= 30 && clearInterval(time);
  }, 100);
};
