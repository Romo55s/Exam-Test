export const questions = [
  // First Section
  {
    text: "¿Qué tipo de datos almacenará tu proveedor de contenido?",
    answers: [
      { text: "Texto, imágenes, videos, metadatos asociados, etc.", correct: true },
      { text: "Datos de latencia", correct: false },
      { text: "Datos de nodo", correct: false },
      { text: "Datos de transferencia", correct: false },
      { text: "Datos de hosts", correct: false },
    ],
  },
  {
    text: "¿Necesitas permitir que otras aplicaciones accedan y modifiquen estos datos?",
    answers: [
      { text: "Sí, a través de API con restricciones", correct: true },
      { text: "No, acceso restringido", correct: false },
      { text: "Depende de la velocidad de transferencia", correct: false },
      { text: "Solo acceso, sin modificación", correct: false },
      { text: "No permitir acceso a otras aplicaciones", correct: false },
    ],
  },
  {
    text: "¿Tu aplicación requiere compartir datos complejos con otras aplicaciones?",
    answers: [
      { text: "Sí, para garantizar interoperabilidad", correct: true },
      { text: "No, mantener datos internos", correct: false },
      { text: "Depende del proveedor de contenido", correct: false },
      { text: "Solo compartir datos simples", correct: false },
      { text: "Restringir completamente el acceso a datos", correct: false },
    ],
  },
  {
    text: "¿Planeas ofrecer funciones de búsqueda o sugerencias personalizadas en tu aplicación?",
    answers: [
      { text: "Sí, para proporcionar resultados relevantes", correct: true },
      { text: "No, mantener la búsqueda simple", correct: false },
      { text: "Depende de la capacidad de los hosts", correct: false },
      { text: "Solo sugerencias estándar", correct: false },
      { text: "No implementar funciones de búsqueda", correct: false },
    ],
  },
  {
    text: "¿Tu aplicación utilizará widgets que necesiten acceder a datos específicos?",
    answers: [
      { text: "Sí, para mostrar contenido dinámico", correct: true },
      { text: "No, los widgets serán estáticos", correct: false },
      { text: "Depende de la velocidad de conexión", correct: false },
      { text: "Solo acceder a datos generales", correct: false },
      { text: "No implementar widgets en la aplicación", correct: false },
    ],
  },
  // Second Section
  {
    text: "¿Qué son los métodos de entrada en Android?",
    answers: [
      { text: "Formas de ingresar datos en una aplicación, como escribir texto o seleccionar opciones en la pantalla táctil o el teclado.", correct: true },
      { text: "Maneras de mejorar la interfaz de usuario en Android.", correct: false },
      { text: "Métodos para organizar datos en dispositivos Android.", correct: false },
      { text: "Estrategias para mejorar la velocidad de entrada en aplicaciones Android.", correct: false },
      { text: "Opciones de salida de datos en dispositivos Android.", correct: false },
    ],
  },
  {
    text: "¿Cómo se personaliza el teclado en pantalla en una aplicación Android?",
    answers: [
      { text: "Cambiando la apariencia y el comportamiento utilizando temas y estilos personalizados.", correct: true },
      { text: "Desactivando el teclado predeterminado de Android.", correct: false },
      { text: "Ajustando la velocidad de respuesta del teclado.", correct: false },
      { text: "Utilizando atajos de teclado específicos para cada aplicación.", correct: false },
      { text: "Configurando la disposición física del teclado en pantalla.", correct: false },
    ],
  },
  {
    text: "¿Por qué es importante la accesibilidad en los métodos de entrada?",
    answers: [
      { text: "Garantiza que las personas con discapacidades puedan usar la aplicación, considerando factores como el soporte de lectura de pantalla y el alto contraste.", correct: true },
      { text: "Aumenta la velocidad de entrada para todos los usuarios.", correct: false },
      { text: "Mejora la precisión de los métodos de entrada en dispositivos Android.", correct: false },
      { text: "Permite el acceso a funciones avanzadas de entrada.", correct: false },
      { text: "Simplifica la interfaz de usuario para una experiencia más rápida.", correct: false },
    ],
  },
  {
    text: "¿Cómo se implementa la entrada de voz en una aplicación Android?",
    answers: [
      { text: "Permitiendo que los usuarios hablen mediante el reconocimiento de voz, que convierte el habla en texto.", correct: true },
      { text: "Integrando un teclado de voz predeterminado en la aplicación.", correct: false },
      { text: "Registrando mensajes de voz y reproduciéndolos en la aplicación.", correct: false },
      { text: "Utilizando comandos de voz para controlar la interfaz de usuario.", correct: false },
      { text: "Incorporando efectos de sonido relacionados con la entrada de voz.", correct: false },
    ],
  },
  {
    text: "¿Cuáles son las mejores prácticas para validar datos de entrada?",
    answers: [
      { text: "Verificar y procesar los datos de entrada de manera segura para evitar problemas de seguridad, como la inyección de código malicioso. Incluye la validación y el saneamiento de datos.", correct: true },
      { text: "Aceptar todos los datos de entrada sin procesamiento adicional.", correct: false },
      { text: "Depender completamente de la seguridad del sistema operativo subyacente.", correct: false },
      { text: "Ignorar la validación de datos para mejorar el rendimiento.", correct: false },
      { text: "Utilizar métodos de validación estándar sin personalización.", correct: false },
    ],
  },
  // Third section
  {
    text: "Propósito principal de la barra de acciones:",
    answers: [
      { text: "Proporcionar acceso rápido a funciones comunes.", correct: true },
      { text: "Mostrar notificaciones emergentes.", correct: false },
      { text: "Permitir interacciones táctiles.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cómo se puede crear un diálogo personalizado en Android Studio?",
    answers: [
      { text: "Utilizando la clase AlertDialog.", correct: true },
      { text: "Editando directamente el archivo XML de diseño.", correct: false },
      { text: "No es posible crear diálogos personalizados en Android Studio.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Diferencia entre menú contextual y menú de opciones:",
    answers: [
      { text: "El menú contextual se muestra al presionar prolongadamente un elemento, mientras que el menú de opciones aparece al tocar un botón específico.", correct: true },
      { text: "El menú contextual siempre contiene opciones de navegación, mientras que el menú de opciones ofrece configuraciones y funcionalidades adicionales.", correct: false },
      { text: "No hay diferencia entre ambos.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Mejores prácticas para mejorar la usabilidad en Android:",
    answers: [
      { text: "Es preferible abrumar a los usuarios con una gran cantidad de opciones para ofrecer una experiencia rica. FALSO", correct: false },
      { text: "Mantener la consistencia visual y simplificar la interfaz son buenas prácticas. VERDADERO", correct: true },
      { text: "La adaptación de la interfaz a diferentes tamaños de pantalla no es importante para la usabilidad. FALSO", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Ejemplo de beneficio al utilizar un diálogo en una aplicación móvil:",
    answers: [
      { text: "Cualquier escenario específico donde un diálogo podría ser útil según la información proporcionada en el texto, como confirmación antes de eliminar un elemento o recopilación de datos importante.", correct: true },
      { text: "Mostrar información en una ventana emergente.", correct: false },
      { text: "Solicitar permisos de usuario.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Quarter section
  {
    text: "¿Qué es un web service?",
    answers: [
      { text: "Un servicio web que permite la comunicación entre aplicaciones a través de la red.", correct: true },
      { text: "Una interfaz de usuario para sitios web.", correct: false },
      { text: "Una aplicación de mensajería en línea.", correct: false },
      { text: "Un sistema operativo para servidores web.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Qué tipos de servicios web se pueden usar en Android?",
    answers: [
      { text: "RESTful y SOAP", correct: true },
      { text: "Solo SOAP", correct: false },
      { text: "Solo RESTful", correct: false },
      { text: "Servicios de transmisión en tiempo real", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuál es la finalidad de los web services?",
    answers: [
      { text: "Facilitar la comunicación entre aplicaciones a través de la red.", correct: true },
      { text: "Mejorar la velocidad de procesamiento en dispositivos móviles.", correct: false },
      { text: "Proporcionar servicios de diseño web.", correct: false },
      { text: "Crear interfaces de usuario interactivas.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Qué ventajas trae el uso de webservices en tu app?",
    answers: [
      { text: "Mejora la interoperabilidad, permite el acceso a servicios externos y facilita la integración de datos.", correct: true },
      { text: "Aumenta la velocidad de procesamiento en dispositivos móviles.", correct: false },
      { text: "Simplifica el diseño de la interfaz de usuario.", correct: false },
      { text: "Limita la comunicación entre aplicaciones.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuál es la diferencia entre SOAP y RESTful?",
    answers: [
      { text: "RESTful utiliza un enfoque basado en recursos y es más liviano, mientras que SOAP sigue un enfoque más estricto y utiliza XML para la transmisión de datos.", correct: true },
      { text: "SOAP utiliza un enfoque basado en recursos y es más liviano, mientras que RESTful sigue un enfoque más estricto y utiliza XML para la transmisión de datos.", correct: false },
      { text: "No hay diferencias significativas entre SOAP y RESTful.", correct: false },
      { text: "SOAP se utiliza solo en dispositivos móviles, mientras que RESTful es más versátil.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Fifth section  
  {
    text: "¿Qué tipos de aplicaciones no son permitidas en Google Play Store?",
    answers: [
      { text: "Aplicaciones gratuitas", correct: false },
      { text: "Aplicaciones que promueven el odio y violencia", correct: true },
      { text: "Aplicaciones que solo funcionan offline", correct: false },
      { text: "Aplicaciones de pago", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuál es una estrategia efectiva para aumentar la visibilidad de una aplicación en la tienda?",
    answers: [
      { text: "Incrementar el precio", correct: false },
      { text: "Optimizar la descripción y utilizar palabras clave relevantes", correct: true },
      { text: "Reducir el tamaño de la aplicación", correct: false },
      { text: "Publicar múltiples versiones de la misma aplicación", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuáles son los requisitos mínimos para publicar una aplicación en Google Play Store?",
    answers: [
      { text: "Navegador web y conexión a Internet", correct: false },
      { text: "Contar con un equipo de desarrollo grande", correct: false },
      { text: "Cuenta de desarrollador y APK firmado", correct: true },
      { text: "Registro en un programa de afiliados de Google", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿En qué consiste el modelo 'premium' de monetización?",
    answers: [
      { text: "Ofrecer la aplicación de forma gratuita y ganar dinero mediante anuncios", correct: false },
      { text: "Cobrar a los usuarios por descargar la aplicación", correct: false },
      { text: "Ofrecer una versión básica gratuita y una versión completa de pago sin anuncios ni limitaciones", correct: true },
      { text: "Solicitar donaciones voluntarias de los usuarios", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "En este modelo los usuarios pagan una tarifa regular (mensual o anual) para acceder a contenido o características premium.",
    answers: [
      { text: "Modelo de Suscripción", correct: true },
      { text: "Modelo Freemium", correct: false },
      { text: "Modelo de Publicidad", correct: false },
      { text: "Modelo de Pago Único", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Sixth section
  {
    text: "¿Qué es ROOM?",
    answers: [
      { text: "Una interfaz de usuario para aplicaciones Android.", correct: false },
      { text: "Una biblioteca para trabajar con bases de datos en Android.", correct: true },
      { text: "Una herramienta de diseño de interiores.", correct: false },
      { text: "Una plataforma de streaming de música.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Detecta errores en consultas o estructuras?",
    answers: [
      { text: "Verdadero", correct: true },
      { text: "Falso", correct: false },
      { text: "Depende del lenguaje de programación utilizado.", correct: false },
      { text: "Solo detecta errores de compilación.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Es una ventaja de ROOM?",
    answers: [
      { text: "Sí, genera automáticamente código repetitivo, ahorrando tiempo y reduciendo la probabilidad de errores.", correct: true },
      { text: "No, ROOM no genera código automáticamente.", correct: false },
      { text: "Solo genera código en proyectos pequeños.", correct: false },
      { text: "Depende del nivel de experiencia del programador.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Utiliza la base de datos SQL?",
    answers: [
      { text: "Verdadero", correct: false },
      { text: "Falso", correct: true },
      { text: "Depende de la versión de ROOM utilizada.", correct: false },
      { text: "Solo utiliza bases de datos NoSQL.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Facilita las operaciones básicas de la base de datos (____) con anotaciones y consultas simples",
    answers: [
      { text: "Crea, Recupera, Usa y Depura", correct: false },
      { text: "Crea, Restablece, Utiliza y Desactiva", correct: false },
      { text: "Copia, Recupera, Utiliza y Depura", correct: false },
      { text: "Crea, Lee, Actualiza y Elimina (CRUD)", correct: true },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Seventh section
  {
    text: "¿Qué es la memoria interna?",
    answers: [
      { text: "El espacio de almacenamiento principal de un dispositivo Android, donde se guardan las aplicaciones, datos del sistema operativo y otros archivos de forma predeterminada.", correct: true },
      { text: "El almacenamiento adicional que se puede insertar en un dispositivo Android.", correct: false },
      { text: "La memoria RAM de un dispositivo Android.", correct: false },
      { text: "El espacio reservado exclusivamente para archivos multimedia en un dispositivo Android.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuál es el método de acceso para el almacenamiento compartido?",
    answers: [
      { text: "A través de la clase StorageManager y sus métodos como getStorageVolumes() para obtener los volúmenes de almacenamiento disponibles y openDocument() para abrir y leer archivos de almacenamiento compartido.", correct: true },
      { text: "Utilizando la clase SharedStorageAccess y su método openStorage().", correct: false },
      { text: "Accediendo directamente a través de la clase FileManager y sus métodos relacionados con el almacenamiento compartido.", correct: false },
      { text: "Mediante el uso de la clase SharedPreferences y sus métodos específicos.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cómo se utiliza el almacenamiento de datos?",
    answers: [
      { text: "Utilizando diferentes opciones como el almacenamiento interno de la aplicación, almacenamiento externo (tarjeta SD) y el almacenamiento compartido, dependiendo de los requisitos de la aplicación y utilizando APIs como FileInputStream, FileOutputStream, SharedPreferences o ContentResolver para leer y escribir datos en el almacenamiento.", correct: true },
      { text: "Limitándose al almacenamiento interno de la aplicación sin considerar otras opciones disponibles.", correct: false },
      { text: "Utilizando exclusivamente el almacenamiento externo para todas las aplicaciones.", correct: false },
      { text: "Dependiendo únicamente de SharedPreferences para todas las operaciones de almacenamiento.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuál es la ruta de acceso mediante la cual Android representa los volúmenes extraíbles?",
    answers: [
      { text: "/storage/SDCard", correct: true },
      { text: "/external/SDCard", correct: false },
      { text: "/removable/SDCard", correct: false },
      { text: "/mnt/SDCard", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Eghth section
  {
    text: "¿Cuál de los usos y aplicaciones no es para sockets en Android Studio?",
    answers: [
      { text: "Aplicaciones de mensajería instantánea en tiempo real", correct: false },
      { text: "Juego multijugador en línea", correct: false },
      { text: "Transferencia puntual de archivos pequeños.", correct: false },
      { text: "Aplicación de control remoto para dispositivos domésticos inteligentes.", correct: true },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Verdadero o falso. Los sockets en Java y Android Studio solo se utilizan para la comunicación cliente-servidor y no son esenciales para la transferencia de archivos ni para la transmisión de datos en tiempo real.",
    answers: [
      { text: "Los sockets en Java y Android Studio son versátiles y esenciales no solo para la comunicación cliente-servidor, sino también para la transferencia de archivos y la transmisión de datos en tiempo real entre dispositivos o programas.", correct: false },
      { text: "Los sockets son exclusivamente para la comunicación cliente-servidor.", correct: true },
      { text: "Depende del tipo de aplicación.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Define el tipo específico de socket utilizado para la escucha de conexiones entrantes en servidores UDP en el contexto de Android Studio.",
    answers: [
      { text: "DatagramSocket.", correct: true },
      { text: "ServerSocket.", correct: false },
      { text: "SocketUDP.", correct: false },
      { text: "UDPServerSocket.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Explica la asociación entre un socket y una dirección IP para la comunicación entre programas.",
    answers: [
      { text: "Un socket se asocia con una dirección IP para establecer la comunicación entre programas. Actúa como un extremo de una conexión y se identifica por una dirección IP y un número de puerto para permitir la comunicación con otro socket en una dirección IP correspondiente.", correct: true },
      { text: "La dirección IP no tiene relación con la comunicación a través de sockets.", correct: false },
      { text: "Los sockets utilizan direcciones MAC en lugar de direcciones IP.", correct: false },
      { text: "Solo se necesita el número de puerto para la comunicación, la dirección IP no es esencial.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Explica en detalle una ventaja relevante del uso de sockets en el desarrollo de aplicaciones para Android Studio, haciendo hincapié en cómo esta característica específica beneficia la comunicación entre dispositivos o programas en un entorno móvil.",
    answers: [
      { text: "Comunicación Bidireccional: Permite enviar y recibir datos simultáneamente, facilitando intercambios eficientes entre dispositivos y servidores. Manejo de Conexiones Intermitentes: Los sockets pueden gestionar conexiones intermitentes, recuperándose automáticamente de interrupciones temporales, lo que es crucial en entornos de red móvil inestables. Escalabilidad: Los sockets son escalables y pueden manejar eficientemente un gran número de conexiones simultáneas, lo que es esencial para aplicaciones con múltiples usuarios o dispositivos conectados al mismo tiempo.", correct: true },
      { text: "Alta velocidad de transferencia de datos: Los sockets garantizan una velocidad de transferencia más rápida que otros métodos de comunicación.", correct: false },
      { text: "Compatibilidad exclusiva con dispositivos Android.", correct: false },
      { text: "Simplicidad en la implementación: Los sockets son más fáciles de implementar que otras tecnologías de comunicación.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Ninth section
  {
    text: "A qué librería pertenece el WorkManager?",
    answers: [
      { text: "Android Jetpack", correct: true },
      { text: "AndroidX", correct: false },
      { text: "Kotlin Coroutines", correct: false },
      { text: "Firebase", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuál es su característica principal?",
    answers: [
      { text: "Utiliza programación asincrónica para realizar operaciones en segundo plano.", correct: false },
      { text: "Proporciona un conjunto de herramientas para el desarrollo de juegos en Android.", correct: false },
      { text: "Ofrece una interfaz de usuario consistente y moderna para aplicaciones Android.", correct: false },
      { text: "Siguen trabajando en segundo plano aún si el sistema se reinicia.", correct: true },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuáles tipos de trabajo persistente existen?",
    answers: [
      { text: "Inmediatas, Larga duración, Diferible", correct: true },
      { text: "Rápidas, Moderadas, Lentas", correct: false },
      { text: "Cortas, Medianas, Largas", correct: false },
      { text: "Primarias, Secundarias, Terciarias", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "El WorkManager se puede ir por dos vías, ¿Cuáles son?",
    answers: [
      { text: "One Time, Recurrente", correct: false },
      { text: "Programado, Manual", correct: false },
      { text: "Sincrónico, Asincrónico", correct: false },
      { text: "One Time, Periodic", correct: true },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "Menciona un ejemplo de uso del WorkManager:",
    answers: [
      { text: "En la implementación de animaciones complejas en la interfaz de usuario.", correct: false },
      { text: "En la gestión de bases de datos locales en una aplicación Android.", correct: false },
      { text: "En el envío de registros de algún usuario a cierta hora del día de manera diaria.", correct: true },
      { text: "En la reproducción de música en segundo plano.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Tenth section
  {
    text: "¿Cuáles son los usos y aplicaciones de la localización?",
    answers: [
      { text: "Geotagging, comercio electrónico, mapas y navegación, salud y ejercicio, redes sociales", correct: true },
      { text: "Procesamiento de imágenes, reproducción de música, juegos en línea, programación web, administración de archivos.", correct: false },
      { text: "Edición de video, diseño gráfico, codificación de software, aprendizaje automático, realidad virtual.", correct: false },
      { text: "Cocina y recetas, viajes y aventuras, noticias y actualizaciones, educación en línea, compras en línea.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Qué es FusedLocationProviderClient?",
    answers: [
      { text: "Es una interfaz gráfica de usuario para el manejo de la localización en dispositivos Android.", correct: false },
      { text: "Es una clase en Android que forma parte de la API de ubicación de Google. Proporciona una interfaz simplificada y eficiente para acceder a servicios de ubicación en dispositivos Android.", correct: true },
      { text: "Es una aplicación de mapas y navegación desarrollada por Google.", correct: false },
      { text: "Es una herramienta de desarrollo para la creación de contenido en realidad aumentada.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Clase en Android que proporciona acceso al servicio de ubicación del dispositivo?",
    answers: [
      { text: "LocationClient", correct: false },
      { text: "LocationService", correct: false },
      { text: "LocationManager", correct: true },
      { text: "LocationProvider", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuál es la diferencia entre los 2 permisos de localización que se añaden al AndroidManifest.xml?",
    answers: [
      { text: "Ambos obtienen la ubicación desde el GPS y son igualmente precisos.", correct: false },
      { text: "Uno obtiene la ubicación desde el GPS y es más preciso, y el otro la toma de la red wifi y es menos preciso.", correct: true },
      { text: "Uno permite el acceso a la ubicación en tiempo real y el otro solo proporciona ubicación estática.", correct: false },
      { text: "Ambos utilizan la red wifi para obtener la ubicación.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Qué significa GPS?",
    answers: [
      { text: "General Positioning System", correct: false },
      { text: "Global Processing Service", correct: false },
      { text: "Geographic Positioning System", correct: false },
      { text: "Sistema de Posicionamiento Global", correct: true },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  // Elevenaba section
  {
    text: "¿Cuál es la importancia de gestionar hilos de ejecución en el desarrollo de aplicaciones para Android?",
    answers: [
      { text: "Evitan bloqueos y mantienen la interfaz receptiva al ejecutar tareas pesadas en segundo plano.", correct: true },
      { text: "Simplifican la estructura del código en aplicaciones pequeñas.", correct: false },
      { text: "Aumentan el rendimiento de la interfaz al ejecutar múltiples tareas en el hilo principal.", correct: false },
      { text: "Permiten la ejecución simultánea de múltiples instancias de la aplicación.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cómo se diferencia el hilo principal (UI Thread) de los hilos secundarios?",
    answers: [
      { text: "UI Thread maneja la interfaz, los secundarios realizan tareas intensivas sin interactuar directamente con la interfaz.", correct: true },
      { text: "Los hilos secundarios son exclusivamente para la manipulación de la interfaz de usuario.", correct: false },
      { text: "El hilo principal es responsable solo de la lógica de fondo.", correct: false },
      { text: "No hay diferencia, todos los hilos realizan tareas similares en una aplicación Android.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Cuáles son las clases o métodos más comunes utilizados para gestionar hilos en Android y en qué situaciones son más apropiados?",
    answers: [
      { text: "AsyncTask, Handler/Looper, Executor/ThreadPoolExecutor. Se eligen según la complejidad y duración de las tareas.", correct: true },
      { text: "ThreadManager, AsyncExecutor, UIHandler. Se eligen de manera arbitraria sin considerar la tarea a realizar.", correct: false },
      { text: "TaskScheduler, BackgroundHandler, ThreadManager. Se eligen según la preferencia del desarrollador.", correct: false },
      { text: "ThreadPoolManager, BackgroundTaskExecutor, UIUpdater. Se eligen al azar para diversificar el código.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Qué desafíos o problemas comunes se pueden presentar al trabajar con múltiples hilos de ejecución en una aplicación Android y cómo se pueden abordar?",
    answers: [
      { text: "Condiciones de carrera, fugas de memoria, actualizaciones de UI desde hilos secundarios. Se solucionan con bloqueos sincronizados, gestión del ciclo de vida de los hilos y métodos específicos para actualizaciones de UI.", correct: true },
      { text: "Baja complejidad de código, falta de concurrencia, falta de paralelismo. Se solucionan aumentando la complejidad de la aplicación.", correct: false },
      { text: "Escasez de recursos, bloqueos de la interfaz, falta de rendimiento. Se solucionan utilizando hilos únicamente en tareas de fondo.", correct: false },
      { text: "Problemas de compatibilidad, aumento de la complejidad del código, falta de modularidad. Se solucionan evitando el uso de hilos en la aplicación.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
  {
    text: "¿Con qué otro nombre se les conoce a los hilos de ejecución?",
    answers: [
      { text: "Threads, subprocesos o hebras.", correct: true },
      { text: "Ejecutores, procesos o conductos.", correct: false },
      { text: "Cadenas, rutas o segmentos.", correct: false },
      { text: "Hilos de proceso, conductos secundarios o rutas de ejecución.", correct: false },
      { text: "Ninguna de las anteriores.", correct: false },
    ],
  },
];
