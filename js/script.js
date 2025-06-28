// Función que genera un array de productos del tipo JSON
function generarProductos() {
    const productos = [
        {
            id: 1,
            name: "Bicicleta de Carrera",
            description: "Perfecta para competencia y carreras profesionales. Construida con materiales de alta calidad, marco ligero de carbono, cambios precisos y ruedas aerodinámicas. Ideal para ciclistas que buscan velocidad y rendimiento máximo en carreteras pavimentadas.",
            amount: 120000
        },
        {
            id: 2,
            name: "Bicicleta de Paseo",
            description: "Diseñada especialmente para la comodidad urbana. Cuenta con asiento ergonómico, posición de manejo relajada, canasta opcional y guardabarros. Perfecta para recorridos por la ciudad, ir al trabajo o paseos recreativos por parques y ciclovías.",
            amount: 150000
        },
        {
            id: 3,
            name: "Bicicleta de Niña",
            description: "Especialmente diseñada para niñas de 8 a 12 años. Marco resistente pero liviano, colores atractivos, ruedas de tamaño apropiado para mayor estabilidad. Incluye reflectores de seguridad y frenos suaves para control total.",
            amount: 90000
        },
        {
            id: 4,
            name: "Bicicleta de Niña Pequeña",
            description: "Ideal para niñas de 4 a 8 años que están aprendiendo a andar en bicicleta. Diseño colorido y divertido, ruedas auxiliares opcionales, altura de asiento ajustable. Construcción segura con materiales no tóxicos y bordes redondeados.",
            amount: 85000
        },
        {
            id: 5,
            name: "Bicicleta Sport 1",
            description: "Perfecta para actividades deportivas y ejercicio. Combina características de bicicleta de montaña y ruta. Marco robusto, múltiples velocidades, suspensión delantera básica. Ideal para entrenamientos, ejercicio diario y terrenos mixtos.",
            amount: 95000
        },
        {
            id: 6,
            name: "Bicicleta Sport 2",
            description: "Versión avanzada de nuestra línea deportiva. Equipada con componentes profesionales, sistema de cambios de 21 velocidades, frenos de disco, suspensión completa. Diseñada para ciclistas experimentados que buscan máximo rendimiento en cualquier terreno.",
            amount: 250000
        }
    ];

    // Mostrar los productos en la consola
    console.log("=== PRODUCTOS GENERADOS ===");
    console.log(productos);

    return productos;
}

// Variable global para guardar los productos
let productosArray = [];

// Función para agregar un párrafo con descripción ampliada
function mostrarDescripcion(numeroProducto) {
    // Buscar el producto en el array
    let producto = null;
    for (let i = 0; i < productosArray.length; i++) {
        if (productosArray[i].id === numeroProducto) {
            producto = productosArray[i];
            break;
        }
    }

    if (producto === null) {
        return;
    }

    // Buscar la card del producto
    const todasLasCards = document.querySelectorAll('.producto-card');
    const card = todasLasCards[numeroProducto - 1];

    // Verificar si ya existe una descripción ampliada
    const descripcionExistente = card.querySelector('.descripcion-ampliada');
    if (descripcionExistente) {
        // Si existe, la eliminamos (efecto toggle)
        card.removeChild(descripcionExistente);
        return;
    }

    // Crear un nuevo párrafo
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.className = 'descripcion-ampliada';

    // Agregar estilos al párrafo
    nuevoParrafo.style.margin = '10px';
    nuevoParrafo.style.padding = '15px';
    nuevoParrafo.style.backgroundColor = '#f0f8ff';
    nuevoParrafo.style.border = '1px solid #0066cc';
    nuevoParrafo.style.borderRadius = '5px';
    nuevoParrafo.style.fontSize = '0.9rem';
    nuevoParrafo.style.color = '#333';

    // Agregar el texto de la descripción del objeto JSON
    nuevoParrafo.textContent = producto.description;

    // Insertar el párrafo antes del botón "Agregar al carrito"
    const botonAgregar = card.querySelector('.btn-agregar');
    card.insertBefore(nuevoParrafo, botonAgregar);
}

