🚴‍♀️ Bicis - Tienda de Bicicletas
Este proyecto consiste en una página web para una tienda de bicicletas con funcionalidad de carrito de compras, desarrollado como parte de un curso de programación básica de HTML, CSS y JavaScript. La página permite a los usuarios ver una selección de bicicletas disponibles para la compra, leer reseñas de clientes, contactar a la tienda y agregar las bicicletas seleccionadas al carrito. Incluye una estructura HTML semántica y estilos CSS básicos con diseño responsivo.

Características:

Catálogo de productos: Visualización de bicicletas diferentes con precios y descripciones
Información detallada: Botón para mostrar/ocultar descripciones ampliadas de cada producto
Carrito de compras: Funcionalidad completa para agregar productos y gestionar compras
Persistencia de datos: El carrito se mantiene al recargar la página usando localStorage
Reseñas de clientes: Sección con testimonios y calificaciones
Formulario de contacto: Integración con Formspree para envío de mensajes
Diseño responsivo: Adaptable a dispositivos móviles y tablets
Mapa de ubicación: Integración con Google Maps

Tecnologías Utilizadas:

HTML5: Estructura semántica y accesible
CSS3: Estilos modernos con Flexbox y Grid
JavaScript: Funcionalidad interactiva y manejo del DOM
Font Awesome: Iconos vectoriales
Google Fonts: Tipografías Montserrat y Roboto
Google Maps: Mapa de ubicación integrado
Formspree: Servicio para formulario de contacto

Estructura del Proyecto:
Carrito de compras/
├── index.html          # Página principal
├── script.js           # Lógica de JavaScript
├── css/
│   └── styles.css      # Estilos CSS
└── images/
    ├── bici1.jpg       # Imágenes de productos
    ├── bici2.jpg
    └── ...
 
Funcionalidades JavaScript
Programación Modular:
Función generarProductos() que crea un array de productos en formato JSON
Cada producto incluye: id, name, description, amount
Los productos se muestran en la consola del navegador

Interactividad:
Botones "Ver más información" en cada producto
Al hacer clic se agrega dinámicamente un párrafo con la descripción completa
Efecto toggle: clic nuevamente oculta la información
Manipulación del DOM para insertar contenido

Carrito de Compras:
Agregar productos al carrito desde las tarjetas de producto
Contador visual que muestra la cantidad de items
Persistencia usando localStorage/sessionStorage
Funciones para mostrar, vaciar y finalizar compra
Cálculo automático de totales

Cómo Usar:

Clonar o descargar el proyecto
Abrir index.html en un navegador web
Navegar por las secciones usando el menú
Explorar productos y usar "Ver más información"
Agregar productos al carrito con los botones correspondientes
Ver carrito haciendo clic en el ícono del carrito
Contactar usando el formulario (requiere reemplazar 'your-form-id' por un ID real de Formspree).
