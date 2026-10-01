
//Definimos las variables de Kilowatts
let  kilowatts = 300;
let precioXKilowatts = 0.15;

//Calculamos el precio base
let precioBase = kilowatts * precioXKilowatts;

//Calculamos los impuestos
let impuestos = precioBase * 0.10;

// calculamos el costo total 
let total = precioBase + impuestos;

// mostramos en la consola 
console.log(`El total de Kilowatts consumidos es de: ${kilowatts} \nEl costo base sin impuestos es de: $${precioBase} \nEl total de impuestoses de: $${impuestos} \nEl total a pagar es de: $${total}`);