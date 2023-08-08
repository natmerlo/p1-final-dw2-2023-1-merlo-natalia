// Array vacío carrito donde se guardaran los productos seleccionados.
let carrito = [];

// Función filtrar productos
function filtrarDatos(codCategoria){
  const contenedorCards = document.querySelector(".contenedor-cards");
  // Borrar elementos del HTML
  contenedorCards.innerHTML = "";

  const productosFiltrados = catalogo.filter((producto) => {
    // Comparo categoria del producto con la categoría elegida
    return producto.categoria === codCategoria;
  });

  productosFiltrados.forEach((producto) => {
    // Iterar en el array productos para crear una card por producto
    const card = crearCard(producto);
    // Agrego card al contenedor
    contenedorCards.append(card);
  });

  // Mostrar banner aleatorio utilizando un rango obteniendo un número aleatorio entre 1-4.
  const codBanner = Math.trunc(Math.random() * (5 - 1) + 1);
  // Llamo a función que crea el banner 
  crearBanner(codBanner);
}

// Función crear banner
function crearBanner(banner){
  // Comparo cada caso con el numero aleatorio obtenido y llamo a la función que construye el banner.
  switch(banner){
    case 1:
      construirBanner(banner);
      break;
    case 2:
      construirBanner(banner);
      break;
    case 3:
      construirBanner(banner);
      break;
    case 4:
      construirBanner(banner);
      break;
  }
}

// Función construir banner
function construirBanner(queBanner){
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal4");
  // Estructura banner
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  const infoBanner = document.createElement("div");
  infoBanner.classList.add("info-banner");

  // Nombre producto
  const modalTitle = document.createElement("h1");
  // Descripcion oferta
  const modalDescripcion = document.createElement("p");
  // Precio producto
  const modalPrecio = document.createElement("p");

  //--Botón agregar al carrito
  const buttonCarrito = document.createElement("button");
  buttonCarrito.classList.add("btn");
  buttonCarrito.classList.add("btn-card");
  buttonCarrito.innerText = "Agregar al carrito";

  // Agrego titulo, descripcion, precio y boton
  infoBanner.append(modalTitle, modalDescripcion, modalPrecio, buttonCarrito);

  const banner = document.createElement("div");
  banner.classList.add("banner");

  // Imagen producto
  const imgBanner = document.createElement("img");
  imgBanner.classList.add("img-banner");

  banner.append(imgBanner, infoBanner);

  modalBody.append(banner);

  //--Banners
  switch(queBanner){
    case 1:
      // Producto a promocionar
      const productoOferta = catalogo[0];
      // console.log(productoOferta);

      modalBody.classList.add("bg-1");
      modalTitle.innerText = `${productoOferta.nombre}`;
      modalDescripcion.innerText = `Consiguelo ahora y recibe un exclusivo paquete de accesorios. ¡Prepárate para brillar en cada actuación! 🎉✨`;
      modalPrecio.innerText = `$${productoOferta.precio}`;
      imgBanner.setAttribute(`src`, `${productoOferta.imagen}`);

      buttonCarrito.addEventListener("click", (e) => {
      // Agrego producto al carrito
      agregarProductoAlCarrito(productoOferta.id);
      // Actualizo detalle del carrito
      actualizarDetalleCarrito();
      // Cerrar modal
      modal.remove();

      });

      break;
    case 2:
      //Producto a promocionar
      const productoOferta2 = catalogo[2];
      // console.log(productoOferta2);

      modalBody.classList.add("bg-2");
      modalTitle.innerText = `${productoOferta2.nombre}`;
      modalDescripcion.innerText = `Eleva tus actuaciones musicales. ¡Obtén la tuya hoy mismo y destaca en cada nota! 🎺✨`;
      modalPrecio.innerText = `$${productoOferta2.precio}`;
      imgBanner.setAttribute(`src`, `${productoOferta2.imagen}`);

      buttonCarrito.addEventListener("click", (e) => {
      // Agrego producto al carrito
      agregarProductoAlCarrito(productoOferta2.id);
      // Actualizo detalle del carrito
      actualizarDetalleCarrito();
      // Cerrar modal
      modal.remove();

      });
      break;
    case 3:
      // Producto a promocionar
      const productoOferta3 = catalogo[4];
      // console.log(productoOferta3);

      modalBody.classList.add("bg-3");
      modalTitle.innerText = `${productoOferta3.nombre}`;
      modalDescripcion.innerText = `De principiantes a profesionales. Marcá la diferencia en tu interpretación. 🌟🎼`;
      modalPrecio.innerText = `$${productoOferta3.precio}`;
      imgBanner.setAttribute(`src`, `${productoOferta3.imagen}`);

      buttonCarrito.addEventListener("click", (e) => {
      // Agrego producto al carrito
      agregarProductoAlCarrito(productoOferta3.id);
      // Actualizo detalle del carrito
      actualizarDetalleCarrito();
      // Cerrar modal
      modal.remove();

      });
      break;
    case 4:
      // Producto a promocionar
      const productoOferta4 = catalogo[1];
      // console.log(productoOferta4);

      modalBody.classList.add("bg-4");
      modalTitle.innerText = `${productoOferta4.nombre}`;
      modalDescripcion.innerText = `Descubre un mundo de sonidos excepcionales. ¡Tu música nunca sonó tan bien! 🚀🔥`;
      modalPrecio.innerText = `$${productoOferta4.precio}`;
      imgBanner.setAttribute(`src`, `${productoOferta4.imagen}`);

      buttonCarrito.addEventListener("click", (e) => {
      // Agrego producto al carrito
      agregarProductoAlCarrito(productoOferta4.id);
      // Actualizo detalle del carrito
      actualizarDetalleCarrito();
      // Cerrar modal
      modal.remove();

      });
      break;
  }

  // Cerrar banner
  const cerrar = document.createElement("a");
  cerrar.classList.add("cerrar");
  cerrar.setAttribute("href", "javascript:void(0)");
  cerrar.innerText = "X";

  // Agrego información del banner y boton cerrar a la modal
  modalBody.append(infoBanner, cerrar);
  modal.appendChild(modalBody);

  // Agrego modal al body
  document.body.appendChild(modal);

  // Remuevo banner del body
  cerrar.addEventListener("click", () => {
    const modal = document.getElementById("modal4");
    modal.remove();
  });

  // Función timmer que remueve el banner en 2s
  setTimeout(function(){
    modal.remove();
  }, 4000);
    
}

