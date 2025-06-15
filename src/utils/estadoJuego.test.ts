import { describe, it, expect } from 'vitest'
import { determinarEstadoJuego } from './estadoJuego'

describe('Función determinarEstadoJuego', () => {
  it('Devuelve "Estás jugando" si la puntuación es menor que 7.5', () => {
    expect(determinarEstadoJuego(5.0)).toBe('Estás jugando')
    expect(determinarEstadoJuego(7.4)).toBe('Estás jugando')
  })

  it('Devuelve "Has ganado" si la puntuación es exactamente 7.5', () => {
    expect(determinarEstadoJuego(7.5)).toBe('Has ganado')
  })

  it('Devuelve "Has perdido" si la puntuación es mayor a 7.5', () => {
    expect(determinarEstadoJuego(7.6)).toBe('Has perdido')
    expect(determinarEstadoJuego(10)).toBe('Has perdido')
  })
})