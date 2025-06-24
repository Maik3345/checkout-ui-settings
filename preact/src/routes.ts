import {
  CartComponent,
  EmailComponent,
  PaymentComponent,
  ProfileComponent,
  ShippingComponent,
  SummaryComponent,
} from '@/components';
import type { RoutesComponentConfig } from '@/shared/models';

export const defaultRoutesConfig: RoutesComponentConfig = {
  // Elementos que se renderizan en todas las rutas
  defaultElements: [
    {
      selector: '.cart-template.full-cart .summary-totalizers.cart-totalizers .accordion-inner',
      components: [SummaryComponent],
    },
    {
      selector: '.cart-template.mini-cart .summary-totalizers.cart-totalizers .accordion-inner',
      components: [SummaryComponent],
    },
  ],
  // Configuración de rutas como un objeto donde las claves son los nombres de las rutas
  routes: {
    cart: {
      elements: [
        {
          selector: '.cart-template.full-cart',
          components: [CartComponent],
        },
      ],
    },
    shipping: {
      elements: [
        {
          selector: '#shipping-data .accordion-inner.shipping-container',
          components: [ShippingComponent],
        },
      ],
    },
    payment: {
      elements: [
        {
          selector: '#payment-data .accordion-body',
          components: [PaymentComponent],
        },
      ],
    },
    email: {
      elements: [
        {
          selector: '#client-profile-data .client-pre-email',
          components: [EmailComponent],
        },
      ],
    },
    profile: {
      elements: [
        {
          selector: '#client-profile-data .client-profile-data .accordion-inner',
          components: [ProfileComponent],
        },
      ],
    },
  },
};
