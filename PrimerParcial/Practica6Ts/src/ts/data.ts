import type { Producto, Establecimiento } from "./interfaces";
import type { Notificacion } from "./interfaces";

export const productos: Producto[] = [
  { id: 1, nombre: "Laptop", precio: 1500, stock: 5 },
  { id: 2, nombre: "Smartphone", precio: 900, stock: 10 },
];

export const establecimientos: Establecimiento[] = [
  { id: 1, nombre: "Sucursal Norte", direccion: "Av. Central 123" },
  { id: 2, nombre: "Sucursal Sur", direccion: "Calle Falsa 456" },
];

export const notificaciones: Notificacion[] = [
  { id: 1, mensaje: "Nuevo producto disponible", leida: false },
];

export function agregarNotificacion(mensaje: string) {
  notificaciones.push({
    id: notificaciones.length + 1,
    mensaje,
    leida: false,
  });
}
