// Estilización de la barra zona de pruebas
console.log("%cEjercicio 4: Objetos", style_console);

// ==========================================
// 1. Propiedades de un Objeto (Variables Independientes)
// ==========================================
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
let propertyOwnerID = 78204; // Ajustado para coincidir con el User1 (Sofía)
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

// ==========================================
// 2. Declaración de un Objeto (Washington)
// ==========================================
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
    ownerID: 78204 // ID de Sofía Martínez
};

console.log("Objeto Property 2:", property2);
console.table(property2);

// ==========================================
// 3. Lectura de Propiedades
// ==========================================
console.warn("3. Lectura de Propiedades de un Objeto");

console.log(`El usuario con el id: ${property2.ownerID} esta rentando la propiedad: ${property2.name} el cual se describe como: ${property2.description} por un precio de: ${property2.price} con los servicios incluidos: ${property2.includedServices.join(", ")} actualmente esta a la venta: ${property2.isSaleable} y en renta: ${property2.isRentable}.`);

// ==========================================
// 4. Modificación de Valores
// ==========================================
console.warn("4. Modificación de los valores de las propiedades de un objeto");

// Modificamos precios y estado para las pruebas posteriores
property2.price = 15000000; // 15 Millones
property2.isSaleable = true;
property2.includedServices = ["Agua", "Luz", "Internet", "Gas", "Cable"];

console.log(`ACTUALIZACIÓN: El Usuario con id ${property2.ownerID} está vendiendo: ${property2.name} por un precio de: ${property2.price} (Incluye: ${property2.includedServices.join(", ")}).`);

// ==========================================
// 5. Definición de Usuarios (NECESARIO PARA LAS PRUEBAS)
// ==========================================
const user1 = {
  userID: 78204,
  name: "Sofía Martínez",
  email: "sofia.mtz@outlook.com",
  createdAt: new Date("2019-06-15T14:20:00"),
  lastLogin: new Date("2026-01-21T09:45:10"),
  userRole: "Agente Inmobiliario", // Dueña de la propiedad Washington
  totalProperties: 28,
  rating: 9.8
};

const user2 = {
  userID: 11059,
  name: "Luis Fernando Torres",
  email: "lfer_torres@yahoo.com",
  createdAt: new Date("2025-10-02T11:05:22"),
  lastLogin: new Date("2026-01-20T20:15:00"),
  userRole: "Comprador",
  rating: 7.5,
  lastOperation: "Buscando Casa residencial en venta"
};

const user3 = {
  userID: 44921,
  name: "Elena Vázquez",
  email: "elena.vaz@gmail.com",
  createdAt: new Date("2022-01-20T09:30:15"),
  lastLogin: new Date("2026-01-18T16:50:40"),
  userRole: "Arrendador",
  rating: 9.0,
  lastOperation: "Publicando Local comercial"
};

const user4 = {
  userID: 88302,
  name: "Javier Méndez",
  email: "javi.mendez88@gmail.com",
  createdAt: new Date("2021-11-12T18:10:05"),
  lastLogin: new Date("2026-01-21T07:15:30"),
  userRole: "Comprador",
  rating: 8.9,
  lastOperation: "Buscando Terreno para inversión"
};

// ==========================================
// 6. Desestructuración y Funciones
// ==========================================
console.warn("5. Desestructuración de Objetos y Funciones");

// 5.1 Función para formatear fechas 
const formatDateMX = (date) => {
    if (!(date instanceof Date)) return "Fecha inválida";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear(); 
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

// 5.2 Función de Oferta 
const buyerBid = (seller, buyer, property, price_bidded) => {
    
    const { userID: sellerID, email: sellerEmail } = seller;
    const { userID: buyerID, email: buyerEmail } = buyer;
    
    // Desestructuramos la propiedad Washington (property2)
    const { price, name, id } = property; 

    const fecha_oferta = new Date();

    // Cálculo de la exactitud de la oferta
    const bid_accuracy = ((price_bidded / price) * 100).toFixed(2) + "%";

    console.log(
        `>>> Oferta de Compra <<<
    El usuario: ${buyerID} (${buyerEmail}) 
    está ofertando al usuario: ${sellerID} (${sellerEmail})
    Propiedad: ${name} (ID: ${id})
    ------------------------------------------------
    Precio Ofertado: $${price_bidded}
    Precio Real:     $${price}
    Exactitud:       ${bid_accuracy}
    Fecha:           ${formatDateMX(fecha_oferta)}`
    );

    return {
        buyerID,
        sellerID,
        propertyID: id,
        propertyPrice: price,
        bidPrice: price_bidded,
        date_bidded: fecha_oferta,
        bid_accurate: bid_accuracy
    };
};

// ==========================================
// 7. Ejecución de Pruebas (Con Datos Washington)
// ==========================================
console.log("\n--- RESULTADOS DE LAS OFERTAS (Propiedad: Washington) ---");

// Test 1: Luis Fernando oferta 14.5 Millones (Cercana al precio de 15M)
console.log("Test 1: Oferta Alta");
let bid1 = buyerBid(user1, user2, property2, 14500000);

// Test 2: Elena oferta 8,200 pesos (Oferta errónea/muy baja)
console.log("\nTest 2: Oferta Muy Baja");
let bid2 = buyerBid(user1, user3, property2, 8200);

// Test 3: Javier oferta 15.5 Millones (Superior al precio)
console.log("\nTest 3: Oferta Superior");
let bid3 = buyerBid(user1, user4, property2, 15500000);