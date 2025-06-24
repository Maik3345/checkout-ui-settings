import { useAtom } from 'jotai';
import { useEffect } from 'preact/hooks';
import { defaultRoutesConfig, orderFormAtom, useRouter } from '@/shared';
import type { VtexOrderForm } from '@/typings/order-form';

// Componente principal que inicializa el sistema
export const Render = ({ orderForm }: { orderForm: VtexOrderForm | null }) => {
  const [, setOrderForm] = useAtom(orderFormAtom);

  // Inicializamos el router con la configuración por defecto
  useRouter(defaultRoutesConfig);

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
