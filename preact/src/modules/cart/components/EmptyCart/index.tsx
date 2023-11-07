import { useState } from 'preact/hooks';
import styles from './index.module.css';

export const EmptyCart = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.notFoundContainer}>
      <h2>
        I am the custom empty cart
        <button onClick={() => setCount(count + 1)}>Click me</button>
        {count}
      </h2>
    </div>
  );
};
