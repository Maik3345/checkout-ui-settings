import { useAtom } from 'jotai';
import { orderFormAtom } from '@/shared';
import styles from './index.module.css';

export const CartComponent = () => {
  const [orderForm] = useAtom(orderFormAtom);

  return (
    <div className={`cart-container-custom ${styles.cartContainer}`}>
      <div className={styles.cartTitle}>Custom Cart Component</div>

      {orderForm?.items.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price / 100}</p>
        </div>
      ))}
      {orderForm?.items.length === 0 && <p className={styles.cartEmpty}>Your cart is empty</p>}
    </div>
  );
};
