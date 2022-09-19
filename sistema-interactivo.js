

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

        // Variables
const baseDeDatos = [
  {
      id: 1,
      nombre: 'Papas',
      precio: 30,
  },
  {
      id: 2,
      nombre: 'Cebolla',
      precio: 15,
  },
  {
      id: 3,
      nombre: 'Pollo',
      precio: 100,
  },
  {
      id: 4,
      nombre: 'Zanahoria',
      precio: 50,
  },
  {
    id: 5,
    nombre: 'Ketchup',
    precio: 10,
  }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones


function renderizarProductos() {
  baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = `${info.precio}${divisa}`;
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = '+';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
  });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {
  
  carrito.push(evento.target.getAttribute('marcador'))
 
  renderizarCarrito();

}


function renderizarCarrito() {

  DOMcarrito.textContent = '';
  
  const carritoSinDuplicados = [...new Set(carrito)];
  
  carritoSinDuplicados.forEach((item) => {
      
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
       
          return itemBaseDatos.id === parseInt(item);
      });
      
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
         
          return itemId === item ? total += 1 : total;
      }, 0);
      
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
      
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
   
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
  });
  
  DOMtotal.textContent = calcularTotal();
}


function borrarItemCarrito(evento) {
  
  const id = evento.target.dataset.item;
  
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });

  renderizarCarrito();
}


function calcularTotal() {
  
  return carrito.reduce((total, item) => {
      
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      
      return total + miItem[0].precio;
  }, 0).toFixed(2);
}


function vaciarCarrito() {
  
  carrito = [];
  
  renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);


renderizarProductos();
renderizarCarrito();


        