// Función confirmar compra
function confirmarCompra(){
  // Estructura modal
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal3");
  
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  
  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal-title")
  modalTitle.innerHTML = "Finalizar compra"

  const modalSubtitle = document.createElement("p");
  modalSubtitle.classList.add("modal-subtitle")
  modalSubtitle.innerHTML = "Ingresá tus datos para continuar con la compra"

  //--Formulario de compra
  const form = document.createElement('form');

  //--Validación
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Validación nombre
      const campo1 = document.querySelector("#nombre")
      // Validación sin errores
      let sinErrores = true;
      if (campo1.value.length==0){
        sinErrores = false;
        campo1.setAttribute('class', 'form-control is-invalid');
      } else {
        campo1.setAttribute('class', 'form-control is-valid');
      }

      // Validación apellido
      const campo2 = document.querySelector("#apellido")
      if (campo2.value.length==0){
        sinErrores = false;
        campo2.setAttribute('class', 'form-control is-invalid');
      } else {
        campo2.setAttribute('class', 'form-control is-valid');
      }
      
      // Validación telefono
      const campo3 = document.querySelector("#telefono")
      if (campo3.value.length==0){
        sinErrores = false;
        campo3.setAttribute('class', 'form-control is-invalid');
      } else {
        campo3.setAttribute('class', 'form-control is-valid');
      }

      // Validación email
      const campo4 = document.querySelector("#email")
      if (campo4.value.length==0){
        sinErrores = false;
        campo4.setAttribute('class', 'form-control is-invalid');
      } else {
        campo4.setAttribute('class', 'form-control is-valid');
      }

      // Validación fecha de entrega
      const campo5 = document.querySelector("#fechaEntrega")
      if (campo5.value.length==0){
        sinErrores = false;
        campo5.setAttribute('class', 'form-control is-invalid');
      } else {
        campo5.setAttribute('class', 'form-control is-valid');
      }

      // Validación dirección de entrega
      const campo6 = document.querySelector("#direccionEntrega")
      if (campo6.value.length==0){
        sinErrores = false;
        campo6.setAttribute('class', 'form-control is-invalid');
      } else {
        campo6.setAttribute('class', 'form-control is-valid');
      }

      // Validación método de pago
      const campo7 = document.querySelector("#metodoPago")
      if (campo7.value.length==0){
        sinErrores = false;
        campo7.setAttribute('class', 'form-control is-invalid');
      } else {
        campo7.setAttribute('class', 'form-control is-valid');
      }

      // Si no hay errores se remueve la modal y se actualiza valor de carrito y detalles carrito
      if (sinErrores){
        const modal = document.getElementById("modal3");
        modal.remove();
        carrito = [];
        actualizarDetalleCarrito();
        actualizarModalCarrito();
      }

  });


  // Datos usuario
  const divRow = document.createElement('div');
  divRow.setAttribute('class', 'row mb-3');

  // Campo nombre
  const divNombre = document.createElement('div');
  divNombre.setAttribute('class', 'col');

  const divFormFloatingNombre = document.createElement('div');
  divFormFloatingNombre.setAttribute('class', 'form-floating');

  const inputNombre = document.createElement('input');
  inputNombre.setAttribute('type', 'text');
  inputNombre.setAttribute('class', 'form-control');
  inputNombre.setAttribute('name', 'nombre');
  inputNombre.setAttribute('id', 'nombre');
  inputNombre.setAttribute('placeholder', 'Nombre');

  const labelNombre = document.createElement('label');
  labelNombre.setAttribute('for', 'nombre');
  labelNombre.textContent = 'Nombre';

  // Agrego campo nombre
  divFormFloatingNombre.append(inputNombre,labelNombre);
  divNombre.append(divFormFloatingNombre);

  // Campo apellido
  const divApellido = document.createElement('div');
  divApellido.setAttribute('class', 'col');

  const divFormFloatingApellido = document.createElement('div');
  divFormFloatingApellido.setAttribute('class', 'form-floating');

  const inputApellido = document.createElement('input');
  inputApellido.setAttribute('type', 'text');
  inputApellido.setAttribute('class', 'form-control');
  inputApellido.setAttribute('name', 'apellido');
  inputApellido.setAttribute('id', 'apellido');
  inputApellido.setAttribute('placeholder', 'Apellido');

  const labelApellido = document.createElement('label');
  labelApellido.setAttribute('for', 'apellido');
  labelApellido.textContent = 'Apellido';

  // Agrego campo apellido
  divFormFloatingApellido.append(inputApellido, labelApellido);
  divApellido.append(divFormFloatingApellido);

  // Agrego campo nombre y apellido en fila
  divRow.append(divNombre, divApellido);

  // Campo teléfono
  const divTelefono = document.createElement('div');
  divTelefono.setAttribute('class', 'form-floating mb-3');

  const inputTelefono = document.createElement('input');
  inputTelefono.setAttribute('type', 'tel');
  inputTelefono.setAttribute('class', 'form-control');
  inputTelefono.setAttribute('name', 'telefono');
  inputTelefono.setAttribute('id', 'telefono');
  inputTelefono.setAttribute('placeholder', 'Teléfono');
  
  const labelTelefono = document.createElement('label');
  labelTelefono.setAttribute('for', 'telefono');
  labelTelefono.textContent = 'Teléfono';
  
  // Agrego campo telefono
  divTelefono.append(inputTelefono, labelTelefono);
  
  // Campo correo electrónico
  const divEmail = document.createElement('div');
  divEmail.setAttribute('class', 'form-floating mb-3');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('class', 'form-control');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('id', 'email');
  inputEmail.setAttribute('placeholder', 'name@example.com');
  
  const labelEmail = document.createElement('label');
  labelEmail.setAttribute('for', 'email');
  labelEmail.textContent = 'Correo electrónico';
  
  // Agrego campo email
  divEmail.append(inputEmail, labelEmail);

  //--Infomación de compra
  const formTitle = document.createElement("h2");
  formTitle.classList.add("form-title")
  formTitle.innerHTML = "Método de pago"

  const formSubtitle = document.createElement("p");
  formSubtitle.classList.add("form-subtitle")
  formSubtitle.innerHTML = "Completá los datos de envío y seleccioná el método de pago"

  // Campo fecha de entrega
  const divFechaEntrega = document.createElement('div');
  divFechaEntrega.setAttribute('class', 'form-floating mb-3');

  const inputFechaEntrega = document.createElement('input');
  inputFechaEntrega.setAttribute('type', 'date');
  inputFechaEntrega.setAttribute('class', 'form-control');
  inputFechaEntrega.setAttribute('name', 'fechaEntrega');
  inputFechaEntrega.setAttribute('id', 'fechaEntrega');

  const labelFechaEntrega = document.createElement('label');
  labelFechaEntrega.setAttribute('for', 'fechaEntrega');
  labelFechaEntrega.textContent = 'Fecha de entrega';

  // Agrego campo fecha de entrega
  divFechaEntrega.append(inputFechaEntrega, labelFechaEntrega);

  // Campo dirección de entrega
  const divDireccionEntrega = document.createElement('div');
  divDireccionEntrega.setAttribute('class', 'col');

  const divFormFloatingEntrega = document.createElement('div');
  divFormFloatingEntrega.setAttribute('class', 'form-floating mb-3');

  const inputDireccionEntrega = document.createElement('input');
  inputDireccionEntrega.setAttribute('type', 'text');
  inputDireccionEntrega.setAttribute('class', 'form-control');
  inputDireccionEntrega.setAttribute('name', 'direccionEntrega');
  inputDireccionEntrega.setAttribute('id', 'direccionEntrega');
  inputDireccionEntrega.setAttribute('placeholder', 'DireccionEntrega');

  const labelDireccionEntrega = document.createElement('label');
  labelDireccionEntrega.setAttribute('for', 'entrega');
  labelDireccionEntrega.textContent = 'Dirección';

  // Agrego campo direccipon de entrega
  divFormFloatingEntrega.append(inputDireccionEntrega, labelDireccionEntrega);
  divDireccionEntrega.append(divFormFloatingEntrega);

  //Campo metodo de pago
  const divMetodoPago = document.createElement('div');
  divMetodoPago.setAttribute('class', 'form-floating mb-3');

  const selectMetodoPago = document.createElement('select');
  selectMetodoPago.setAttribute('class', 'form-select');
  selectMetodoPago.setAttribute('name', 'metodoPago');
  selectMetodoPago.setAttribute('id', 'metodoPago');

  const labelMetodoPago = document.createElement('label');
  labelMetodoPago.setAttribute('for', 'metodoPago');
  labelMetodoPago.textContent = 'Método de pago';

  //Opciones para el método de pago
  const opcionEfectivo = document.createElement('option');
  opcionEfectivo.setAttribute('value', 'efectivo');
  opcionEfectivo.textContent = 'Efectivo';

  const opcionTarjeta = document.createElement('option');
  opcionTarjeta.setAttribute('value', 'tarjeta');
  opcionTarjeta.textContent = 'Tarjeta de crédito/débito';

  const opcionMercadoPago = document.createElement('option');
  opcionMercadoPago.setAttribute('value', 'tarjeta');
  opcionMercadoPago.textContent = 'Mercado Pago';

  // Agrego opciones de pago
  selectMetodoPago.append(opcionEfectivo, opcionTarjeta, opcionMercadoPago);

  // Agrego campo método de pago
  divMetodoPago.append(selectMetodoPago, labelMetodoPago);

  const divButtons = document.createElement("div");
  divButtons.setAttribute('class', 'div-buttons');

  //--Botón finalizar compra
  const finalizarCompra = document.createElement('button');
  finalizarCompra.setAttribute('type', 'submit');
  finalizarCompra.setAttribute('class', 'btn btn-card');
  finalizarCompra.textContent = 'Finalizar compra';
  
  //--Botón cancelar
  const cancelarButton = document.createElement('button');
  cancelarButton.setAttribute('type', 'submit');
  cancelarButton.setAttribute('class', 'btn btn-header');
  cancelarButton.textContent = 'Cancelar';
  cancelarButton.addEventListener("click", () => {
    const modal = document.getElementById("modal3");
    modal.remove();
  });

  // Agrego botones
  divButtons.append(finalizarCompra, cancelarButton);

  // Agrego elementos al formulario
  form.append(divRow, divTelefono, divEmail, formTitle, formSubtitle, divFechaEntrega, divDireccionEntrega, divMetodoPago, divButtons);

  // Agrego elementos a modal
  modalBody.append(modalTitle, modalSubtitle, form);
  modal.append(modalBody);

  // Agrego modal al body
  document.body.appendChild(modal);

}

