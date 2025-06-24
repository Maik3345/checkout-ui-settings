import { h } from 'preact';
import { MutationObserverManager } from '@/shared';
import type { Route, RouteElement, RoutesConfig, VtexRoute } from '@/shared/models';

// Extendiendo RouteComponentConfig para incluir path para uso interno

// Mapeo por defecto de rutas VTEX a paths
export const DEFAULT_ROUTE_PATHS: { [key in VtexRoute]: string } = {
  cart: '#/cart',
  shipping: '#/shipping',
  payment: '#/payment',
  email: '#/email',
  profile: '#/profile',
};

// Función simplificada para obtener un elemento del DOM según el selector
export const getElementFromSelector = (selector: string): Element | null => {
  return document.querySelector(selector);
};

// Función para cargar componentes en el DOM
export const loadComponents = async (route: Route) => {
  if (!route || !route.elements || route.elements.length === 0) {
    return;
  }
  // Cargamos componentes para la ruta actual

  // Procesamos cada elemento de la ruta
  route.elements.forEach((element) => {
    processRouteElement(route.path, element);
  });
};

// Función para procesar un elemento de ruta
const processRouteElement = async (routePath: string, element: RouteElement) => {
  if (!element.components || element.components.length === 0) {
    return;
  }

  const targetElement = getElementFromSelector(element.selector);

  if (!targetElement) {
    // Si el elemento target no existe, crea un observador para cuando aparezca
    const containerSelector = element.selector;

    // Función simplificada para encontrar elementos
    const elementFinder = () => document.querySelector(containerSelector);

    // Intentamos observar el cuerpo del documento para detectar cuando se crea el elemento target
    new MutationObserverManager(document.body, { childList: true, subtree: true }, (_, stopObserving) => {
      const foundElement = elementFinder();
      if (foundElement) {
        renderComponentsToElement(foundElement as Node, routePath, element);
        stopObserving();
        return true;
      }
      return false;
    });

    return;
  }

  renderComponentsToElement(targetElement, routePath, element);
};

// Almacena un caché de los componentes que ya se han renderizado
const renderedComponentsCache = new Map<string, Set<string>>();

// Función auxiliar para renderizar componentes en un elemento
function renderComponentsToElement(targetElement: Node, routePath: string, routeElement: RouteElement) {
  // Renderizamos componentes en el elemento destino

  // Creamos un identificador único para este elemento de ruta basado en el selector
  const elementId = `selector-${routeElement.selector.replace(/[^a-zA-Z0-9]/g, '-')}`;

  // Verificamos si ya existe un contenedor para este elemento de ruta
  let routeContainer = document.querySelector(
    `[data-route-path="${routePath}"][data-route-element="${elementId}"]`
  ) as HTMLElement;
  const isNewContainer = !routeContainer;

  // Si no existe, creamos uno nuevo
  if (isNewContainer) {
    routeContainer = document.createElement('div');
    routeContainer.setAttribute('data-route-path', routePath);
    routeContainer.setAttribute('data-route-element', elementId);
    routeContainer.setAttribute('data-route-timestamp', Date.now().toString());
    targetElement.appendChild(routeContainer);
  }

  // Obtenemos el caché para este elemento de ruta o inicializamos uno nuevo
  const routeCacheKey = `${routePath}-${elementId}-${routeContainer.getAttribute('data-route-timestamp')}`;
  const componentCache = renderedComponentsCache.get(routeCacheKey) || new Set<string>();

  // Renderizamos cada componente solo si es necesario
  routeElement.components.forEach(async (Component, index) => {
    if (!Component) {
      console.error(`Component at index ${index} is not defined`);
      return;
    }

    // Identificador único del componente (usando su nombre o índice)
    const componentId = Component.displayName || Component.name || `component-${index}`;
    const componentCacheKey = `${componentId}-${index}`;

    // Buscamos si ya existe un contenedor para este componente
    let componentContainer = routeContainer.querySelector(`[data-component-key="${componentCacheKey}"]`) as HTMLElement;

    // Solo renderizamos el componente si:
    // 1. No está en el caché (nuevo) o
    // 2. Es un nuevo contenedor de ruta o
    // 3. Explícitamente queremos forzar un re-renderizado
    if (!componentCache.has(componentCacheKey) || isNewContainer) {
      // Si no existe el contenedor, lo creamos
      if (!componentContainer) {
        componentContainer = document.createElement('div');
        componentContainer.setAttribute('data-component-key', componentCacheKey);
        componentContainer.setAttribute('data-component-index', index.toString());
        routeContainer.appendChild(componentContainer);
      }

      // Utilizamos la API de Preact para renderizar
      const { render } = await import('preact');
      render(h(Component, {}), componentContainer);

      // Añadimos al caché
      componentCache.add(componentCacheKey);
    }
  });

  // Actualizamos el caché
  renderedComponentsCache.set(routeCacheKey, componentCache);
}

