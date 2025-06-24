import {
  CartComponent,
  EmailComponent,
  PaymentComponent,
  ProfileComponent,
  ShippingComponent,
  SummaryComponent,
} from '@/components';
import type { RoutesConfig } from '@/shared/models';

export const routesConfiguration: RoutesConfig = {
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
  genericElements: [
    {
      selector: '.cart-template.full-cart .summary-totalizers.cart-totalizers .accordion-inner',
      components: [SummaryComponent],
    },
    {
      selector: '.cart-template.mini-cart .summary-totalizers.cart-totalizers .accordion-inner',
      components: [SummaryComponent],
    },
  ],
};
