Modelo de datos:

Se utilizan interface para modelar entidades del dominio (Estudiante, Asignatura) debido a su claridad semántica y capacidad de extensión.

Se emplea type para construir uniones discriminadas (EstadoMatricula), permitiendo representar estados mutuamente excluyentes del sistema.

Unión discriminada:

La estructura "EstadoMAtricula" utiliza una propiedad literal (tipo) como discriminantes.

Esto permite a Typescript realizar un narrowing seguro en tiempo de compilación, evitando errores en runtime.

Genéricos:

La interfaz RespuestaAPI<T> permite anstraer la respuesta de red independientemente del tipo de datos.

El método obtenerRecurso<T> garantiza tipado fuerte en el consumo de datos, mejorando la seguridad y mantenibilidad del sistema.