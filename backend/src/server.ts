import { createApp } from './app';

/**
 * Punto de entrada del proceso. Levanta el servidor HTTP.
 * La configuración (puerto, etc.) se centralizará en `src/config/`.
 */
const PORT = Number(process.env.PORT ?? 3000);

const app = createApp();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`MiClub backend escuchando en http://localhost:${PORT}`);
});
