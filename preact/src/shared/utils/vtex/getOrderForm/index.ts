import type { VtexOrderForm } from '@/typings/order-form';

/**
 * Retrieves the VTEX OrderForm object by checking for its availability in the global window object.
 *
 * This function attempts to access the `vtexjs.checkout.orderForm` object, which might not be
 * immediately available when the page loads. It uses a polling mechanism to check for the
 * orderForm's existence at regular intervals.
 *
 * @param callback - Function to be called once the OrderForm is available or after maximum attempts
 * @param callback.orderForm - The VTEX OrderForm object if found, or undefined if not found after max attempts
 *
 * @returns undefined - This function doesn't return a value, it works asynchronously via the callback
 *
 * @example
 * ```typescript
 * getOrderForm((orderForm) => {
 *   if (orderForm) {
 *     console.log('OrderForm loaded:', orderForm);
 *   } else {
 *     console.log('OrderForm not available after maximum attempts');
 *   }
 * });
 * ```
 */
export const getOrderForm = (callback: (orderForm: VtexOrderForm | undefined) => void) => {
  const MAX_ATTEMPTS = 30;
  const INTERVAL_MS = 50;

  let attempts = 0;

  const interval = setInterval(() => {
    const orderForm = window?.vtexjs?.checkout?.orderForm as VtexOrderForm | undefined;

    if (orderForm || attempts >= MAX_ATTEMPTS) {
      clearInterval(interval);
      callback(orderForm);
    }

    attempts++;
  }, INTERVAL_MS);

  return undefined;
};
