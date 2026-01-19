console.log("%c3.- Ejercicio 03: Funciones", style_ejercicio);

// --- 1. FUNCIONES VACÍAS (VOID) ---
console.warn("1. Funciones Procedurales , Funciones Vacias (Void)"); 

function saludar() {
    console.log("Bienvenido al Sistema de Bienes Raíces");
}
saludar();

// --- 2. FUNCIONES CON PARÁMETROS ---
console.warn("2. Funciones Procedurales con parámetros de entrada");

function saludarUsuario(nombreUsuario, generoUsuario) {
    if (generoUsuario === "H") { 
        console.log(`Bienvenido ${nombreUsuario} al Sistema de Bienes Raíces`);
    } 
    else if (generoUsuario === "M") {
        console.log(`Bienvenida ${nombreUsuario} al Sistema de Bienes Raíces`);
    } 
    else {
        console.log(`Bienvenid@ ${nombreUsuario} al Sistema de Bienes Raíces`);
    }
}

// Test 1:
saludarUsuario("Marco", "H");
// Test 2:
saludarUsuario("Ana", "M");

// --- 3. FUNCIONES QUE RETORNAN VALOR (SIN PARÁMETROS) ---
console.warn("3. Funciones Que Retornan Un Dato, pero que no reciben parametros"); 

function fechaActual() {
    const fecha = new Date();
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX;
};

let hoy = fechaActual();
console.log(`Bienvenido al Sistema de Bienes Raíces. Hoy es ${hoy}`);

// --- 4. FUNCIONES QUE RETORNAN VALOR Y RECIBEN PARÁMETROS ---
console.warn("4. Funciones Que Retornan Un Dato y que reciben parametros");

function login(username, password) {
    let userValidation = false;
    
    // Validamos Usuario Y Contraseña correctos
    if(username === "admin" && password === "123456") {
        userValidation = true;
        console.log(">> Bienvenido Administrador");
    }
    else if (username === "admin" && password !== "123456") {
        console.log(">> Contraseña Incorrecta");
    }
    else if (username !== "admin" && password === "123456") {
        console.log(">> Usuario Incorrecto");
    }
    else {
        console.log(">> Usuario y Contraseña Incorrectos");
    }
    return userValidation;
}   

// Variable para guardar el resultado
var loginStatus; 

// Test 01: Usuario y Contraseña Correcta 
console.log("Test 1 - usuario: admin , password: 123456");
loginStatus = login("admin", "123456"); 
console.log(`${loginStatus ? 'El usuario admin se ha logeado satisfactoriamente' : 'Hubo un error en el login'}`); 

// Test 02: Contraseña Incorrecta
console.log("Test 2 - usuario: admin , password: 12345");
loginStatus = login("admin", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha logeado satisfactoriamente' : 'Hubo un error en el login'}`); 

// Test 03: Usuario Incorrecto 
console.log("Test 3 - usuario: user , password: 123456");
loginStatus = login("user", "123456");
console.log(`${loginStatus ? 'El usuario admin se ha logeado satisfactoriamente' : 'Hubo un error en el login'}`);

// Test 04: Todo Incorrecto
console.log("Test 4 - usuario: user , password: 12345");
loginStatus = login("user", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha logeado satisfactoriamente' : 'Hubo un error en el login'}`);


// --- 5. FUNCIONES ANÓNIMAS ---
console.warn("5. Funciones Anónimas");

// Declaramos la variable globalmente (RENOMBRADA PARA EVITAR CONFLICTO)
let lastLoginDate = new Date(); 

// Asignamos una función anónima a la variable
const isNewUser = function () {
    const hoy = new Date();
    // Comparamos Año, Mes y Día
    return (
        lastLoginDate.getFullYear() === hoy.getFullYear() &&
        lastLoginDate.getMonth() === hoy.getMonth() &&
        lastLoginDate.getDate() === hoy.getDate()
    );
};

console.log("--------------------------------------------------");
console.log("Test 1 - Fecha de último acceso es HOY");
console.log(`La fecha del último acceso es: ${lastLoginDate.toLocaleDateString()}`);
console.log(`El usuario logeado es: ${isNewUser() ? "Nuevo Usuario" : "Usuario Antiguo"}`);

console.log("--------------------------------------------------");

// Cambiamos la fecha para probar el caso "false"
lastLoginDate = new Date("2025/12/31"); 

console.log("Test 2 - Fecha de último acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLoginDate.toLocaleDateString()}`);
console.log(`El usuario logeado es: ${isNewUser() ? "Nuevo Usuario" : "Usuario Antiguo"}`);

// 6. Funciones Anónimas con Parámetros  (Versión Arrow o Lambda)

const suma = (a,b) => {
    let resultado = a + b;
    return resultado;

}

console.warn("6. Funciones Anónimas con Parámetros (Versión Arrow o Lambda)");
console.log(`La suma de 2 + 3 es: ${suma(2, 3)}`);

/* Cuando la función anónima tiene solo una línea de operación se puede usar una versión simplificada que no usa {} llaves , ni la palabra reservada (return) */

const multiplicar = (a,b) => a*b;
console.log(`El resultado de la suma de 15 + 125 es: ${multiplicar(15,125)}`);

//7. Funciones Callback (Regreso de Llamado)

console.warn("7. Funciones Callback (Regreso de Llamado)");

const recoverPassword = function(email, callback) 
{
     const recoveryCode= Math.floor(1000000 + Math.random()*900000)

     console.log(`
        =========================================================================
        Solicitud de recuperación recibida
        Correo del usuario sollicitante: ${email}
        Generando Código de Recuperación...
        Código de Seguridad Generado: ${recoveryCode}
        Enviando el correo al usuario...
        Correo Enviado a : ${email}, con el código de seguridad: 
        ${recoveryCode}
        ========================================================================
     `);
     // definiendo la respues del sistema

     const response ={
    status: "OK",
    message: "Código de recuperación enviado satisfactoriamente."
};

callback(response);
};

// Invocación de una función callback
recoverPassword("marco@gmail.com", 
    function(systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    });

