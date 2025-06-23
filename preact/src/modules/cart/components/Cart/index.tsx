import { render } from 'preact';
import { EmptyCart } from '../EmptyCart';
import { useEffect } from 'preact/hooks';
import { useAtom } from 'jotai';
import { textAtom, uppercaseAtom } from '@/shared';

const CART_CONTAINER = 'cart-container-custom';

export const CartContainer = () => {
  const [text, setText] = useAtom(textAtom);
  const [uppercase] = useAtom(uppercaseAtom);

  const handleChange = (e: any) => setText(e.target.value);

  useEffect(() => {
    return () => {
      console.log('I am the cart container unmounting');
    };
  }, []);

  return (
    <div>
      I am the custom cart container {text} {uppercase}
      <input value={text} onChange={handleChange} />
      <EmptyCart />
    </div>
  );
};

export const renderCartContainer = () => {
  if ($(`#${CART_CONTAINER}`).length) return;

  let container = $('.cart-template.full-cart .cart-template-holder');
  const div = document.createElement('div');
  div.setAttribute('id', CART_CONTAINER);
  $(container).prepend(div);

  render(<CartContainer />, document.getElementById(CART_CONTAINER)!);
};
