![Banner](img/EDUCATIA.png)


JIRA: https://felineseven9.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?atlOrigin=eyJpIjoiZGRjMDliNGJkODAxNDA0ZjhlOTgwM2JkNGIxN2VkNWUiLCJwIjoiaiJ9

Educatia es un proyecto enfocado en la gestión de actividades evaluativas relacionadas con los temas vistos en cada curso al que un estudiante esté matriculado.
Su objetivo es ofrecer una herramienta sencilla e intuitiva que facilite la práctica de los conceptos aprendidos en las asignaturas, así como el acceso a la información y materiales que los profesores compartan a través de la plataforma.

Este proyecto actualmente cuenta con las operaciones CRUD desarrolladas para la gestión de cursoos, temas, examenes, preguntas y respuestas asociadas.
Cada curso puede tener múltiples temas, y el sistema permite realizar las operaciones básicas de creación, lectura, actualización y eliminación (Create, Read, Update, Delete) tanto para cursos como para temas.

El sistema implementa autenticación y autorización basada en roles, utilizando JWT (JSON Web Token) para el control de acceso.
Dependiendo del rol asignado al usuario, se definen los permisos sobre las funcionalidades del sistema.

## **Arquitectura y Tecnologías Utilizadas**

**Backend:** Spring Boot (Java)

**Dependencias principales:**

 - Spring Web
 - Spring Data JPA
 - Spring Security
 - JWT (JSON Web Token)
 - MySQL o MariaDB (Base de Datos)

 **Gestión de dependencias:** Maven
 
 **Pruebas de API:**  Swagger UI / Postman
 
## **Funcionalidades Principales**

### **CRUD de Cursos**
- Crear un nuevo curso  
- Consultar todos los cursos  
- Consultar curso por ID  
- Actualizar datos de un curso  
- Eliminar curso  

### **CRUD de Temas (asociados a cada curso)**
- Crear tema dentro de un curso  
- Listar temas de un curso  
- Consultar tema específico  
- Actualizar tema  
- Eliminar tema  

### **CRUD de Examenes (asociados a cada tema)**
- Crear un examen dentro de un tema
- Consultar todos los examenes
- Consultar examenes por ID
- Actualizar examenes
- Eliminar examenes

### **CRUD de Preguntas (asociadas a cada Examen)**
- Crear preguntas dentro de un examen
- Consultar todas las preguntas
- Consultar preguntas por ID
- Consultar preguntas filtradas por ID de examen
- Actualizar preguntas
- Eliminar preguntas

### Modelo de Base de Datos
![Database](Diagrama Entidad Relación educatia.jpg)
## **Seguridad con Roles**

El sistema maneja roles de usuario con permisos específicos:

| **Rol**        | **Descripción** | **Permisos** |
|----------------|-----------------|---------------|
| **ADMIN**      | Administrador del sistema | Acceso total a los CRUD de cursos y temas |
| **PROFESOR**   | Creador o editor de cursos | Puede crear y editar cursos y temas |
| **ESTUDIANTE** | Usuario con permisos de lectura | Solo puede visualizar los cursos y temas |

