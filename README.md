
# 🌱 HabitFlow – Backend

Este es el repositorio del backend para la aplicación **HabitFlow**, diseñada para ayudar a los usuarios a crear y mantener hábitos saludables mediante seguimiento, motivación y visualización de progreso.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- TypeORM
- SQL Server

## 📁 Estructura del proyecto

src/

Configuración de la base de datos

├── config/ 

Lógica de los endpoints (CRUD)

├── controllers/ 

Entidades que representan las tablas

├── entities/ 

Definición de rutas

├── routes/ 

Configuración general del app

├── app.ts 

Punto de entrada

└── server.ts 


## 🌐 Endpoints disponibles

El backend incluye al menos 2 endpoints funcionales por entidad:

### 📌 Categorías

- `GET /api/categorias` → Listar categorías
- `POST /api/categorias` → Guardar nueva categoría

### 📌 Hábitos

- `GET /api/habitos` → Listar hábitos
- `POST /api/habitos` → Guardar nuevo hábito

> Puedes consultar todos los endpoints en la documentación con Postman. 👇

## 📬 Documentación Postman

🔗 [Ver colección en Postman]([https://www.postman.com/](https://documenter.getpostman.com/view/39755379/2sB2x5JDJf))  
https://documenter.getpostman.com/view/39755379/2sB2x5JDJf
## 🔗 Repositorios del Proyecto

- 🔙 Backend: [LINK BACKEND](https://github.com/luissxd/back-habitos-main)
- 📱 Frontend (Android): [LINK ANDROID STUDIO](https://github.com/luissxd/HabitFlow)

---

## 🧠 Consideraciones finales

- La base de datos utilizada es SQL Server.
- Se recomienda ejecutar las migraciones o usar el script SQL proporcionado para crear todas las tablas correctamente.
- El backend debe ejecutarse con `npm run dev` tras instalar dependencias (`npm install`).

---

¡Gracias por revisar nuestro proyecto HabitFlow! 😄
