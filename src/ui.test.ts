// src/ui.test.ts
import { describe, it, expect } from 'vitest';
import { determinarEstadoJuego } from './logica';
import type { EstadoPartida } from './model';

describe('determinarEstadoJuego', () => {
  it('Devuelve "Has ganado" si la puntuación es 7.5', () => {
    const esperado: EstadoPartida = 'Has ganado';
    const actual = determinarEstadoJuego(7.5);
    expect(actual).toBe(esperado);
  });

  it('Devuelve "Has perdido" si la puntuación es mayor a 7.5', () => {
    const esperado: EstadoPartida = 'Has perdido';
    const actual = determinarEstadoJuego(8);
    expect(actual).toBe(esperado);
  });

  it('Devuelve "Sigues jugando" si la puntuación es menor a 7.5', () => {
    const esperado: EstadoPartida = 'Sigues jugando';
    const actual = determinarEstadoJuego(6);
    expect(actual).toBe(esperado);
  });
});