// Función actualizar detelles del carrito
function actualizarDetalleCarrito(){

  const infoCarrito = document.querySelector(".info-carrito");
  infoCarrito.innerHTML="";

  // Icon carrito
  const imgCarrito = document.createElement("imgBanner");
  imgCarrito.classList.add("carrito-img");
  imgCarrito.setAttribute("src", "img/carrito_icon.png")

  // Muestro total de productos
  totalCarrito.innerHTML = `$${calcularTotal()}`;

  // Muestro cantidad de productos
  const cantidadCarrito = document.createElement("p");
  cantidadCarrito.innerHTML = `Cant. ${calcularCantProductos()}`;

  // Agrego elementos detalle del carrito
  infoCarrito.append(imgCarrito, totalCarrito, cantidadCarrito);
}

// Función agregar producto al carrito
function agregarProductoAlCarrito(productoId){
  catalogo.forEach(function(it){
    //Verificar si el id del producto actual coincide con el productoId
    if (it.id == productoId){        
      if (carrito.length == 0){
        // Si el carrito está vacío, agregar un nuevo elemento al carrito con cantidad 1
        let nuevoItem = new Carrito(it.id, it.nombre , 1, it.precio)
        carrito.push(nuevoItem)
      } else {
        // Si el carrito no está vacío, buscar el producto en el carrito
        let cantidadActual = 0
        carrito.forEach(function (itCarrito) {
          if (itCarrito.id == productoId){
            // Si el producto está en el carrito, actualizar la cantidad y el precio total
            cantidadActual = itCarrito.cantidad + 1
            itCarrito.cantidad++;
            itCarrito.precio = it.precio * itCarrito.cantidad
          }
        }) 
        // Si el producto no está en el carrito (cantidadActual sigue siendo 0), lo agrego al carrito         
        if (cantidadActual == 0){
          let nuevoItem = new Carrito(it.id, it.nombre , 1, it.precio)
          carrito.push(nuevoItem)
        } 
      }
    }
  });
}

