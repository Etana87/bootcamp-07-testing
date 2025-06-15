export function determinarEstadoJuego(puntuacion: number): 'Has ganado' | 'Has perdido' | 'Estás jugando' {
  if (puntuacion > 7.5) return 'Has perdido';
  if (puntuacion === 7.5) return 'Has ganado';
  return 'Estás jugando';
}