// Función para crear botones "Ver más info" en cada producto
function crearBotonesInfo() {
    const todasLasCards = document.querySelectorAll('.producto-card');

    for (let i = 0; i < todasLasCards.length; i++) {
        const card = todasLasCards[i];
        const numeroProducto = i + 1;

        // Crear el botón
        const botonInfo = document.createElement('button');
        botonInfo.textContent = 'Ver más información';
        botonInfo.style.margin = '10px';
        botonInfo.style.padding = '8px 12px';
        botonInfo.style.backgroundColor = '#28a745';
        botonInfo.style.color = 'white';
        botonInfo.style.border = 'none';
        botonInfo.style.borderRadius = '5px';
        botonInfo.style.cursor = 'pointer';

        // Agregar evento click
        botonInfo.addEventListener('click', function () {
            mostrarDescripcion(numeroProducto);
        });

        // Insertar el botón antes del botón "Agregar al carrito"
        const botonAgregar = card.querySelector('.btn-agregar');
        card.insertBefore(botonInfo, botonAgregar);
    }
}

// Array para guardar los productos del carrito
let carritoItems = [];

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carritoCompras');
    if (carritoGuardado) {
        carritoItems = JSON.parse(carritoGuardado);
    }
    actualizarContador();
}

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carritoCompras', JSON.stringify(carritoItems));
}

// Función para agregar un producto al carrito
function agregarAlCarrito(numeroProducto) {
    // Buscar el producto
    let producto = null;
    for (let i = 0; i < productosArray.length; i++) {
        if (productosArray[i].id === numeroProducto) {
            producto = productosArray[i];
            break;
        }
    }

    if (producto === null) {
        return;
    }

    // Verificar si el producto ya está en el carrito
    let encontrado = false;
    for (let i = 0; i < carritoItems.length; i++) {
        if (carritoItems[i].id === numeroProducto) {
            carritoItems[i].cantidad = carritoItems[i].cantidad + 1;
            encontrado = true;
            break;
        }
    }

    // Si no está en el carrito, agregarlo
    if (!encontrado) {
        const nuevoItem = {
            id: producto.id,
            name: producto.name,
            amount: producto.amount,
            cantidad: 1
        };
        carritoItems.push(nuevoItem);
    }

    // Guardar en localStorage y actualizar contador
    guardarCarrito();
    actualizarContador();

    // Mostrar mensaje
    alert(producto.name + ' agregado al carrito');
}

