
        // Variables
const baseDeDatos = [
  {
      id: 1,
      nombre: 'Papas',
      precio: 30,
      imagen: "./img/papas.jpg"
  },
  {
      id: 2,
      nombre: 'Cebolla',
      precio: 15,
      imagen: "./img/cebolla.jpg"
  },
  {
      id: 3,
      nombre: 'Pollo',
      precio: 100,
      imagen: "./img/pollo.jpg"
  },
  {
      id: 4,
      nombre: 'Zanahoria',
      precio: 50,
      imagen: "./img/zanahoria.jpg"
  },
  {
    id: 5,
    nombre: 'Ketchup',
    precio: 10,
    imagen: "./img/ketchup.jpg"
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

//TOASTY LIBRERIA
const toastr = document.querySelector("#toastr");

const openToastr = (typeMsg, message) => {
  toastr.style.display = "flex";
  toastr.innerHTML = message;
  toastr.classList.add(typeMsg);

  closeToastr(typeMsg);
}

const closeToastr = (typeMsg) => {
  setTimeout(()=> {
    toastr.style.display = "none";
    toastr.classList.remove(typeMsg);
    
  }, 2500)
}


// FETCH
let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
}

