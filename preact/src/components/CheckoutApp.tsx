import { useAtom } from 'jotai';
import { useEffect } from 'preact/hooks';
import { routesConfiguration } from '@/routes';
import { orderFormAtom, useRouter } from '@/shared';

// Componente principal que inicializa el sistema
export const CheckoutApp = ({ orderForm }: { orderForm: VtexOrderForm | null }) => {
  const [, setOrderForm] = useAtom(orderFormAtom);

  // Inicializamos el router con la configuración por defecto
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
  }, [orderForm, setOrderForm, updateOrderForm]);

  return null;
};
