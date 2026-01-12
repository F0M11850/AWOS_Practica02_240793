// =========================================================================================
// CONFIGURACIÓN DE CONSOLA
// =========================================================================================
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;
const style_ejercicio = "background: #1abc9c; color:white; border-radius: 6px; padding:4px; font-weight:bold; font-size:1.0rem";

// =========================================================================================
// FUNCIONES ÚTILES
// =========================================================================================
function calcularEdad(fechaNacimiento) {
    const fechaHoy = new Date();
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    const diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    return Math.floor(diasVividos / 365.25);
}

// =========================================================================================
// EJERCICIO 01: DECLARACIÓN DE VARIABLES
// =========================================================================================
console.log("%c1.- Ejercicio 01: Declaración de Variables", style_console);

// --- VAR ---
console.warn("Declaración de Variables Utilizando VAR");
var miNombre = "Ivan";
var miApellido = "Flores";
console.log(`Mi nombre es: ${miNombre} ${miApellido}`);

// --- CONST ---
console.warn("Declaración de Variables Utilizando CONST");
const miMatricula = "240793";
console.log(`Mi matrícula es: ${miMatricula}`);

// --- LET ---
console.warn("Declaración de Variables Utilizando LET");
let miFechaNacimiento = new Date(2006, 4, 23); // 23 de mayo de 2006
let edadFinal = calcularEdad(miFechaNacimiento);
console.log(`Mi edad calculada es: ${edadFinal} años.`);

// --- SCOPE ---
let esMayorDeEdad = edadFinal >= 18;
let esMenorDeEdad = !esMayorDeEdad;
console.log(`esMayorDeEdad = ${esMayorDeEdad}`);
console.log(`esMenorDeEdad = ${esMenorDeEdad}`);

// --- INTERPOLACIÓN ---
console.warn("-- Interpolación de Datos --");
console.log(
    `Hola, ${miNombre} ${miApellido}, tienes ${edadFinal} años y eres ` +
    `${esMayorDeEdad ? "mayor" : "menor"} de edad.`
);