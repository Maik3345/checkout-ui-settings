import { MutationObserverManager } from '@/shared';
import { renderCartContainer } from './components';

export const InitCart = () => {
  new MutationObserverManager($('.cart-template.full-cart')[0], { subtree: true, childList: true }, () => {
    renderCartContainer();
  });
};
