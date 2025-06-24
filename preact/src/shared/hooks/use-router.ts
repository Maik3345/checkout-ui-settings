import { useAtom } from 'jotai';
import { useEffect } from 'preact/hooks';
import {
  clearComponentCache,
  currentRouteAtom,
  DEFAULT_ROUTE_PATHS,
  defaultRoutesConfig,
  initRouter,
  navigateTo,
  type RoutesComponentConfig,
  type RoutesConfig,
  routesConfigAtom,
  type VtexRoute,
} from '@/shared';
/**
 * Hook personalizado para gestionar el sistema de rutas
 * @param routesConfig Configuración de rutas opcional (por defecto se usa la configuración estándar)
 */
export const useRouter = (routesConfig: RoutesComponentConfig = defaultRoutesConfig) => {
  const [currentRoute, setCurrentRoute] = useAtom(currentRouteAtom);
  const [, setRoutesConfig] = useAtom(routesConfigAtom);

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

  // Función auxiliar para convertir nombre de ruta a path si es necesario
  const getPathFromRouteNameOrPath = (pathOrRouteName: string): string => {
    let path = pathOrRouteName;

    // Verificamos si es un nombre de ruta en la configuración
    if (routesConfig.routes && pathOrRouteName in routesConfig.routes) {
      // Si es una ruta VTEX predefinida, usamos el mapa de rutas
      const isVtexRoute = Object.keys(DEFAULT_ROUTE_PATHS).includes(pathOrRouteName);

      if (isVtexRoute) {
        const vtexRoute = pathOrRouteName as VtexRoute;
        // Usamos los basePaths personalizados o los valores por defecto
        path = DEFAULT_ROUTE_PATHS[vtexRoute];
      }
    }

    return path;
  };

  return {
    currentRoute,
    navigateTo,
    clearCache: clearComponentCache,
    // Verifica si una ruta está activa por nombre o path
    isActive: (pathOrRouteName: string) => {
      if (currentRoute) {
        // Si es un nombre de ruta, comparamos con el nombre
        if (currentRoute.name === pathOrRouteName) {
          return true;
        }
        // Si es un path, comparamos con el path
        return currentRoute.path === pathOrRouteName;
      }
      return false;
    },
    // Métodos adicionales para trabajar con elementos específicos
    clearElementCache: (pathOrRouteName: string, elementId: string) => {
      const path = getPathFromRouteNameOrPath(pathOrRouteName);
      clearComponentCache(path, elementId);
    },
    // Método para recargar un elemento específico de una ruta
    reloadElement: (pathOrRouteName: string, elementId: string) => {
      const path = getPathFromRouteNameOrPath(pathOrRouteName);

      clearComponentCache(path, elementId);

      if (currentRoute?.path === path || currentRoute?.name === pathOrRouteName) {
        // Si estamos en la misma ruta, forzamos un re-renderizado
        window.dispatchEvent(new Event('popstate'));
      } else {
        // Si no, navegamos a la ruta
        navigateTo(pathOrRouteName, { forceRerender: true, elementId });
      }
    },
  };
};
