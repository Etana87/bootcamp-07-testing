# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

----------

1. Función testeada:
determinarEstadoJuego.

2. Se crea el archivo /src/ui.test.ts para testear con describe, it, vi y expect. Se realizan 3 pruebas:
- Puntuación menor a 7.5.
- Puntuación de 7.5.
- Puntuación mayor a 7.5.

3. Se importa vitest para testear:
- import { determinarEstadoJuego } from './logica' 
- import type { EstadoPartida } from './model'
