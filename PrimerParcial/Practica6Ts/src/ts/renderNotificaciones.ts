import { notificaciones } from "./data";

export function renderNotificaciones() {
  const container = document.getElementById("notificacionesContainer")!;
  container.innerHTML = "<h2>Notificaciones</h2>";

  notificaciones.forEach((n) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = n.mensaje;
    container.appendChild(div);
  });
}
