

//CALCULO DE IGV

function calcular_igv(precio){
    let igv = precio*0.20
    return igv
}

console.log("Bienvenido al carrito de compras");
console.log("Los productos de hoy son: CARNES $30 / LEGUMBRES $12 / CONDIMENTOS $7 / VERDURAS $20");

    let nombre_producto = prompt("¿Qué producto desea adquirir?");
    let precio_producto = parseInt(prompt("Ingrese el precio del producto"));
    let cantidad_producto = prompt("Ingrese la cantidad que desea llevar");

console.log("Producto: ", nombre_producto);
console.log("Precio de producto:", precio_producto);
console.log("Cantidad de productos:" , cantidad_producto);

    let precio_total = precio_producto * cantidad_producto;
    console.log("La operación grabada es de: $", precio_total);





    
  