// Función crear card
function crearCard(producto) {
  // Estructura card
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = producto.id;

  // Muestro imagen producto
  const img = document.createElement("img");
  img.setAttribute("src", producto.imagen);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const divProducto = document.createElement("div");
  divProducto.classList.add("div-producto");

  // Muestro nombre de producto
  const cardTitle = document.createElement("h1");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = producto.nombre;

  // Categoría 
  const cardSubtitle = document.createElement("span");
  cardSubtitle.className = "badge categoria";
  cardSubtitle.innerText = producto.categoria;

  // Agrego categoría al titulo del producto
  cardTitle.append(cardSubtitle);

  // Agrego titulo de producto
  divProducto.append(cardTitle);

  // Muestro precio
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = `$${producto.precio}`;

  //--Botón agregar al carrito
  const buttonCarrito = document.createElement("button");
  buttonCarrito.classList.add("btn");
  buttonCarrito.classList.add("btn-card");
  buttonCarrito.innerText = "Agregar al carrito";
  buttonCarrito.addEventListener("click", (e) => {
    // Obtengo el botón
    const button = e.target;
    const cardBody = button.parentNode;
    const card = cardBody.parentNode;
    
    // Agrego producto al carrito
    agregarProductoAlCarrito(card.dataset.id);
    // Actualizo detalle del carrito
    actualizarDetalleCarrito();

  });

  //--Botón ver más
  const buttonVerMas = document.createElement("button");
  buttonVerMas.classList.add("btn");
  buttonVerMas.classList.add("btn-card-disabled");
  buttonVerMas.innerText = "ver más";
  buttonVerMas.addEventListener("click", () => {
    // Estructura ventana modal
    const modal = document.createElement("div");
    modal.setAttribute("id", "modal1");
    modal.dataset.id = producto.id;

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
  
    // Muestro imagen de producto en modal
    const modalImg = document.createElement("img");
    modalImg.setAttribute("src", producto.imagen);
    
    const modalInfo = document.createElement("div");
    modalInfo.classList.add("modal-info");
    
    // Muestro nombre del producto en modal
    const modalTitle = document.createElement("h1");
    modalTitle.classList.add("modal-title")
    modalTitle.innerHTML = producto.nombre;

    // Muestro descripción en modal
    const modalDescrpicion = document.createElement("p");
    modalDescrpicion.classList.add("modal-descripcion")
    modalDescrpicion.innerHTML = producto.descripcion;

    // Muestro precio en modal
    const modalPrecio= document.createElement("p");
    modalPrecio.classList.add("modal-precio");
    modalPrecio.innerHTML = `$${producto.precio}`;

    //--Boton "cerrar" ventana modal
    const buttonCerrar = document.createElement("button");
    buttonCerrar.classList.add("btn");
    buttonCerrar.classList.add("btn-card-disabled");
    buttonCerrar.innerText = "cerrar";
    buttonCerrar.addEventListener("click", () => {
    const modal = document.getElementById("modal1");
    modal.remove();
    });

    //--Boton agregar al carrito en ventana modal
    const buttonModal= document.createElement("button");
    buttonModal.classList.add("btn");
    buttonModal.classList.add("btn-card");
    buttonModal.innerText = "Agregar al carrito";
    buttonModal.addEventListener("click", (e) =>{
      // Obtengo el botón
      const button = e.target;
      const modalInfo = button.parentNode;
      const modal = modalBody.parentNode;
      // Agrego producto al carrito
      agregarProductoAlCarrito(modal.dataset.id);
      // Actualizo detalle del carrito
      actualizarDetalleCarrito();
      // Remuevo ventana modal
      const modal1 = document.getElementById("modal1");
      modal1.remove();

    });

    // Agrego titulo, descripcion y precio
    modalInfo.append(modalTitle, modalDescrpicion, modalPrecio, buttonModal, buttonCerrar);

    // Cerrar con X ventana modal
    const cerrar = document.createElement("a");
    cerrar.classList.add("cerrar");
    cerrar.setAttribute("href", "javascript:void(0)");
    cerrar.innerText = "X";

    const divButtons = document.createElement("div");
    divButtons.classList.add("div-buttons");

    // Agrego elementos a modal
    modalBody.append(modalImg, modalInfo, cerrar);
    modal.append(modalBody);

    // Agrego modal al body
    document.body.append(modal);
      
    // Remuevo modal del body
    cerrar.addEventListener("click", () => {
      const modal = document.getElementById("modal1");
      modal.remove();
    });

  });

  // Agrego elementos a la card
  cardBody.append(divProducto, cardText,  buttonCarrito, buttonVerMas);
  card.append(img, cardBody);

  //Devuelvo card
  return card;
}