// Función para cambiar de ruta de forma programática
export const navigateTo = (
  pathOrRouteName: string,
  options?: {
    forceRerender?: boolean;
    elementId?: string; // Identificador del elemento específico que queremos re-renderizar
  }
) => {
  // Obtenemos la configuración actual de forma más segura
  let actualPath = pathOrRouteName;

  // Convertir nombre de ruta a path si es necesario
  // En este caso, primero verificamos si es un nombre de una ruta VTEX conocida
  if (pathOrRouteName in DEFAULT_ROUTE_PATHS) {
    actualPath = DEFAULT_ROUTE_PATHS[pathOrRouteName as VtexRoute];
  }

  // Si se solicita forzar un re-renderizado, limpiamos el caché para la ruta
  if (options?.forceRerender) {
    clearComponentCache(actualPath, options.elementId);
  }

  // Cambiamos la URL sin recargar la página
  window.history.pushState({}, '', actualPath);

  // Disparamos el evento popstate para que nuestro router lo detecte
  window.dispatchEvent(new Event('popstate'));
};

// Función para limpiar el caché de componentes
export const clearComponentCache = (routePath?: string, elementId?: string) => {
  if (routePath) {
    // Eliminar solo el caché para una ruta específica
    for (const key of renderedComponentsCache.keys()) {
      // Si se proporciona un elementId, sólo limpiamos ese elemento específico
      if (elementId) {
        if (key.includes(`${routePath}-${elementId}`)) {
          renderedComponentsCache.delete(key);
        }
      } else if (key.startsWith(routePath)) {
        // Si no hay elementId, limpiamos todos los elementos de la ruta
        renderedComponentsCache.delete(key);
      }
    }
  } else {
    // Limpiar todo el caché
    renderedComponentsCache.clear();
  }
};

// Inicializar el router con la configuración de rutas
export const initRouter = (
  config: RoutesConfig,
  setCurrentRoute: (route: Route | null) => void,
  setRoutesConfig: (config: RoutesConfig) => void
) => {
  // Guardamos la configuración
  setRoutesConfig(config);

  // Función para manejar cambios en la ruta
  const handleRouteChange = () => {
    const currentPath = window.location.pathname + window.location.hash;

    // Determinar qué ruta está activa basada en el path actual
    const vtexRoutes: VtexRoute[] = ['cart', 'shipping', 'payment', 'email', 'profile'];
    const basePaths = DEFAULT_ROUTE_PATHS;

    // Buscamos la ruta que coincide con el path actual
    let matchedRoute: Route | null = null;

    for (const routeName of vtexRoutes) {
      const routeConfig = config[routeName];

      if (!routeConfig) {
        continue;
      }

      // Usamos el mapeo de paths para rutas VTEX
      const routePath = basePaths[routeName];

      if (routePath && currentPath.includes(routePath)) {
        matchedRoute = {
          ...routeConfig,
          path: routePath,
          name: routeName,
        };
        break;
      }
    }

    // Cargamos elementos por defecto si existen
    if (config.genericElements && config.genericElements.length > 0) {
      // Creamos una ruta temporal para los elementos por defecto
      const defaultRoute: Route = {
        path: 'default',
        name: 'default',
        elements: config.genericElements,
      };
      loadComponents(defaultRoute);
    }

    if (matchedRoute) {
      // Verificamos que la ruta tenga elementos válidos
      if (matchedRoute.elements && matchedRoute.elements.length > 0) {
        setCurrentRoute(matchedRoute);
        loadComponents(matchedRoute);
      } else {
        // Si la ruta no tiene elementos, no hacemos nada
        setCurrentRoute(null);
      }
    } else {
      // Si no se encuentra la ruta, no hacemos nada
      setCurrentRoute(null);
    }
  };

  // Escuchamos cambios en el historial
  window.addEventListener('popstate', handleRouteChange);

  // Procesamos la ruta inicial
  handleRouteChange();

  // Retornamos una función para desregistrar los event listeners
  return () => {
    window.removeEventListener('popstate', handleRouteChange);
  };
};
