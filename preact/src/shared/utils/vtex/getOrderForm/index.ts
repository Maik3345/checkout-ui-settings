declare var window: any;

export const getOrderForm = (callback: () => void) => {
  if (window?.vtexjs) return vtexjs;

  let attempts = 0;
  const time = setInterval(function () {
    window?.vtexjs.checkout.orderForm && (callback(), clearInterval(time)),
      attempts++ >= 30 && clearInterval(time);
  }, 100);
};
