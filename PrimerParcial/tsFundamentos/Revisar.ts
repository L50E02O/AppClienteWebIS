// 📌 1. Definición de Tipos Básicos
let idProducto: number = 10;
let nombreProducto: string = "Piña";
let precioProducto: number = 2.5;
let disponible: boolean = true;
let descripcionProducto: string = "Fruta tropical dulce";

// 📌 2. Creación de Interfaces con readonly, optional y union types
interface Cliente {
  readonly id: number;
  nombre: string;
  email: string;
  activo?: boolean;
}

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
}

interface Pedido {
  id: number;
  cliente: Cliente;
  productos: Producto[];
  total: number | string;
}

// 📌 3. Definición de Clases
class ClienteClass implements Cliente {
  readonly id: number;
  nombre: string;
  email: string;
  activo?: boolean;

  constructor(id: number, nombre: string, email: string, activo?: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.activo = activo;
  }

  // Método: mostrar estado de cuenta del cliente
  estadoCuenta(): void {
    console.log(`${this.nombre} (${this.email}) está ${this.activo ? "activo" : "inactivo"}`);
  }
}

class ProductoClass implements Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;

  constructor(id: number, nombre: string, descripcion: string, precio: number, stock: number) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
  }

  // Método: reducir stock si hay suficiente
  vender(cantidad: number): void {
    if (this.stock >= cantidad) {
      this.stock -= cantidad;
      console.log(`Venta exitosa de ${cantidad} ${this.nombre}. Stock restante: ${this.stock}`);
    } else {
      console.log(`Stock insuficiente de ${this.nombre}`);
    }
  }
}

class PedidoClass implements Pedido {
  id: number;
  cliente: Cliente;
  productos: Producto[];
  total: number | string;

  constructor(id: number, cliente: Cliente, productos: Producto[], total: number | string) {
    this.id = id;
    this.cliente = cliente;
    this.productos = productos;
    this.total = total;
  }

  // Método: mostrar resumen del pedido
  resumenPedido(): void {
    console.log(`Pedido #${this.id} para ${this.cliente.nombre}`);
    this.productos.forEach(p => {
      console.log(`- ${p.nombre} | $${p.precio}`);
    });
    console.log(`Total: $${this.total}`);
  }
}

// 📌 4. Arreglos Tipados
const clientes: Cliente[] = [
  { id: 1, nombre: "Ana", email: "ana@mail.com", activo: true },
  { id: 2, nombre: "Luis", email: "luis@mail.com", activo: true },
  { id: 3, nombre: "Pedro", email: "pedro@mail.com" },
  { id: 4, nombre: "Carla", email: "carla@mail.com", activo: true },
  { id: 5, nombre: "Lucía", email: "lucia@mail.com" },
  { id: 6, nombre: "Carlos", email: "carlos@mail.com" },
  { id: 7, nombre: "Marta", email: "marta@mail.com", activo: true },
  { id: 8, nombre: "Mario", email: "mario@mail.com" },
  { id: 9, nombre: "Jorge", email: "jorge@mail.com", activo: false },
  { id: 10, nombre: "Elena", email: "elena@mail.com" }
];

const productos: Producto[] = [
  { id: 1, nombre: "Manzana", descripcion: "Fruta roja", precio: 1.2, stock: 100 },
  { id: 2, nombre: "Banana", descripcion: "Fruta amarilla", precio: 0.8, stock: 150 },
  { id: 3, nombre: "Piña", descripcion: "Fruta tropical", precio: 2.5, stock: 50 },
  { id: 4, nombre: "Uva", descripcion: "Fruta morada", precio: 3.0, stock: 80 },
  { id: 5, nombre: "Melón", descripcion: "Fruta dulce", precio: 2.0, stock: 60 },
  { id: 6, nombre: "Naranja", descripcion: "Fruta cítrica", precio: 1.5, stock: 120 },
  { id: 7, nombre: "Sandía", descripcion: "Fruta grande", precio: 3.5, stock: 30 },
  { id: 8, nombre: "Limón", descripcion: "Fruta ácida", precio: 0.5, stock: 200 },
  { id: 9, nombre: "Mango", descripcion: "Fruta tropical", precio: 2.2, stock: 40 },
  { id: 10, nombre: "Pera", descripcion: "Fruta verde", precio: 1.7, stock: 90 }
];

// 📌 5. Funciones Tipadas

// Mostrar todos los clientes
function mostrarClientes(arr: Cliente[]): void {
  arr.forEach(c => console.log(c));
}

// Filtrar productos disponibles con stock mayor a 50
function productosDisponibles(arr: Producto[]): Producto[] {
  return arr.filter(p => p.stock > 50);
}

// Agregar y eliminar clientes
function agregarCliente(arr: Cliente[], nuevoCliente: Cliente): void {
  arr.push(nuevoCliente);
}

function eliminarCliente(arr: Cliente[], id: number): void {
  for (const cliente of arr) {
    if (cliente.id === id) {
      const pos = arr.indexOf(cliente);
      arr.splice(pos, 1);
      break;
    }
  }
}

// 📌 7. Uso de map()
const nombresProductos = productos.map(p => p.nombre.toUpperCase());
console.log("\nNombres de productos en mayúsculas:", nombresProductos);

// 📌 8. Uso de filter()
const stockAlto = productos.filter(p => p.stock > 100);
console.log("\nProductos con stock mayor a 100:", stockAlto);

// 📌 9. Uso de reduce()
const totalValorInventario = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
console.log("\nValor total del inventario:", totalValorInventario);

// 📌 10. Simular relaciones entre entidades
const cliente1 = new ClienteClass(1, "Lucía", "lucia@mail.com", true);
const pedido1 = new PedidoClass(1, cliente1, [productos[0], productos[3], productos[5]], 1.2 + 3 + 1.5);

// 📌 11. Simular operación de negocio
pedido1.resumenPedido();

// 📌 12. Imprimir estructuras anidadas
console.log("\nPedido completo:", pedido1);
