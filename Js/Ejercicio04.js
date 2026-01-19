//Estilización de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 4: Objetos", style_console);

console.warn("1. Propiedades de un Objeto (Variables Independientes)");

let propertyId = 1;
let propertyName = "Departamento En Washington";
let propertyDescription = "Departamento en el Centro de Washington con 2 recámaras, 1 baño, estacionamiento privado y acceso controlado.";
let propertyType = "D";
let propertyIsSaleable = false; 
let propertyIsRented = true; 
let propertyPrice = 10000000;
let propertyLat = 20.240508;
let propertyLong = -97.952881;
let propertyToken = Symbol("D-1224514-washington-EU-A");
let propertyIncludedServices = ["Agua", "Luz", "Internet", "Gas"]; 
let propertyImage = null;
let propertyOwnerID = 1254;
let propertyStatus = "Disponible";

console.log(`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripción: ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicación: Latitud: ${propertyLat} Longitud: ${propertyLong} 
    Servicios incluidos: ${propertyIncludedServices.join(", ")} 
    En renta: ${propertyIsRented} 
    En venta: ${propertyIsSaleable}
    Token: ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}`);

    // 2. Declaracion de Un Objeto 
    /* Para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades irán entre {} y separadas por coma en el order clave : valor */
console.warn("2.1 Declaración de un Objeto (Washington)");

const property2 = {
    id: 1, 
    name: "Departamento en Washington", 
    description: "Departamento en el Centro de Washington con 2 recámaras, 1 baño, estacionamiento privado y acceso controlado, ubicado en el corazón de la zona financiera, ideal para profesionistas.",
    type: "D",
    price: 10000000,
    isRentable: true, 
    isSaleable: false,
    includedServices: ["Agua", "Luz", "Internet", "Gas"], 
    lat: 20.240508,
    long: -97.952881,
    status: "Disponible",
    token: Symbol("D-1224514-washington-EU-A"),
    ownerID: 1254
};

// Verifiquemos que se creó correctamente
console.log("Objeto Property 2:", property2);

// Ejemplo de uso:
console.log(`La propiedad de ${property2.name} incluye ${property2.includedServices.length} servicios.`);

//Impresion del objeto  en formato de tabla
console.table(property2);