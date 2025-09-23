
# App Veterinaria

Esta es una aplicación web desarrollada con **React** para la gestión de una veterinaria.  
Permite administrar **clientes (dueños de mascotas)** y **mascotas**, con funcionalidades completas de **CRUD** (Crear, Leer, Actualizar, Eliminar).

---

##  Funcionalidades
- **Clientes**: Agregar, editar y eliminar clientes con nombre, teléfono y correo electrónico.  
  Cada cliente tiene un **ID único**.  
- **Mascotas**: Agregar, editar y eliminar mascotas con nombre, especie, raza, edad y asignación de dueño (vinculado por ID del cliente).  
- La app mantiene la relación **cliente ↔ mascotas**: al eliminar un cliente, se eliminan también sus mascotas asociadas.  

---

##  Tecnologías utilizadas
- **Frontend**: React 18+ con Vite  
- **UI Library**: Material UI  
- **Routing**: React Router DOM  
- **Estado**: Hooks de React (`useState`)  

---

##  Instalación

Clonar el repositorio:
```bash
git clone https://github.com/valedg12/veterinaria-react-app.git
cd veterinaria-react-app

Instalar dependencias
```bash

npm install
```bash

Ejecuta la aplicacion

npm run dev
```
---


##  Uso

###  Navegación
Usa la barra de navegación (Navbar) para ir a:  
- **Inicio (/)** → Página de bienvenida  
- **Clientes (/clients)** → Gestión de clientes  
- **Mascotas (/animals)** → Gestión de mascotas  

###  Gestión de Clientes
- **Ver** la lista de clientes con ID, nombre, teléfono y correo.  
- **Agregar**: Haz clic en *“Agregar Cliente”* para abrir un diálogo con formulario.  
- **Editar**: Haz clic en el ícono de lápiz junto a un cliente.  
- **Eliminar**: Haz clic en el ícono de basura. Esto también eliminará las mascotas asociadas.  

###  Gestión de Mascotas
- **Ver** la lista de mascotas con nombre, especie, raza, edad y nombre del dueño.  
- **Agregar**: Haz clic en *“Agregar Mascota”* y selecciona el dueño de un menú desplegable (basado en clientes existentes).  
- **Editar**: Haz clic en el ícono de lápiz.  
- **Eliminar**: Haz clic en el ícono de basura.  

---

##  Datos de ejemplo
La app inicia con datos simulados:  
- **Clientes**: Juan Pérez y María Gómez  
- **Mascotas**: Firulais (perro de Juan) y Michi (gato de María)  

---
## Estructura del proyecto
src/
 ├── components/
 │   └── Navbar.jsx        # Barra de navegación
 ├── pages/
 │   ├── Inicio.jsx        # Página de inicio
 │   ├── Clients.jsx       # Gestión de clientes
 │   └── Animals.jsx       # Gestión de mascotas
 ├── App.jsx               # Componente raíz con estado global y rutas
 └── main.jsx              # Punto de entrada de la app

## Licencia
Este proyecto está bajo la licencia **MIT**.  
Ver el archivo [LICENSE](LICENSE) para más detalles.  

**Autor:** Valentina Pugliese De Gaetano
**Contacto:** [valentinapugliesedegaetano@gmail.com](mailto:valentinapugliesedegaetano@gmail.com)
