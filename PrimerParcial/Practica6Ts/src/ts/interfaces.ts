export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

export interface Establecimiento {
  id: number;
  nombre: string;
  direccion: string;
}

export interface Notificacion {
  id: number;
  mensaje: string;
  leida: boolean;
}
