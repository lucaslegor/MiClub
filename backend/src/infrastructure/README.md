# infrastructure

Adaptadores tecnológicos, **no reglas de negocio**. Aquí vive el detalle de "cómo"
se habla con el mundo exterior; el "qué" del dominio vive en `modules/`.

- `database/` — cliente Prisma / conexión a Postgres, helpers de tenant/RLS.
- `payments/` — integración con proveedores de pago. Mercado Pago será el primero
  (ej. `payments/mercado-pago/`). El dominio no depende del SDK: depende de una
  interfaz definida acá.
- `email/` — envío de correos.
- `storage/` — almacenamiento de archivos.
- `jobs/` — tareas programadas / en background (sin Redis, BullMQ ni Kafka).

Nada implementado todavía.
