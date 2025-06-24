import { beforeEach, describe, vi } from 'vitest';

// Mock necesario para jQuery
vi.stubGlobal('$', vi.fn());

// Mock para render de Preact
vi.mock('preact', () => {
  return {
    render: vi.fn(),
  };
});

// Mock para EmptyCart
vi.mock('../EmptyCart', () => ({
  EmptyCart: () => null,
}));

// Mock para Jotai
vi.mock('jotai', () => ({
  useAtom: vi.fn(() => ['', vi.fn()]),
  atom: vi.fn(),
}));

describe('renderCartContainer', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Mock para getElementById
    document.getElementById = vi.fn().mockReturnValue({});
  });
});
