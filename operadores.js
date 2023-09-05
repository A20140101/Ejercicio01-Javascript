alert("Bienvenido al restaurante. Esta es tu cuenta");
var pre1 = parseInt(prompt("Ingrese el costo de Entrada"));
var pre2 = parseInt(prompt("Ingrese el costo del Plato Fuerte"));
var pre3 = parseInt(prompt("Ingrese el costo del Postre"));
alert("Revise los resultados en la consola presionando F12");
//Operaciones
var total = pre1 + pre2 + pre3;
var ctotal = total * 0.18;
var IGV = ctotal + total
//Mostrar resultados
console.log("El costo de la entrada es: " + pre1);
console.log("El costo del segundo es " + pre2);
console.log("El costo del postre es: " + pre3);
console.log("El costo total es de: " + total);
console.log("El costo total con IGV es de: " + IGV)
