

//DOM
let usuario_registrado = "Juan"


    function saludar(){
      let nombre = document.getElementById("nombre_usuario");

      console.log("Hola bienvenido/a" , nombre.value);

    }

    function validar(){
      let nombre = document.getElementById("nombre_usuario");
      let mensaje = document.getElementById("mensaje");

      if( nombre.value == usuario_registrado){
        let parrafo = document.createElement("p");
        mensaje.innerHTML = "";
        parrafo.innerText = "Bienvenido"
        parrafo.style.fontFamily= "Verdana";
        parrafo.style.fontSize = "25px";
        mensaje.append(parrafo);

      }
      else{
          document.body.innerHTML = "<h2>ERROR USUARIO INCORRECTO</h2>"
                                    "<p>El usuario: ${nombre.value} no se encontro</p>";
      }
    }

//CALCULO DE IVA
function calcular_iva(precio){
    let iva = precio*0.20
    return iva
}

console.log("Bienvenido al carrito de compras");
console.log("Los productos de hoy son: Pollo $30 / Lentejas $12 / Ketchup $7 / Zapallo $20");

    let nombre_producto = prompt("¿Qué producto desea adquirir?");
    let precio_producto = parseInt(prompt("Ingrese el precio del producto"));
    let cantidad_producto = prompt("Ingrese la cantidad que desea llevar");
   
console.log("Producto: ", nombre_producto);
console.log("Precio de producto:", precio_producto);
console.log("Cantidad de productos:" , cantidad_producto);

    let precio_mas_iva = precio_producto + calcular_iva (cantidad_producto);
    console.log("El precio con iva es de: $", precio_mas_iva);
    
//Objetos

    const producto = {
        id: 1,
        nombre: 'Pollo',
        categoria: 'Carnes',
        precio: 1.99,
        nutrientes : {
        calorias: 176,
         grasas: 9.9,
         proteina: 28.7
       }
      }
      console.log(producto);

      const producto2 = {
        id: 2,
        nombre: 'Lentejas',
        categoria: 'Legumbres',
        precio: 12,
        nutrientes : {
        calorias: 116,
         grasas: 0.4,
         proteina: 9
       }
      }
      console.log(producto2);

      const producto3 = {
        id: 3,
        nombre: 'Ketchup',
        categoria: 'Condimentos',
        precio: 7,
        nutrientes : {
        calorias: 112,
         grasas: 0.2,
         proteina: 1.3
       }
      }
      console.log(producto3);

      const producto4 = {
        id: 4,
        nombre: 'Zapallo',
        categoria: 'Verduras',
        precio: 20,
        nutrientes : {
        calorias: 26,
         grasas: 0.1,
         proteina: 1
       }
      }
      console.log(producto4);

      const productos = [{ id: 1, producto: "Pollo",    categoria: "Carnes", calorias: 26, grasas: 0.1, proteina: 1},
                        {  id: 2, producto: "Lentejas", categoria: "Legumbres", calorias: 116, grasas: 0.4, proteina: 9},
                        {  id: 3, producto: "Ketchup",  categoria: "Condimentos", calorias: 112, grasas: 0.2, proteina: 1.3},  
                        {  id: 4, producto: "Zapallo",  categoria:  "Verduras", calorias: 26, grasas: 0.1, proteina: 1}];

      for (const Pollo of productos){
            console.log(Pollo.id);
            console.log(Pollo.categoria);     
            console.log(Pollo.calorias);
            console.log(Pollo.grasas);
            console.log(Pollo.proteina);
      }

      for (const Lentejas of productos){
        console.log(Lentejas.id);
        console.log(Lentejas.categoria);   
        console.log(Lentejas.calorias);
        console.log(Lentejas.grasas);
        console.log(Lentejas.proteina);  
  }

    for (const Ketchup of productos){
    console.log(Ketchup.id);
    console.log(Ketchup.categoria);  
    console.log(Ketchup.calorias);
    console.log(Ketchup.grasas);
    console.log(Ketchup.proteina); 
    }

    for (const Zapallo of productos){
        console.log(Zapallo.id);
        console.log(Zapallo.categoria);
        console.log(Zapallo.calorias);
        console.log(Zapallo.grasas);
        console.log(Zapallo.proteina);    
    }
    productos.push ({id: 1, producto: "Pollo", categoria: "Carnes" , precio:30},
                         {id: 3, producto: "Ketchup", categoria: "Condimentos" , precio:7}
         )

         productos.pop ({id: 4, producto: "Zapallo", categoria: "Verduras" , precio:20})
         console.log (productos);
         
      alert ("Hasta Luego");

    


    
  
