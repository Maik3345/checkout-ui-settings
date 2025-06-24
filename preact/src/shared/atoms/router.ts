import { atom } from 'jotai';
import type { Route, RoutesConfig } from '../utils';

// Átomos para gestionar el estado global de las rutas
export const currentRouteAtom = atom<Route | null>(null);
export const routesConfigAtom = atom<RoutesConfig | null>(null);
