import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1> Hola Mundo </h1>
`

interface ICliente{
  id: number;
  cedula: string;
  nombre: string;
  facturas?:IFactura[]; // ? el cliente prodia o no tener factua
}

interface IFactura{
  id: number;
  codigo:string;
  cliente: ICliente;
  total:number;
  fecha: Date;
  detalles: IDetalleFactura[];
}

interface IProducto{
  id:number;
  nombre: string;
  precio: number;
  stock: number;
  detalles?: IDetalleFactura[];
}

interface IDetalleFactura{
  id: number;
  factura?: IFactura;
  producto: IProducto;
  cantidad: number;
  precio: number;
}

const factura1: IFactura = {
  id: 1,
  codigo: "F001",
  cliente: {
    id: 1,
    cedula: "1234567890",
    nombre: "Juan Perez"
  },
  total: 100,
  fecha: new Date(),
  detalles: [
    {
      id: 1,
      producto: {
        id: 1,
        nombre: "Producto A",
        precio: 50,
        stock: 10
      },
      cantidad: 2,
      precio: 50
    },
    {
      id: 2,
      producto: {
        id: 2,
        nombre: "Porducto B",
        precio: 40,
        stock: 42,
      },
      cantidad: 4,
      precio: 100
    }
  ]
}

// Funcion dada por el docente
function generarFacturaHTML(factura: IFactura): string{
  let html: string = ``;
  html += `<h1> ${factura.codigo} </h1>`;
  html += `<p> Cliente: ${factura.cliente.nombre} </p> `;
  html += `<p> Total: ${factura.total} </p>`;
  html += `<p> Fecha: ${factura.fecha}</p>`;
  html += `<p> Detalles: </p>`;
  factura.detalles?.forEach(detalle => {
    html += `<p> ${detalle.producto.nombre} </p>`;
  });
  return html;
}

// Generar la factura en HTML usando Map y Join
// Ventajas
// - Muy legible.
// - Perfecta para cuando quieres renderizar listas en HTML desde arrays.
// - Evita concatenaciones sueltas.
// esta mal 
function generarFacturaHTML_MapJoin(factura: IFactura): string {
  const detallesHTML = factura.detalles
    .map(detalle => `<li>${detalle.producto.nombre} — Cantidad: ${detalle.cantidad}, Precio: ${detalle.precio}</li>`)
    .join('');

  return `
    <h1>${factura.codigo}</h1>
    <p><strong>Cliente:</strong> ${factura.cliente.nombre}</p>
    <p><strong>Total:</strong> $${factura.total}</p>
    <p><strong>Fecha:</strong> ${factura.fecha.toLocaleString()}</p>
    <p><strong>Detalles:</strong></p>
    <ul>
      ${detallesHTML}
    </ul>
  `;
}

// Genera la factura usando reduce 
// Ventajas
// - Ideal si quieres procesar y acumular valores durante el recorrido.
// - Útil si necesitas realizar algún cálculo o control mientras acumulas HTML.
function generarFacturaHTML_Reduce(factura: IFactura): string {
  const detallesHTML = factura.detalles.reduce((html, detalle) => {
    return html + `<li>${detalle.producto.nombre} — Cantidad: ${detalle.cantidad}, Precio: ${detalle.precio}</li>`;
  }, "");

  return `
    <h1>${factura.codigo}</h1>
    <p><strong>Cliente:</strong> ${factura.cliente.nombre}</p>
    <p><strong>Total:</strong> $${factura.total}</p>
    <p><strong>Fecha:</strong> ${factura.fecha.toLocaleString()}</p>
    <p><strong>Detalles:</strong></p>
    <ul>
      ${detallesHTML}
    </ul>
  `;
}

// Genera la factura en HTML usando createElement
// Ventajas
// - Evita riesgos de inyección de HTML.
// - Permite crear nodos reales y añadirlos al DOM de forma controlada.
// - Ideal para crear estructuras complejas o dinámicas.
function generarFacturaHTML_CreateElement(factura: IFactura): string {
  const container = document.createElement("div");

  const titulo = document.createElement("h1");
  titulo.textContent = factura.codigo;
  container.appendChild(titulo);

  const cliente = document.createElement("p");
  cliente.innerHTML = `<strong>Cliente:</strong> ${factura.cliente.nombre}`;
  container.appendChild(cliente);

  const total = document.createElement("p");
  total.innerHTML = `<strong>Total:</strong> $${factura.total}`;
  container.appendChild(total);

  const fecha = document.createElement("p");
  fecha.innerHTML = `<strong>Fecha:</strong> ${factura.fecha.toLocaleString()}`;
  container.appendChild(fecha);

  const detallesTitulo = document.createElement("p");
  detallesTitulo.textContent = "Detalles:";
  container.appendChild(detallesTitulo);

  const listaDetalles = document.createElement("ul");
  factura.detalles.forEach(detalle => {
    const item = document.createElement("li");
    item.textContent = `${detalle.producto.nombre} — Cantidad: ${detalle.cantidad}, Precio: ${detalle.precio}`;
    listaDetalles.appendChild(item);
  });
  container.appendChild(listaDetalles);

  return container.innerHTML;
}



document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${generarFacturaHTML(factura1)}
<hr>
${generarFacturaHTML_MapJoin(factura1)}
<hr>
${generarFacturaHTML_Reduce(factura1)}
<hr>
${generarFacturaHTML_CreateElement(factura1)}
`;