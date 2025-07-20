import { EstadoPartida } from '../src/model';

export function determinarEstadoJuego(puntuacion: number): EstadoPartida {
  if (puntuacion > 7.5) return 'Has perdido';
  if (puntuacion === 7.5) return 'Has ganado';
  return 'Sigues jugando';
}