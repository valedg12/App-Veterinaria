
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