// Función para calcular el total de los productos
function calcularTotal() {
  // Inicio en 0
  let total = 0;
  // Recorro array carrito 
  carrito.forEach((producto) => {
    // Se suma el precio de cada producto
    total += producto.precio;
  });
  // Devuelvo el total
  return total.toFixed(2);
}

// Función para calcular cantidad de productos
function calcularCantProductos() {
  // Inicio en 0
  let total = 0;
  // Recorro array carrito 
  carrito.forEach((producto) => {
    // Se suma el precio de cada producto
    total += producto.cantidad;
  });
  // Devuelvo el total
  return total;
}

//Funcion para eliminar producto
function eliminarProducto(producto) {
  // Devuelvo indice de producto
  const indice = carrito.indexOf(producto);
  // Verifico si existe. Si es asi lo elimina.
  if (indice !== -1) {
    carrito.splice(indice, 1);
  }
  // Actualizar modal del carrito
  actualizarModalCarrito();
  // Actualizar detalle de carrito
  actualizarDetalleCarrito();

  // Devuelvo carrito actualizado
  return carrito;
}

// Funcion actualizar datos de la modal carrito
function actualizarModalCarrito(){
  const modal = document.getElementById("modal2");

  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "";

  // Titulo
  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal-title");
  modalTitle.innerText = "Resumen de compra";

  const modalProductos = document.createElement("div");
  modalProductos.classList.add("modal-productos");

  carrito.forEach((producto) => {
    const productoItem = document.createElement("div");
    productoItem.classList.add("producto-item");

    // Mostrar nombre y cantidad del producto
    const nombreProducto = document.createElement("p");
    nombreProducto.innerText = `${producto.nombre} - ${producto.cantidad}`;

    // Mostrar precio
    const precioProducto = document.createElement("p");
    precioProducto.innerText = `$${producto.precio.toFixed(2)}`;

    //--Botón eliminar
    const buttonEliminar = document.createElement("button");
    buttonEliminar.classList.add("btn");
    buttonEliminar.classList.add("btn-header");
    buttonEliminar.innerText = "Eliminar";
    buttonEliminar.addEventListener("click", () => {
      // Eliminar el producto
      eliminarProducto(producto);
    });

    // Agrego elementos a modal
    productoItem.append(nombreProducto, precioProducto, buttonEliminar);
    modalProductos.append(productoItem);

  });

    //--Botón eliminar carrito completo
    if (carrito.length>0){
      // Si hay elementos en carrito...
      const buttonEliminarTodos = document.createElement("button");
      buttonEliminarTodos.classList.add("btn");
      buttonEliminarTodos.classList.add("btn-header");
      buttonEliminarTodos.innerText = "Eliminar todos";
      buttonEliminarTodos.addEventListener("click", () => {
        // Vacío el carrito
        carrito = [];
        // Actualizo los datos de la modal carrito
        actualizarModalCarrito();
        // Actualizo los datos detalle del carrito
        actualizarDetalleCarrito();
      });

      const buttonConfirmarCompra = document.createElement("button");
      buttonConfirmarCompra.classList.add("btn");
      buttonConfirmarCompra.classList.add("btn-card");
      buttonConfirmarCompra.innerText = "Finalizar compra";
      buttonConfirmarCompra.addEventListener("click", () => {
        //Remuevo modal carrito
        const modal = document.getElementById("modal2");
        modal.remove();
        //Llamo a función de confirmar venta
        confirmarCompra();
  
      });
  
      // Agrego botón confirmar compra y eliminar todos a modal actualizada
      modalProductos.append(buttonEliminarTodos, buttonConfirmarCompra);
  }
  

  // Muestro cantidad de productos actualizados
  const modalCantidad = document.createElement("p");
  if (carrito.length<1){
    modalCantidad.innerText = `No hay productos en el carrito.`;
  } else {
    modalCantidad.innerText = `Cantidad de productos en el carrito: ${calcularCantProductos()}`;
  }

  // Muestro total actualizado
  const modalTotal = document.createElement("p");
  modalTotal.classList.add("modal-total");
  modalTotal.innerText = `Total: $${calcularTotal()}`;

  // Cerrar ventana modal 
  const cerrar = document.createElement("a");
  cerrar.classList.add("cerrar");
  cerrar.setAttribute("href", "javascript:void(0)");
  cerrar.innerText = "X";

  // Agrego elementos a modal 
  modalBody.append(modalTitle, modalProductos, modalCantidad, modalTotal, cerrar);

  // Remuevo modal del body
  cerrar.addEventListener("click", () => {
    const modal = document.getElementById("modal2");
    modal.remove();
  });
}


