# shared

Solo elementos **realmente transversales** a varios módulos. No es un cajón de
sastre: si algo pertenece a un dominio, va dentro de su módulo en `modules/`.

- `errors/` — clases de error y manejo centralizado.
- `validation/` — helpers de validación (Zod) compartidos.
- `types/` — tipos comunes a toda la app.
- `constants/` — constantes globales.
- `utils/` — utilidades puras y reutilizables.

Nada implementado todavía.
