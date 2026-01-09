// Personalización de salidas a Consola
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";

const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;

console.log("%c1.- Ejercicio 01: Declaración de Variables ", style_console);

// =========================================================================================
// 1. Declaración de Variables utilizando el prefijo VAR
// =========================================================================================
console.warn("Declaracion de Variables Utilizando el Prefijo var");
var miNombre = "Ivan";
var miApellido = "Flores";
console.log("Mi nombre es: " + miNombre + " " + miApellido);

// =========================================================================================
// 2. Declaración de Variables utilizando el prefijo CONST
// =========================================================================================
console.warn("Declaracion de Variables Utilizando el Prefijo CONST");
const miMatricula = "240793";
console.log("Mi matricula es: " + miMatricula);

// =========================================================================================
// 3. Declaración de Variables utilizando el prefijo LET
// =========================================================================================
console.warn("Declaracion de Variables Utilizando el Prefijo LET");

var miFechaNacimiento = new Date(2006, 4, 23); 

function calcularEdad(fechaNacimiento) {
    let fechaHoy = new Date();
    let milisegundosPorDia = 1000 * 60 * 60 * 24;
    let diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    let edad = Math.floor(diasVividos / 365.25); 
    return edad;
}

let edadFinal = calcularEdad(miFechaNacimiento);
console.log("Mi edad calculada es: " + edadFinal + " años.");

// --- CORRECCIÓN DE ALCANCE (SCOPE) ---
var esMayorDeEdad; 
let esMenorDeEdad; 

if (edadFinal >= 18) {
    esMayorDeEdad = true;
    esMenorDeEdad = false;
} else {
    esMayorDeEdad = false;
    esMenorDeEdad = true;
}

console.log("En base a tu edad puedo deducir que el valor de esMayorDeEdad es: " 
    + esMayorDeEdad + " y el valor de esMenorDeEdad es: " + esMenorDeEdad + ".");


// =========================================================================================
// 4. Interpolación de Datos
// =========================================================================================
/* Para interpolar datos en JavaScript se utilizan los backticks (`) 
   y la sintaxis ${variable}.
*/

console.warn("-- Interpolación de Datos --");

// Se corrigió 'misApellidos' por 'miApellido' y 'miEdad' por 'edadFinal'
console.log(`Hola, ${miNombre} ${miApellido} sé que tienes: ${edadFinal} años; por lo que eres: ${esMayorDeEdad ? 'mayor de edad' : 'menor de edad'}.`);    