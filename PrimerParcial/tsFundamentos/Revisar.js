// 📌 1. Definición de Tipos Básicos
var idProducto = 10;
var nombreProducto = "Piña";
var precioProducto = 2.5;
var disponible = true;
var descripcionProducto = "Fruta tropical dulce";
// 📌 3. Definición de Clases
var ClienteClass = /** @class */ (function () {
    function ClienteClass(id, nombre, email, activo) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.activo = activo;
    }
    // Método: mostrar estado de cuenta del cliente
    ClienteClass.prototype.estadoCuenta = function () {
        console.log("".concat(this.nombre, " (").concat(this.email, ") est\u00E1 ").concat(this.activo ? "activo" : "inactivo"));
    };
    return ClienteClass;
}());
var ProductoClass = /** @class */ (function () {
    function ProductoClass(id, nombre, descripcion, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
    // Método: reducir stock si hay suficiente
    ProductoClass.prototype.vender = function (cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log("Venta exitosa de ".concat(cantidad, " ").concat(this.nombre, ". Stock restante: ").concat(this.stock));
        }
        else {
            console.log("Stock insuficiente de ".concat(this.nombre));
        }
    };
    return ProductoClass;
}());
var PedidoClass = /** @class */ (function () {
    function PedidoClass(id, cliente, productos, total) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos;
        this.total = total;
    }
    // Método: mostrar resumen del pedido
    PedidoClass.prototype.resumenPedido = function () {
        console.log("Pedido #".concat(this.id, " para ").concat(this.cliente.nombre));
        this.productos.forEach(function (p) {
            console.log("- ".concat(p.nombre, " | $").concat(p.precio));
        });
        console.log("Total: $".concat(this.total));
    };
    return PedidoClass;
}());
// 📌 4. Arreglos Tipados
var clientes = [
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
var productos = [
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
function mostrarClientes(arr) {
    arr.forEach(function (c) { return console.log(c); });
}
// Filtrar productos disponibles con stock mayor a 50
function productosDisponibles(arr) {
    return arr.filter(function (p) { return p.stock > 50; });
}
// Agregar y eliminar clientes
function agregarCliente(arr, nuevoCliente) {
    arr.push(nuevoCliente);
}
function eliminarCliente(arr, id) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var cliente = arr_1[_i];
        if (cliente.id === id) {
            var pos = arr.indexOf(cliente);
            arr.splice(pos, 1);
            break;
        }
    }
}
// 📌 7. Uso de map()
var nombresProductos = productos.map(function (p) { return p.nombre.toUpperCase(); });
console.log("\nNombres de productos en mayúsculas:", nombresProductos);
// 📌 8. Uso de filter()
var stockAlto = productos.filter(function (p) { return p.stock > 100; });
console.log("\nProductos con stock mayor a 100:", stockAlto);
// 📌 9. Uso de reduce()
var totalValorInventario = productos.reduce(function (acc, p) { return acc + (p.precio * p.stock); }, 0);
console.log("\nValor total del inventario:", totalValorInventario);
// 📌 10. Simular relaciones entre entidades
var cliente1 = new ClienteClass(1, "Lucía", "lucia@mail.com", true);
var pedido1 = new PedidoClass(1, cliente1, [productos[0], productos[3], productos[5]], 1.2 + 3 + 1.5);
// 📌 11. Simular operación de negocio
pedido1.resumenPedido();
// 📌 12. Imprimir estructuras anidadas
console.log("\nPedido completo:", pedido1);
