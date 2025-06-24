import { useAtom } from 'jotai';
import { orderFormAtom } from '@/shared';

export const SummaryComponent = () => {
  const [orderForm] = useAtom(orderFormAtom);
  const { totalizers } = orderForm || {};

  return (
    <div>
      <h1>Summary Component</h1>

      <p>Total: {totalizers?.find((item) => item.id === 'Items')?.value}</p>
      <p>Shipping: {totalizers?.find((item) => item.id === 'Shipping')?.value}</p>
    </div>
  );
};
