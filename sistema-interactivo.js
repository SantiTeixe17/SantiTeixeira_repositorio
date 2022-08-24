

//CALCULO DE IVA

function calcular_iva(precio){
    let iva = precio*0.20
    return iva
}

console.log("Bienvenido al carrito de compras");
console.log("Los productos de hoy son: CARNES $30 / LEGUMBRES $12 / CONDIMENTOS $7 / VERDURAS $20");

    let nombre_producto = prompt("¿Qué producto desea adquirir?");
    let precio_producto = parseInt(prompt("Ingrese el precio del producto"));
    let cantidad_producto = prompt("Ingrese la cantidad que desea llevar");

console.log("Producto: ", nombre_producto);
console.log("Precio de producto:", precio_producto);
console.log("Cantidad de productos:" , cantidad_producto);

    let precio_mas_iva = precio_producto + calcular_iva (cantidad_producto);
    console.log("El precio con iva es de: $", precio_mas_iva);
 
    // ARRAY

    const productos = ["Carnes", "Legumbres", "Condimentos", "Verduras"]

    productos.pop ()
    console.log( productos);

    productos.shift ()
    console.log( productos);







    
  
