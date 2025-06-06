import { productos, agregarNotificacion } from "./data";
import type { Producto } from "./interfaces";
import { renderNotificaciones } from "./renderNotificaciones";

export function renderFormProducto(container: HTMLElement) {
  const form = document.createElement("form");

  form.innerHTML = `
    <input type="text" id="nombre" placeholder="Nombre del producto">
    <input type="number" id="precio" placeholder="Precio">
    <input type="number" id="stock" placeholder="Stock">
    <div id="error" class="error"></div>
    <button type="submit">Agregar</button>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreInput = form.querySelector<HTMLInputElement>("#nombre")!;
    const precioInput = form.querySelector<HTMLInputElement>("#precio")!;
    const stockInput = form.querySelector<HTMLInputElement>("#stock")!;
    const errorDiv = form.querySelector<HTMLDivElement>("#error")!;

    if (!nombreInput.value || nombreInput.value.length < 3) {
      errorDiv.textContent = "El nombre debe tener al menos 3 caracteres.";
      return;
    }

    const precio = Number(precioInput.value);
    if (isNaN(precio) || precio <= 0) {
      errorDiv.textContent = "El precio debe ser mayor a 0.";
      return;
    }

    const stock = Number(stockInput.value);
    if (isNaN(stock) || stock < 0) {
      errorDiv.textContent = "El stock debe ser 0 o mayor.";
      return;
    }

    errorDiv.textContent = "";

    const nuevoProducto: Producto = {
      id: productos.length + 1,
      nombre: nombreInput.value,
      precio,
      stock,
    };

    productos.push(nuevoProducto);

    // Notificación con detalles
    const mensaje = `✅ Producto agregado: ${nuevoProducto.nombre} | Precio: $${nuevoProducto.precio} | Stock: ${nuevoProducto.stock}`;
    agregarNotificacion(mensaje);
    renderNotificaciones();

    nombreInput.value = "";
    precioInput.value = "";
    stockInput.value = "";
  });

  container.appendChild(form);
}
