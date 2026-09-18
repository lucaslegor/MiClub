import express, { type Express } from 'express';

/**
 * Construye la aplicación Express (sin rutas de negocio todavía).
 *
 * Los módulos de `src/modules/*` registrarán aquí sus routers más adelante.
 * No agregar lógica de dominio en este archivo.
 */
export function createApp(): Express {
  const app = express();

  app.use(express.json());

  // Healthcheck mínimo para verificar que el server levanta.
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  // TODO: registrar routers de módulos (auth, organizations, ...).

  return app;
}
