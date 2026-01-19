{
// =========================================================================================
// EJERCICIO 02: TIPOS DE DATOS
// =========================================================================================

const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;
const style_ejercicio = "background: #1abc9c; color:white; border-radius: 6px; padding:4px; font-weight:bold; font-size:1.0rem";

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

// =========================================================================================
// 4.- STRING
// =========================================================================================

var fullnameOwner = "María Fernanda López";
let nameProperty = "Departamento Ejecutivo en Zona Financiera";
let descriptionProperty = "Departamento moderno de 2 recámaras, 1 baño, estacionamiento privado y acceso controlado, ubicado en el corazón de la zona financiera, ideal para profesionistas.";

var estatus = "En Renta";
let typeProperty = "D";
var addressProperty = "Av. Reforma 250, Ciudad de México";

/* Los tipos de datos STRING representan valores cualitativos dentro del sistema,
permitiendo modelar información descriptiva sin una longitud fija,
compuesta por caracteres alfanuméricos y símbolos especiales.
*/

console.warn("4.- STRING (CADENA DE CARACTERES, PALABRAS)");

console.log(`El usuario: ${fullnameOwner}, está ofertando la propiedad: ${nameProperty}
que se describe como: ${descriptionProperty}
actualmente se encuentra en estatus: ${estatus} y corresponde al tipo: ${typeProperty}.`);

console.log(`Las variables declaradas corresponden al tipo de dato:
fullnameOwner : ${typeof (fullnameOwner)}
nameProperty : ${typeof (nameProperty)}
descriptionProperty : ${typeof (descriptionProperty)}
estatus : ${typeof (estatus)}
typeProperty : ${typeof (typeProperty)}
addressProperty : ${typeof (addressProperty)}
`);

//Existen metodos para manipular los Datos Topos String como :
//El metodo ToUpperCase() y ToLowerCase()
console.log(`fullnameOwner en Mayusculas: ${fullnameOwner.toUpperCase()}`);
console.log(`fullnameOwner en Minusculas: ${fullnameOwner.toLowerCase()}`);

//Tambien Existe la Propiedad que cuenta el numero de caracteres
console.log(`fullnameOwner tiene ${fullnameOwner.length} caracteres`);

// tenemos un metodo que nos permite hacer subcadenas o extraer la particion de la palabra en base a su posisionamiento
console.log(`fullnameOwner: ${fullnameOwner} con la particion de la palabra "Fernanda" es: ${fullnameOwner.substring(7, 13)}`);

//otra Funcion util es aquella que permite remplazar letras o palabras dentro del texto denominada Replace
console.log(`fullnameOwner: ${fullnameOwner} con la remplazada de la palabra "Fernanda" por la palabra "Adrian" es: ${fullnameOwner.replace("Fernanda", "Adrian")}`);

// o Remplazo de todas las occurrecias de una letra o palabra 
console.log(`fullnameOwner: ${fullnameOwner} con la remplazada de todas las letras "a" por la palabra "A" es: ${fullnameOwner.replace(/a/g, "A")}`);

// 5. BIGINT (Entero De Altra Precision , Alta amplitud)
console.warn("5.- BIGINT (Entero De Altra Precision , Alta amplitud)");

let NumeroGrande1 = 12345678901234567890n;
let NumeroGrande2 = 123456789012345678901234567890n;
let NumeroGrande3 = 1234567890123456789012345678901234567890n;
let NumeroGrande4 = 12345678901234567890123456789012345678901234567890n; 

//Imprimimos los valores de las variables y observamos que pasa
console.log(` los valores de las variables son:
NumeroGrande1 : valor = ${NumeroGrande1} tipo = ${typeof NumeroGrande1}
NumeroGrande2 : valor = ${NumeroGrande2} tipo = ${typeof NumeroGrande2}
NumeroGrande3 : valor = ${NumeroGrande3} tipo = ${typeof NumeroGrande3}
NumeroGrande4 : valor = ${NumeroGrande4} tipo = ${typeof NumeroGrande4}
`);

// Para No perder Presision se debe utilizar el tipo de dato BigInt
console.log(` los valores de las variables son:
NumeroGrande1 : valor = ${BigInt(NumeroGrande1)} tipo = ${typeof BigInt(NumeroGrande1)}
NumeroGrande2 : valor = ${BigInt(NumeroGrande2)} tipo = ${typeof BigInt(NumeroGrande2)}
NumeroGrande3 : valor = ${BigInt(NumeroGrande3)} tipo = ${typeof BigInt(NumeroGrande3)}
NumeroGrande4 : valor = ${BigInt(NumeroGrande4)} tipo = ${typeof BigInt(NumeroGrande4)}
`);

// =========================================================================================
// 6.- SYMBOL
// =========================================================================================

// 6. SYMBOL
console.warn("6.- SYMBOL");
const numero1 = 3;
const numero2 = 3.0;
const numero3 = "3"; 
const numero4 = "3.0";
const numero5 =  Symbol(3);
const numero6 =  Symbol(3.0);
const numero7 =  Symbol("3");
const numero8 =  Symbol("3.0");
const numero9 =  Symbol(3);

console.log(`imprimiendo los Valores y tipos de dato:
    numero1 : valor = ${numero1} tipo = ${typeof numero1}
    numero2 : valor = ${numero2} tipo = ${typeof numero2}
    numero3 : valor = ${numero3} tipo = ${typeof numero3}
    numero4 : valor = ${numero4} tipo = ${typeof numero4}
    numero5 : valor = ${numero5.toString()} tipo = ${typeof numero5}
    numero6 : valor = ${numero6.description} tipo = ${typeof numero6}
    numero7 : valor = ${numero7.description} tipo = ${typeof numero7}
    numero8 : valor = ${numero8.description} tipo = ${typeof numero8}
`);

/* Realizando un par de validaciones */
    if(numero1 == numero2)
        console.log("Se comparó el valor de numero1 y numero2 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero2 evaluando que son diferentes en valor");

    if(numero1 == numero3)
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son diferentes en valor");

    if(numero1 === numero3)
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero3 evaluando que son iguales en valor pero diferente tipo de dato");

    if(numero1 == numero4)
        console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero4 evaluando que son iguales en valor pero diferente tipo de dato");

    if(numero1 == numero5)
        console.log("Se comparó el valor de numero1 y numero5 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero1 y numero5 evaluando que son diferentes en valor ");

    if(numero5 == numero9)
        console.log("Se comparó el valor de numero5 y numero9 evaluando que son iguales en valor");
    else
        console.log("Se comparó el valor de numero5 y numero9 evaluando que son diferentes en valor pero diferente tipo de dato");


// =========================================================================================
// 7.- NULL (NULO)
// =========================================================================================
console.warn("7.- NULL (NULO)");

/* Este tipo de datos es similar a UNDEFINED, pero con la diferencia de que los usuarios o el sistema es 
cociente que se les asigno este valor */

let isPremiumUser;
let isUserLoged; 
var todayDate = new Date();
var lastLogin = todayDate;
let isNewUser; // El sistema sabe que es un usuario nuevo

console.log(`Las variables del usuario al INICIAR son:
    isPremiumUser, valor: ${isPremiumUser} | tipo = ${typeof (isPremiumUser)}
    isUserLoged, valor: ${isUserLoged} | tipo = ${typeof (isUserLoged)}
    isNewUser, valor: ${isNewUser} | tipo = ${typeof (isNewUser)}
`);
     
/* Durante la navegación del usuario en la plataforma en algún punto ingresa sus credenciales y se valida en base date */    
/* Simulando que las credenciales fueron correctas */

isUserLoged = true;
isPremiumUser = null; // Se asigna NULL intencionalmente porque sabemos que NO es premium

if(lastLogin == todayDate)
    isNewUser = true;
else
    isNewUser = false; 

console.log(`Las variables del usuario DESPUÉS DEL LOGIN son:
    isPremiumUser, valor: ${isPremiumUser} | tipo = ${typeof (isPremiumUser)}
    isUserLoged, valor: ${isUserLoged} | tipo = ${typeof (isUserLoged)}
    isNewUser, valor: ${isNewUser} | tipo = ${typeof (isNewUser)}
`);
}