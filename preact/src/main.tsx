import { InitCart } from '@/modules';
import './styles/index.css';
import { getOrderForm } from '@/shared';

try {
  getOrderForm(() => {
    InitCart();
  });
} catch (error) {
  console.error('Error initializing modules: ', error);
}