// Función para actualizar el contador del carrito
function actualizarContador() {
    let totalItems = 0;
    for (let i = 0; i < carritoItems.length; i++) {
        totalItems = totalItems + carritoItems[i].cantidad;
    }

    const contador = document.querySelector('.contador');
    contador.textContent = totalItems;
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    let contenido = "=== CARRITO DE COMPRAS ===\n\n";

    if (carritoItems.length === 0) {
        contenido += "Tu carrito está vacío";
        alert(contenido);
    } else {
        let total = 0;
        for (let i = 0; i < carritoItems.length; i++) {
            const item = carritoItems[i];
            const subtotal = item.amount * item.cantidad;
            contenido += item.name + "\n";
            contenido += "Cantidad: " + item.cantidad + "\n";
            contenido += "Precio: $" + item.amount.toLocaleString() + "\n";
            contenido += "Subtotal: $" + subtotal.toLocaleString() + "\n\n";
            total = total + subtotal;
        }
        contenido += "TOTAL: $" + total.toLocaleString();
        contenido += "\n\n¿Qué deseas hacer?";

        // Mostrar el carrito y preguntar qué hacer
        alert(contenido);

        // Preguntar qué acción tomar
        const accion = prompt("Escribe:\n1 - Finalizar compra\n2 - Vaciar carrito\n3 - Cerrar");

        if (accion === "1") {
            finalizarCompra();
        } else if (accion === "2") {
            vaciarCarrito();
        }
        // Si escribe "3" o cualquier otra cosa, simplemente se cierra
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    const confirmar = confirm("¿Estás seguro de que quieres vaciar el carrito?");
    if (confirmar) {
        carritoItems = [];
        guardarCarrito();
        actualizarContador();
        alert("Carrito vaciado");
    }
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carritoItems.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    let total = 0;
    for (let i = 0; i < carritoItems.length; i++) {
        total = total + (carritoItems[i].amount * carritoItems[i].cantidad);
    }

    const confirmar = confirm("¿Confirmar compra por $" + total.toLocaleString() + "?");
    if (confirmar) {
        carritoItems = [];
        guardarCarrito();
        actualizarContador();
        alert("¡Compra realizada con éxito! Gracias por tu compra.");
    }
}

// Función para agregar eventos a los botones "Agregar al carrito"
function agregarEventosCarrito() {
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    for (let i = 0; i < botonesAgregar.length; i++) {
        const boton = botonesAgregar[i];
        const numeroProducto = i + 1;

        // Agregar evento click
        boton.addEventListener('click', function () {
            agregarAlCarrito(numeroProducto);
        });
    }
}

// Función para agregar evento al ícono del carrito
function agregarEventoCarrito() {
    const iconoCarrito = document.querySelector('.carrito');
    iconoCarrito.addEventListener('click', function () {
        mostrarCarrito();
    });
}

// ===== LIGHTBOX SÚPER SIMPLE =====

// Variable para el lightbox
let lightboxActivo = false;

// Función para abrir imagen en nueva ventana (MUY SIMPLE)
function abrirImagenGrande(src, titulo) {
    if (lightboxActivo) return;
    lightboxActivo = true;

    // Crear el modal simple
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
    `;

    const imagen = document.createElement('img');
    imagen.src = src;
    imagen.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    `;

    const titulo_div = document.createElement('div');
    titulo_div.textContent = titulo;
    titulo_div.style.cssText = `
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        background: rgba(0,0,0,0.7);
        padding: 10px 20px;
        border-radius: 5px;
        font-family: Arial, sans-serif;
    `;

    modal.appendChild(imagen);
    modal.appendChild(titulo_div);

    // Cerrar al hacer clic
    modal.addEventListener('click', function () {
        document.body.removeChild(modal);
        lightboxActivo = false;
    });

    // Cerrar con ESC
    const cerrarConEsc = function (e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            lightboxActivo = false;
            document.removeEventListener('keydown', cerrarConEsc);
        }
    };
    document.addEventListener('keydown', cerrarConEsc);

    document.body.appendChild(modal);
}

// Función para configurar las imágenes (SIMPLE)
function configurarImagenes() {
    const imagenes = document.querySelectorAll('.producto-card img, .hero-image img, .card img');

    imagenes.forEach(function (img) {
        img.style.cursor = 'pointer';
        img.title = 'Clic para ampliar';

        img.addEventListener('click', function () {
            let titulo = 'Imagen';

            // Obtener título simple
            const card = img.closest('.producto-card');
            if (card) {
                const h3 = card.querySelector('h3');
                if (h3) titulo = h3.textContent;
            } else if (img.closest('.hero-image')) {
                titulo = 'Bicicleta Destacada';
            } else if (img.closest('.card')) {
                titulo = 'Cliente';
            }

            abrirImagenGrande(img.src, titulo);
        });
    });
}

// Función que se ejecuta cuando la página termina de cargar
function inicializar() {
    // Paso 1: Generar los productos 
    productosArray = generarProductos();

    // Paso 2: Crear botones de información 
    crearBotonesInfo();

    // Paso 3: Cargar carrito desde localStorage 
    cargarCarrito();

    // Paso 4: Agregar eventos a botones de carrito
    agregarEventosCarrito();

    // Paso 5: Agregar evento al ícono del carrito
    agregarEventoCarrito();

    // Paso 6: Configurar imágenes para lightbox simple
    configurarImagenes();

    console.log("=== APLICACIÓN INICIALIZADA ===");
    console.log("Productos cargados:", productosArray.length);
}

// Ejecutar la función inicializar cuando la página esté lista
document.addEventListener('DOMContentLoaded', function () {
    inicializar();
});
