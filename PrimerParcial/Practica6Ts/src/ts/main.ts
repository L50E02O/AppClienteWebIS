import { renderFormProducto } from "./formProducto";
import { renderEstablecimientos } from "./renderEstablecimientos";
import { renderNotificaciones } from "./renderNotificaciones";

const formContainer = document.getElementById("formProductoContainer")!;
const establecimientosContainer = document.getElementById("establecimientosContainer")!;

renderFormProducto(formContainer);
renderEstablecimientos(establecimientosContainer);
renderNotificaciones();
