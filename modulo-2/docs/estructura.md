Para el modelo de datos se utilizan:
 - interface para modelar entidades del dominio (Estudiante, Asignatura) por la claridad semántica y capacidad de extensión 
 - type para construir uniones discriminadas (EstadoMatricula), permitiendo representar estados mutuamente excluyentes del sistema.

Unión discriminada:
 - "EstadoMatricula" utiliza una propiedad literal (tipo) como discriminantes. Esto permite a Typescript realizar un narrowing seguro en tiempo de compilación, evitando errores en runtime.

Genéricos:
 - RespuestaAPI<T> permite anstraer la respuesta de red independientemente del tipo de datos.
 - obtenerRecurso<T> garantiza tipado fuerte en el consumo de datos, mejorando la seguridad y mantenibilidad del sistema.