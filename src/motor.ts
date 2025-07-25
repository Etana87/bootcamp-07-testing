import { partida } from "./model";
import { EstadoPartida } from '../src/model';

export const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
};

export const generarNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    }
    return numeroAleatorio;
};

export const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
            return './src/assets/images/1_carta.jpg';
        case 2:
            return './src/assets/images/2_carta.jpg';
        case 3:
            return './src/assets/images/3_carta.jpg';
        case 4:
            return './src/assets/images/4_carta.jpg';
        case 5:
            return './src/assets/images/5_carta.jpg';
        case 6:
            return './src/assets/images/6_carta.jpg';
        case 7:
            return './src/assets/images/7_carta.jpg';
        case 10:
            return './src/assets/images/10_carta.jpg';
        case 11:
            return './src/assets/images/11_carta.jpg';
        case 12:
            return './src/assets/images/12_carta.jpg';
        default:
            return './src/assets/images/0_carta.jpg';
    }
};

export const obtenerPuntosCarta = (carta: number) => {
    if (carta > 7) {
        return 0.5;
    }
    return carta;
};

export const sumarPuntos = (punto: number) => {
    return partida.puntuacion + punto;
};

export function determinarEstadoJuego(puntuacion: number): EstadoPartida {
  if (puntuacion > 7.5) return 'Has perdido';
  if (puntuacion === 7.5) return 'Has ganado';
  return 'Sigues jugando';
}