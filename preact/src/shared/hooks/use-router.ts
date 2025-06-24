import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo } from 'preact/hooks';
import { routesConfiguration } from '@/routes';
import {
  clearComponentCache,
  currentRouteAtom,
  DEFAULT_ROUTE_PATHS,
  initRouter,
  navigateTo,
  type RoutesComponentConfig,
  type RoutesConfig,
  routesConfigAtom,
  type VtexRoute,
  type Route,
} from '@/shared';

/**
 * Determina si una cadena es una ruta VTEX válida
 * @param routeName - Nombre de la ruta a verificar
 * @returns true si es una ruta VTEX válida, false en caso contrario
 */
export const isVtexRoute = (routeName: string): routeName is VtexRoute => {
  return Object.keys(DEFAULT_ROUTE_PATHS).includes(routeName);
};

/**
 * Convierte un nombre de ruta o path a un path válido
 * @param pathOrRouteName - Nombre de la ruta o path
 * @param routesConfig - Configuración de rutas
 * @returns Path convertido
 */
export const getPathFromRouteNameOrPath = (pathOrRouteName: string, routesConfig: RoutesComponentConfig): string => {
  let path = pathOrRouteName;

  // Verificamos si es un nombre de ruta en la configuración
  if (routesConfig && pathOrRouteName in routesConfig) {
    // Si es una ruta VTEX predefinida, usamos el mapa de rutas
    if (isVtexRoute(pathOrRouteName)) {
      path = DEFAULT_ROUTE_PATHS[pathOrRouteName];
    }
  }

  return path;
};

/**
 * Verifica si una ruta está activa según el nombre o path
 * @param currentRoute - Ruta actual
 * @param pathOrRouteName - Nombre de la ruta o path a verificar
 * @returns true si la ruta está activa, false en caso contrario
 */
export const checkIsRouteActive = (currentRoute: Route | null, pathOrRouteName: string): boolean => {
  if (!currentRoute) {
    return false;
  }

  // Si es un nombre de ruta, comparamos con el nombre
  if (currentRoute.name === pathOrRouteName) {
    return true;
  }

  // Si es un path, comparamos con el path
  return currentRoute.path === pathOrRouteName;
};

/**
 * Recarga un elemento específico de una ruta
 * @param pathOrRouteName - Nombre de la ruta o path
 * @param elementId - ID del elemento a recargar
 * @param path - Path convertido
 * @param currentRoute - Ruta actual
 */
export const reloadRouteElement = (
  pathOrRouteName: string,
  elementId: string,
  path: string,
  currentRoute: Route | null
): void => {
  clearComponentCache(path, elementId);

  if (currentRoute?.path === path || currentRoute?.name === pathOrRouteName) {
    // Si estamos en la misma ruta, forzamos un re-renderizado
    window.dispatchEvent(new Event('popstate'));
  } else {
    // Si no, navegamos a la ruta
    navigateTo(pathOrRouteName, { forceRerender: true, elementId });
  }
};

/**
 * Hook personalizado para gestionar el sistema de rutas
 * @param routesConfig - Configuración de rutas opcional (por defecto se usa la configuración estándar)
 * @returns Objeto con métodos y estado para gestionar las rutas
 */
export const useRouter = (routesConfig: RoutesComponentConfig = routesConfiguration) => {
  const [currentRoute, setCurrentRoute] = useAtom(currentRouteAtom);
  const [, setRoutesConfig] = useAtom(routesConfigAtom);

  // Inicializar el router
  useEffect(() => {
    // Inicializar el router cuando el componente se monta
    const cleanup = initRouter(
      routesConfig as unknown as RoutesConfig, // Compatibilidad con el tipo
      setCurrentRoute,
      setRoutesConfig
    );

    // Limpiar cuando el componente se desmonte
    return cleanup;
  }, [routesConfig, setCurrentRoute, setRoutesConfig]);

  // Memoizamos las funciones para evitar recalculos innecesarios
  const getPath = useCallback(
    (pathOrRouteName: string): string => getPathFromRouteNameOrPath(pathOrRouteName, routesConfig),
    [routesConfig]
  );

  const isActive = useCallback(
    (pathOrRouteName: string): boolean => checkIsRouteActive(currentRoute, pathOrRouteName),
    [currentRoute]
  );

  const clearElementCache = useCallback(
    (pathOrRouteName: string, elementId: string): void => {
      const path = getPath(pathOrRouteName);
      clearComponentCache(path, elementId);
    },
    [getPath]
  );

  const reloadElement = useCallback(
    (pathOrRouteName: string, elementId: string): void => {
      const path = getPath(pathOrRouteName);
      reloadRouteElement(pathOrRouteName, elementId, path, currentRoute);
    },
    [getPath, currentRoute]
  );

  // Retornamos un objeto con todas las funciones necesarias
  return useMemo(
    () => ({
      currentRoute,
      navigateTo,
      clearCache: clearComponentCache,
      isActive,
      clearElementCache,
      reloadElement,
      // Exponemos getPath como utilidad adicional
      getPath,
    }),
    [currentRoute, isActive, clearElementCache, reloadElement, getPath]
  );
};
