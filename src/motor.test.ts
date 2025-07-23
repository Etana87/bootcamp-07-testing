// src/motor.test.ts
import { describe, it, expect } from 'vitest';
import { generarNumeroAleatorio, generarNumeroCarta, obtenerPuntosCarta } from './motor';

describe('generarNumeroAleatorio', () => {
  it('Devuelve un número entero entre 1 y 10 (inclusive)', () => {
    for (let i = 0; i < 100; i++) {
      const numero = generarNumeroAleatorio();
      expect(numero).toBeGreaterThanOrEqual(1);
      expect(numero).toBeLessThanOrEqual(10);
      expect(Number.isInteger(numero)).toBe(true);
    }
  });
});

describe('generarNumeroCarta', () => {
  it('Devuelve el mismo número si es menor o igual a 7', () => {
    expect(generarNumeroCarta(3)).toBe(3);
    expect(generarNumeroCarta(7)).toBe(7);
  });

  it('Devuelve el número + 2 si es mayor que 7', () => {
    expect(generarNumeroCarta(8)).toBe(10);
    expect(generarNumeroCarta(9)).toBe(11);
    expect(generarNumeroCarta(10)).toBe(12);
  });
});

describe('obtenerPuntosCarta', () => {
  it('Devuelve 0.5 si la carta es mayor que 7', () => {
    expect(obtenerPuntosCarta(10)).toBe(0.5);
    expect(obtenerPuntosCarta(11)).toBe(0.5);
    expect(obtenerPuntosCarta(12)).toBe(0.5);
  });

  it('Devuelve el valor numérico de la carta si es 7 o menor', () => {
    expect(obtenerPuntosCarta(1)).toBe(1);
    expect(obtenerPuntosCarta(5)).toBe(5);
    expect(obtenerPuntosCarta(7)).toBe(7);
  });
});
