// =========================================================================================
// EJERCICIO 02: TIPOS DE DATOS
// =========================================================================================
console.log("%c2.- Ejercicio 02: Tipos de Datos", style_ejercicio);

// =========================================================================================
// 1.- UNDEFINED
// =========================================================================================
console.warn("1.- UNDEFINED (No Definido)");

let usuarioLogeado;
let rolUsuario;
let ultimoAcceso;

console.log(`usuarioLogeado = ${usuarioLogeado} | tipo = ${typeof usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario} | tipo = ${typeof rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso} | tipo = ${typeof ultimoAcceso}`);

usuarioLogeado = "MarcoRamirez99";
console.log(`usuarioLogeado = ${usuarioLogeado} | tipo = ${typeof usuarioLogeado}`);

// =========================================================================================
// 2.- BOOLEAN
// =========================================================================================
console.warn("2.- BOOLEAN (TRUE / FALSE)");

let hayUsuarioLogeado;

function validacionUsuarioLogeado() {
    console.log(`hayUsuarioLogeado = ${hayUsuarioLogeado}, tipo = ${typeof hayUsuarioLogeado}`);

    if (typeof hayUsuarioLogeado !== "boolean") {
        console.log("Dato inválido: se esperaba un valor boolean");
        return;
    }

    if (hayUsuarioLogeado) {
        console.log("La aplicación mostrará el menú del usuario");
    } else {
        console.log("La aplicación ocultará el menú del usuario");
    }
}

// Pruebas controladas
console.log("Test 1");
hayUsuarioLogeado = true;
validacionUsuarioLogeado();

console.log("Test 2");
hayUsuarioLogeado = false;
validacionUsuarioLogeado();

console.log("Test 3");
hayUsuarioLogeado = 52.5;
validacionUsuarioLogeado();

// =========================================================================================
// 3.- NUMBER
// =========================================================================================
console.warn("3.- NUMBER (Datos Numéricos)");

let userID_Owner = 225;
let priceProperty = 125000.5;
let latGPS = 20.240508;
let longGPS = -97.952881;
let altGPS = 1180;

console.log(`ID Usuario: ${userID_Owner} | tipo = ${typeof userID_Owner}`);
console.log(`Precio Propiedad: ${priceProperty} | tipo = ${typeof priceProperty}`);
console.log(`Latitud: ${latGPS} | tipo = ${typeof latGPS}`);
console.log(`Longitud: ${longGPS} | tipo = ${typeof longGPS}`);
console.log(`Altitud: ${altGPS} | tipo = ${typeof altGPS}`);
