import { render } from 'preact';
import { EmptyCart } from '../EmptyCart';
import { useEffect } from 'preact/hooks';

const CART_CONTAINER = 'cart-container-custom';

export const CartContainer = () => {
  console.log('I am the cart container');

  useEffect(() => {
    return () => {
      console.log('I am the cart container unmounting');
    };
  }, []);

  return (
    <div>
      I am the custom cart container
      <EmptyCart />
    </div>
  );
};

export const renderCartContainer = () => {
  if ($(`#${CART_CONTAINER}`).length) {
    console.log('Already rendered the cart');
    return;
  }
  let container = $('.cart-template.full-cart .cart-template-holder');
  const div = document.createElement('div');
  div.setAttribute('id', CART_CONTAINER);
  $(container).prepend(div);

  render(<CartContainer />, document.getElementById(CART_CONTAINER)!);
};
