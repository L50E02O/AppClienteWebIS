import { establecimientos } from "./data";

export function renderEstablecimientos(container: HTMLElement) {
  container.innerHTML = "<h2>Establecimientos</h2>";

  establecimientos.forEach((establecimiento) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div>
        <strong>${establecimiento.nombre}</strong><br>
        <small>${establecimiento.direccion}</small>
      </div>
      <button data-id="${establecimiento.id}">Eliminar</button>
    `;

    card.querySelector("button")?.addEventListener("click", () => {
      const index = establecimientos.findIndex((e) => e.id === establecimiento.id);
      if (index > -1) {
        establecimientos.splice(index, 1);
        renderEstablecimientos(container);
      }
    });

    container.appendChild(card);
  });
}
