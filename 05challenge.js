const { useSyncExternalStore } = require("react");

let nombre_tienda = 'portal de belleza';
const esclienteactivo = true;
let descuento = 0.20
let totalventas = 1000000
const comentariosextras = null;
const fechaderegistro = null;

const cliente = {
  nombreCompleto: "  GABRIELA SASTRE ",
  email: "gsastre221@gmail.com",
  tarjetaCredito: "4532890123456789"
  clienteactivo: true,

}

const productos = [" rubor ", "pestañina", "  pañitos humedos ","LABIAL", "BASE"];
 
const nombre = nombre_tienda.trim() .toUpperCase();
const nombre2 = cliente.nombreCompleto .trim();

let incluyeBrochas = carrito[0].toLowerCase().includes("laptop");

let codigoProducto = carrito[0].trim().replaceAll(" ", "-").toUpperCase();

console.log (nombre_tienda)