//--Botones filtro por categoría
const buttonFiltro1 = document.querySelector("#trombones");
buttonFiltro1.addEventListener("click", () => {
  // Llamo a función filtrar datos
  filtrarDatos('Trombones');
});

const buttonFiltro2 = document.querySelector("#trompetas");
buttonFiltro2.addEventListener("click", () => {
  // Llamo a función filtrar datos
  filtrarDatos('Trompetas');
});

const buttonFiltro3 = document.querySelector("#flautas");
buttonFiltro3.addEventListener("click", () => {
  // Llamo a función filtrar datos
  filtrarDatos('Flautas');
});


//--Botón limpiar filtro
const buttonLimpiarFiltro = document.querySelector("#cancelFiltros");
buttonLimpiarFiltro.addEventListener("click", () => {
  const contenedorCards = document.querySelector(".contenedor-cards");
  // Borrar elementos del HTML
  contenedorCards.innerHTML = "";

  catalogo.forEach((producto) => {
    // Iterar en el array productos para crear una card por producto
    const card = crearCard(producto);
    // Agrego cards al contenedor
    contenedorCards.append(card);
  });
});


//--Catálogo de productos
catalogo.forEach((producto) => {
  // Iterar en catalogo para mostrar una card por producto
  const card = crearCard(producto);

  const contenedorCards = document.querySelector(".contenedor-cards");
  // Agregar cards a contenedor
  contenedorCards.append(card);
});


