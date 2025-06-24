import { useAtom } from 'jotai';
import { useEffect } from 'preact/hooks';
import { routesConfiguration } from '@/routes';
import { orderFormAtom, useRouter } from '@/shared';

// Main component that initializes the system
export const CheckoutApp = ({ orderForm }: { orderForm: VtexOrderForm | null }) => {
  const [, setOrderForm] = useAtom(orderFormAtom);

  // Initialize the router with default configuration
  useRouter(routesConfiguration);

  const updateOrderForm = (newOrderForm: VtexOrderForm) => {
    setOrderForm(newOrderForm);
  };

  useEffect(() => {
    setOrderForm(orderForm);

    $(window).on('orderFormUpdated.vtex', (_, updatedOrderForm) => {
      console.debug('orderFormUpdated.vtex event received with data:', updatedOrderForm);
      if (updatedOrderForm) {
        updateOrderForm(updatedOrderForm as VtexOrderForm);
      }
    });
  }, []);

  return null;
};
