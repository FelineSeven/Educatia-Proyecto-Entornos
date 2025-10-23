![Banner](img/EDUCATIA.png)


JIRA: https://felineseven9.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?atlOrigin=eyJpIjoiZGRjMDliNGJkODAxNDA0ZjhlOTgwM2JkNGIxN2VkNWUiLCJwIjoiaiJ9

Este proyecto es una aplicación CRUD desarrollada para la gestión de cursos y sus temas asociados.
Cada curso puede tener múltiples temas, y el sistema permite realizar las operaciones básicas de creación, lectura, actualización y eliminación (Create, Read, Update, Delete) tanto para cursos como para temas.

El sistema implementa autenticación y autorización basada en roles, utilizando JWT (JSON Web Token) para el control de acceso.
Dependiendo del rol asignado al usuario, se definen los permisos sobre las funcionalidades del sistema.

## **Arquitectura y Tecnologías Utilizadas**

- **Backend:** Spring Boot (Java)

- **Dependencias principales:**

 - Spring Web
 - Spring Data JPA
 - Spring Security
 - JWT (JSON Web Token)
 - MySQL o MariaDB (Base de Datos)

- **Gestión de dependencias:** Maven
- **Pruebas de API:**  Swagger UI / Postman
