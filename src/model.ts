export const actualizarPuntosTotales = (nuevosPuntos: number) => {
    partida.puntuacion = nuevosPuntos;
};

export type EstadoPartida = 'Has ganado' | 'Has perdido' | 'Sigues jugando';

interface Partida {
    puntuacion: number;
}
export const partida:Partida = { 
    puntuacion:0
};

