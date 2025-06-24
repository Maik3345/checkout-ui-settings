import type { ComponentType } from 'preact';

// Definition for elements that contain a selector and components
export interface RouteElement {
  selector: string; // CSS selector to find the element in the DOM
  components: ComponentType<any>[];
}

// Definition of Routes that directly use components with multiple elements
export interface RouteComponentConfig {
  elements: RouteElement[];
}

// Mapping of VTEX IO routes
export type VtexRoute = 'cart' | 'shipping' | 'payment' | 'email' | 'profile';

// Routes object where keys are route names
export interface RoutesMap {
  [key: string]: RouteComponentConfig;
}

// Definition of a route with a path and name, extending RouteComponentConfig
export interface Route extends RouteComponentConfig {
  path: string;
  name: string;
}

// Configuration for routes, including optional base paths and default elements
export interface RoutesConfig {
  cart?: RouteComponentConfig;
  shipping?: RouteComponentConfig;
  payment?: RouteComponentConfig;
  email?: RouteComponentConfig;
  profile?: RouteComponentConfig;
  genericElements?: RouteElement[];
}
