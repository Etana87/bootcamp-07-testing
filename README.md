# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

----------

1. Las funciones están implícitas aquí:
pedirCartaHandler y plantarseHandler.

2. Se crea el archivo utils/estadoJuego.ts para comprobar si se ha ganado o se ha perdido. Además crea el archivo utils/estadoJuego.test.ts para testear con describe, it, y expect. Se realizan 3 pruebas:
- Puntuación menor a 7.5.
- Puntuación de 7.5.
- Puntuación mayor a 7.5.

3. Se importa el módulo para testear la función desde ./estadoJuego
