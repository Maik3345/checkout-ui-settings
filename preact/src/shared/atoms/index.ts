import { atom } from 'jotai';

export const textAtom = atom('');
export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());
