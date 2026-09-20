# Módulo: payments

Movimientos reales de dinero. Entidad principal: **Payment**.

Separar siempre Charge (deuda) de Payment (pago). Proveedor online inicial:
Mercado Pago, pero el dominio NO se acopla al SDK: la integración vive en
`infrastructure/payments/` (ej. MercadoPagoProvider).

No implementado todavía.
