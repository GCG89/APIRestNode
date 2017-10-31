# APIRest

ApiRest para gestión de usuarios creada con Node + Express + MongoDb

## Intro

Aplicación sencilla para la creación de una API de usuarios a partir de un formulario.
Es necesario tener instalado Node y MongoDB en el servidor así como los modulos utilizados en el proyecto (Express, body-parser, path)

### Métodos soportados

GET
```
  [*] getUser - Devuelve todos los usuarios en la API - Ruta: /api/users
  [*] getUser - Devuelve un usuario a partir de un ID suministrado - Ruta: /api/users/:userId
```
PUT
```  
  [*] updateUser - Actualiza los valores seleccionados a partir del ID del usuario que queremos modificar - Ruta: /api/users/:userId
```
DELETE
```
  [*] deleteUser - Elimina el usuario a partir del ID suministrado - Ruta: /api/users/:userId
```
