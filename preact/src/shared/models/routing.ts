import type { ComponentType } from 'preact';

// Definición para elementos que contienen un selector y componentes
export interface RouteElement {
  selector: string; // Selector CSS para encontrar el elemento en el DOM
  components: ComponentType<any>[];
}

// Definición de Routes que utiliza directamente componentes con múltiples elementos
export interface RouteComponentConfig {
  elements: RouteElement[];
}

// Mapeo de rutas de VTEX IO
export type VtexRoute = 'cart' | 'shipping' | 'payment' | 'email' | 'profile';

// Objeto de rutas donde las claves son los nombres de las rutas
export interface RoutesMap {
  [key: string]: RouteComponentConfig;
}

export interface RoutesComponentConfig {
  basePaths?: { [key in VtexRoute]?: string }; // Mapeo opcional de nombres de rutas a paths completos
  routes: RoutesMap;
  defaultElements?: RouteElement[]; // Elementos que se renderizan en todas las rutas
}
