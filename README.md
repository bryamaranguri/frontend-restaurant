
# Restaurante E-commerce 🍽️

Este proyecto es un **e-commerce de restaurante** desarrollado con **React** y **Vite**. Brinda a los usuarios la posibilidad de explorar un menú interactivo, gestionar su carrito de compras y realizar pedidos en línea con un diseño moderno y totalmente responsive.

## 🚀 [Demo en Vercel](https://frontend-restaurant-iota.vercel.app/)

---

## 🌟 Características principales

- 🌐 **Exploración del menú**: Descubre los platos disponibles con una interfaz intuitiva.  
- 🛒 **Gestión del carrito de compras**: Añade, elimina o ajusta la cantidad de productos fácilmente.  
- 💳 **Realización de pedidos**: Simulación del proceso de pago en línea.  
- 📱 **Diseño responsive**: Totalmente optimizado para dispositivos móviles, tablets y escritorio.  
- 🎨 **Estilo moderno y personalizable**: Diseño atractivo y adaptable a tus necesidades.  

---

## 🛠️ Tecnologías utilizadas

- **[React](https://reactjs.org/):** Librería de JavaScript para construir interfaces de usuario.  
- **[Vite](https://vitejs.dev/):** Herramienta rápida y moderna para desarrollo frontend.  
- **[CSS Modules](https://github.com/css-modules/css-modules):** Para estilos encapsulados y modularización de componentes.  
- **[Cypress](https://www.cypress.io/):** Framework para pruebas de extremo a extremo.  

---

## 📋 Requisitos previos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- **[Node.js](https://nodejs.org/):** Versión 14 o superior.  
- **[npm](https://www.npmjs.com/):** Administrador de paquetes.  

---

## 🚀 Instalación

1. **Clona este repositorio**:

   \`\`\`bash
   git clone https://github.com/bryamaranguri/frontend-restaurant.git
   \`\`\`

2. **Accede al directorio del proyecto**:

   \`\`\`bash
   cd frontend-restaurant
   \`\`\`

3. **Instala las dependencias**:

   \`\`\`bash
   npm install
   \`\`\`

4. **Inicia el proyecto en modo desarrollo**:

   \`\`\`bash
   npm run dev
   \`\`\`

   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📂 Estructura del proyecto

\`\`\`plaintext
├── public/                  # Archivos públicos (imágenes y fuentes compartidas)
├── src/                     # Código fuente principal
│   ├── assets/              # Archivos estáticos como imágenes e íconos
│   ├── components/          # Componentes reutilizables de React
│   │   ├── AppDownload.jsx  # Descarga de la app
│   │   ├── ExploreMenu.jsx  # Exploración del menú
│   │   ├── FoodDisplay.jsx  # Pantalla de productos
│   │   ├── FoodItem.jsx     # Componente para cada producto
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Header.jsx       # Cabecera de la aplicación
│   │   ├── LoginPopup.jsx   # Popup de inicio de sesión
│   │   └── Navbar.jsx       # Barra de navegación
│   ├── context/             # Contexto global (Store)
│   ├── pages/               # Páginas principales
│   │   ├── Cart.jsx         # Página del carrito
│   │   ├── Home.jsx         # Página principal
│   │   ├── MyOrders.jsx     # Pedidos realizados
│   │   ├── PlaceOrder.jsx   # Confirmación de pedidos
│   │   └── Verify.jsx       # Verificación de pedidos
│   ├── App.jsx              # Componente raíz de la aplicación
│   ├── index.css            # Estilos globales
│   └── main.jsx             # Punto de entrada del proyecto
├── cypress/                 # Configuración de pruebas end-to-end
├── .gitignore               # Archivos y carpetas ignorados por Git
├── cypress.config.js        # Configuración de Cypress
├── eslint.config.js         # Configuración de ESLint
├── index.html               # Archivo HTML principal
├── package-lock.json        # Registro de dependencias
├── package.json             # Información y scripts del proyecto
├── README.md                # Documentación del proyecto
├── vercel.json              # Configuración de despliegue en Vercel
└── vite.config.js           # Configuración de Vite
\`\`\`

---

## 📜 Scripts disponibles

En el proyecto, puedes ejecutar los siguientes comandos:

- **\`npm run dev\`**: Inicia la aplicación en modo desarrollo.  
- **\`npm run build\`**: Genera una versión optimizada para producción.  
- **\`npm run preview\`**: Sirve la aplicación después de realizar el build para simular producción.  

---

## 🖌️ Personalización

- Edita los componentes dentro de \`src/components\` para añadir nuevas funcionalidades o modificar el diseño.  
- Agrega tus imágenes personalizadas en la carpeta \`src/assets\`.  
- Ajusta la configuración en \`vite.config.js\` si necesitas modificar el entorno de desarrollo o producción.  

---

## 🤝 Contribuir

Si deseas colaborar con este proyecto:

1. Haz un fork del repositorio.  
2. Crea una nueva rama para tu característica:  
   \`\`\`bash
   git checkout -b feature/nueva-caracteristica
   \`\`\`
3. Realiza tus cambios y haz commit:  
   \`\`\`bash
   git commit -m "Agrega nueva característica"
   \`\`\`
4. Haz push de tus cambios:  
   \`\`\`bash
   git push origin feature/nueva-caracteristica
   \`\`\`
5. Abre un **Pull Request** para revisión.  

---

## ✨ Autores

- **[@JohanPinares](https://github.com/JohanEmersonPinares)**  
- **[@BryamAranguri](https://github.com/bryamaranguri)**  
- **[@AEperalesguevara](https://github.com/AEperalesguevara)**  
