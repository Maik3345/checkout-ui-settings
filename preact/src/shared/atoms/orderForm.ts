import { atom } from 'jotai';
import type { VtexOrderForm } from '@/typings/order-form';

export const orderFormAtom = atom<VtexOrderForm | null>(null);