//--Carrito de compras
const infoCarrito = document.querySelector(".info-carrito");
const totalCarrito = document.createElement("p");

// Total de compra
const imgCarrito = document.createElement("img");
imgCarrito.classList.add("carrito-img");
imgCarrito.setAttribute("src", "img/carrito_icon.png")

totalCarrito.innerHTML = `${calcularTotal()}`;

// Cantidad de productos
const cantidadCarrito = document.createElement("p");
cantidadCarrito.innerHTML = `Cant. ${calcularCantProductos()}`;

// Agrego elementos a info del carrito
infoCarrito.append(imgCarrito, totalCarrito, cantidadCarrito);

//--Botón ver carrito
const modalCarrito = document.querySelector("#carrito");
modalCarrito.addEventListener("click", () => {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal2");

  // Estructura modal
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  // Titulo
  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal-title")
  modalTitle.innerText = "Resumen de compra";

  const modalProductos = document.createElement("div");
  modalProductos.classList.add("modal-productos");

  // Mostrar productos del carrito
  carrito.forEach((producto) =>{
    const productoItem = document.createElement("div");
    productoItem.classList.add("producto-item");

    // Muestro nombre y cantidad del producto
    const nombreProducto = document.createElement("p");
    nombreProducto.innerText = `${producto.nombre} - ${producto.cantidad}`;

    // Muestro precio del producto
    const precioProducto = document.createElement("p");
    precioProducto.innerText = `$${producto.precio.toFixed(2)}`;

    //--Botón eliminar producto del carrito
    const buttonEliminar = document.createElement("button");
    buttonEliminar.classList.add("btn");
    buttonEliminar.classList.add("btn-header");
    buttonEliminar.innerText = "Eliminar";
    buttonEliminar.addEventListener("click", () => {
      // Llamo función que elimina el producto
      eliminarProducto(producto);
      // Llamo función que actualiza los datos de la modal
      actualizarModalCarrito();
    });

    // Agrego elementos a modal
    productoItem.append(nombreProducto, precioProducto, buttonEliminar);
    modalProductos.append(productoItem);

    })

  //--Botón limpiar carrito
  if (carrito.length>0){
    // Si hay productos en carrito...
    const buttonEliminarTodos = document.createElement("button");
    buttonEliminarTodos.classList.add("btn");
    buttonEliminarTodos.classList.add("btn-header");
    buttonEliminarTodos.innerText = "Eliminar todos";
    buttonEliminarTodos.addEventListener("click", () => {
      // Vacio carrito
      carrito = [];
      // Llamo función que actualiza los datos de la modal y el detalle del carrito
      actualizarModalCarrito();
      actualizarDetalleCarrito();
    });

    // Agrego boton eliminar todos
    modalProductos.append(buttonEliminarTodos);
  }

  //--Botón confirmar compra
  if (carrito.length>0){
    // Si hay productos en carrito...
    const buttonConfirmarCompra = document.createElement("button");
    buttonConfirmarCompra.classList.add("btn");
    buttonConfirmarCompra.classList.add("btn-card");
    buttonConfirmarCompra.innerText = "Finalizar compra";
    buttonConfirmarCompra.addEventListener("click", () => {
      // Remuevo modal carrito
      const modal = document.getElementById("modal2");
      modal.remove();
      // Llamo a función de confirmar venta
      confirmarCompra();
    });
    // Agrego boton de confirmar compra
    modalProductos.append(buttonConfirmarCompra);
  }
  
  // Muestro cantidad de productos
  const modalCantidad = document.createElement("p");
  if (carrito.length<1){
    modalCantidad.innerText = `No hay productos en el carrito.`;
  } else {
    modalCantidad.innerText = `Cantidad de productos en el carrito: ${calcularCantProductos()}`;
  }

  // Muestro monto total
  const modalTotal = document.createElement("p");
  modalTotal.classList.add("modal-total")
  modalTotal.innerText = `Total: $${calcularTotal()}`;

  // Cerrar ventana modal 
  const cerrar = document.createElement("a");
  cerrar.classList.add("cerrar");
  cerrar.setAttribute("href", "javascript:void(0)");
  cerrar.innerText = "X";

  // Agrego elementos a la modal
  modalBody.append(modalTitle, modalProductos, modalCantidad, modalTotal, cerrar);
  modal.append(modalBody);
  
  // Agrego modal al body
  document.body.appendChild(modal);

  //--Botón cerrar
  cerrar.addEventListener("click", () => {
    const modal = document.getElementById("modal2");
    modal.remove();
  });
});


