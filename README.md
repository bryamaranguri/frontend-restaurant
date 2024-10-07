# Restaurante E-commerce

Este proyecto es un e-commerce de restaurante desarrollado con **React** + **Vite**. Permite a los usuarios explorar el menú, realizar pedidos en línea y gestionar el carrito de compras.

## Características

- Explorar el menú del restaurante.
- Añadir productos al carrito de compras.
- Gestión del carrito de compras (añadir, eliminar y modificar cantidades).
- Realización de pedidos y simulación de proceso de pago.
- Diseño responsive para dispositivos móviles y de escritorio.
- Interfaz intuitiva y moderna.

## Tecnologías utilizadas

- [React](https://reactjs.org/): Librería de JavaScript para construir interfaces de usuario.
- [Vite](https://vitejs.dev/): Herramienta rápida de desarrollo frontend para React.
- [CSS Modules](https://github.com/css-modules/css-modules): Para estilos encapsulados y modularización de componentes.


## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/bryamaranguri/frontend-restaurant.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd frontend-restaurant
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```


## Scripts disponibles

En el proyecto, puedes ejecutar los siguientes comandos:

### `npm run dev`

Inicia la aplicación en modo desarrollo.

Abre [http://localhost:5173](http://localhost:5173) para verla en tu navegador.

### `npm run build`

Crea una versión optimizada de la aplicación para producción en la carpeta `dist`.

### `npm run preview`

Sirve la aplicación optimizada después de hacer `build` para ver cómo se comporta en producción.

## Estructura del proyecto

```plaintext
├── public/                 # Archivos públicos, como imágenes y fuentes
├── src/                    # Código fuente del proyecto
│   ├── assets/             # Archivos estáticos como imágenes o iconos
│   ├── components/         # Componentes reutilizables de React
│   ├── pages/              # Páginas principales de la aplicación (Home, Menú, Carrito)
│   └── App.jsx             # Componente raíz de la aplicación
│   └── Main.jsx            # Componente donde se enlaza con el App.jsx
├── index.html              # Archivo HTML principal
├── package.json            # Dependencias y scripts del proyecto
└── vite.config.js          # Configuración de Vite
```

## Personalización

Si deseas personalizar el proyecto:

- Modifica los componentes dentro de la carpeta `src/components` para agregar nuevas funcionalidades o cambiar el diseño.
- Ajusta el archivo `vite.config.js` si necesitas cambiar la configuración de compilación o desarrollo.

## Contribuir

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva característica'`).
4. Haz un push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un **Pull Request**.

## Author

- GITHUB - [@JohanPinares](https://github.com/JohanEmersonPinares)
- GITHUB - [@BryamAranguri](https://github.com/bryamaranguri)
