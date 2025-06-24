import { h } from 'preact';
import { Render } from '@/components';
import type { VtexOrderForm } from '@/typings/order-form';

export const render = (orderForm: VtexOrderForm | undefined) => {
  // Renderizamos nuestro componente raíz que se encarga de gestionar las rutas
  const appContainer = document.createElement('div');
  appContainer.setAttribute('id', 'checkout-ui-custom-app');
  document.body.appendChild(appContainer);

  // Importamos render de forma asíncrona para evitar problemas de carga
  import('preact').then(({ render }) => {
    render(
      h(Render, {
        orderForm: orderForm || null, // Pasamos el orderForm al componente
      }),
      appContainer
    );
  });
};
