# 💎 Andina Labrada - Sitio Web de Orfebrería Artesanal

Este repositorio contiene el código fuente del sitio web de Andina Labrada, una orfebre artesanal argentina. El proyecto está diseñado como una plataforma de presentación de la galería de piezas, optimizada para ofrecer una experiencia de usuario fluida y profesional.

## ✨ Características Principales

Este proyecto ha sido desarrollado con un enfoque en la flexibilidad, el rendimiento y la usabilidad, incorporando las siguientes funcionalidades clave:

### **1. 🖼️ Galería Dinámica y Filtrable**

* **Menú de Filtros Avanzado:** La galería incluye un sistema de filtros interactivo que permite a los usuarios buscar piezas por **tipo** (ej. aros, dijes) y **material** (ej. oro, plata).
* **Filtros Dinámicos:** Las opciones de filtro se obtienen directamente de la base de datos de Firebase, lo que permite a la orfebre añadir nuevas categorías o materiales sin necesidad de modificar el código.
* **Soporte Multi-Material:** El sistema de filtrado es capaz de manejar piezas que contienen más de un material (ej. cobre y alpaca), garantizando una búsqueda precisa y completa.
* **Navegación tipo "Breadcrumbs":** Una barra de navegación muestra la ubicación actual del usuario (`Galería / anillos / cobre`), mejorando la usabilidad y la capacidad de navegación.

### **2. ⚙️ Configuración Centralizada con Firebase**

* **Contenido Dinámico:** La información crítica del sitio, como el número de teléfono de contacto y los mensajes predefinidos de WhatsApp, se almacena en una base de datos de Firebase. Esto permite al administrador del sitio actualizar estos datos en tiempo real sin tener que modificar el código ni desplegar una nueva versión.
* **Integración de Emojis:** El mensaje predefinido de WhatsApp, almacenado en la base de datos, soporta el uso de emojis, mejorando la comunicación con los clientes.

### **3. 📱 Experiencia de Usuario Optimizada**

* **Diseño Responsivo:** El diseño de la galería ha sido optimizado para ser completamente responsivo, adaptándose a diferentes tamaños de pantalla (móviles, tablets y escritorios).
* **Librería de Detección de Dispositivo:** Se utiliza la librería `react-device-detect` para adaptar la funcionalidad del botón de WhatsApp según el dispositivo del usuario, garantizando que los enlaces y los emojis se muestren correctamente en todas las plataformas.
* **Arquitectura de Componentes:** El proyecto está construido con componentes modulares en React, lo que facilita el mantenimiento, la escalabilidad y la reutilización del código.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** [React.js](https://react.dev/)
* **Estilos:** [CSS Modules](https://create-react-app.dev/docs/adding-css-modules/)
* **Base de Datos:** [Firebase (Cloud Firestore)](https://firebase.google.com/docs/firestore)
* **Librerías Adicionales:**    
    * **[React Router DOM](https://reactrouter.com/en/main)**: Librería para manejar la navegación y las rutas del sitio web.
    * **[React Hook Form](https://react-hook-form.com/)**: Librería para la gestión de formularios con validaciones optimizadas.
    * **[React Icons](https://react-icons.github.io/react-icons/)**: Colección de iconos populares de la web para usar en el proyecto.
    * **[React Device Detect](https://www.npmjs.com/package/react-device-detect)**: Para la detección del tipo de dispositivo del usuario y optimización de la experiencia.

## 🚀 Instalación y Despliegue

Sigue estos pasos para poner el proyecto en marcha en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/IGianetti/andina_labrada_web.git](https://github.com/IGianetti/andina_labrada_web.git) # Asegúrate de que esta sea la URL correcta de tu repo
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd andina_labrada_web
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Configura Firebase:**
    * Crea un proyecto en la [Firebase Console](https://console.firebase.google.com/).
    * Configura Cloud Firestore:
        * Crea una colección llamada `galeria` para almacenar los datos de las piezas de orfebrería (asegúrate de que los documentos tengan campos `categoria` y `material` - este último como un array para múltiples materiales).
        * Crea una colección `configuracion` con un documento `atencion` que contenga los campos `celular` (número de WhatsApp) y `mensaje_whatsapp` (mensaje predefinido, con soporte para emojis).
    * Copia tus credenciales de configuración de Firebase en un archivo de entorno (`.env` o similar) en la raíz del proyecto.

5.  **Ejecuta el proyecto en modo de desarrollo:**
    ```bash
    npm run start
    ```
    Esto abrirá la aplicación en tu navegador (usualmente en `http://localhost:3000`).

6.  **Para generar la versión de producción optimizada (antes del despliegue):**
    ```bash
    npm run build
    ```
    Este comando creará una carpeta `build/` con todos los archivos estáticos listos para ser subidos a tu servidor de hosting preferido (ej. Firebase Hosting, Netlify, Vercel).

---