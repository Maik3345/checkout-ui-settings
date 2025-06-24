import { afterEach, vi } from 'vitest';

// Mock del objeto global
window.requestAnimationFrame = (callback: FrameRequestCallback): number => {
  callback(0);
  return 0;
};

// Para los tests que usan setTimeout
vi.mock('global', () => ({
  setTimeout: (callback: () => void) => {
    callback();
    return 0;
  },
}));

// Limpiar mocks después de cada prueba
afterEach(() => {
  vi.restoreAllMocks();
});
