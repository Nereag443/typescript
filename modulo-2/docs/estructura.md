## Modelo de datos y arquitectura de acceso a datos

En este módulo se ha diseñado un modelo de datos tipado utilizando TypeScript con el objetivo de mejorar la robustez, mantenibilidad y escalabilidad del sistema. Se han aplicado principios de tipado estático, uso de genéricos y estructuras avanzadas como uniones discriminadas.

## Uso de interface vs type

Para definir las entidades principales del dominio (como Estudiante o Asignatura), se ha optado por el uso de interface.

Motivos:
Las interface están diseñadas específicamente para describir la forma de los objetos.
Permiten extensión (extends), lo cual facilita la reutilización.
Son más adecuadas en modelos orientados a objetos.

Ejemplo:

```typescript
interface Estudiante {
  readonly id: string;
  nombre: string;
  edad: number;
}
```

Por otro lado, type se ha utilizado para:

Tipos primitivos o alias semánticos
Uniones de tipos (union types)
Composición mediante intersecciones

Ejemplo:

```typescript
type Estado = "ACTIVO" | "INACTIVO";
```

----

### Unión Discriminada: EstadoMatricula

Se ha implementado una unión discriminada para modelar los distintos estados de una matrícula:

```typescript
type EstadoMatricula = 
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;
```

#### Ventajas:
Representa únicamente estados válidos del sistema.
Permite a TypeScript inferir correctamente el tipo en cada caso.
Evita errores en tiempo de ejecución al acceder a propiedades inexistentes.

Cada estado tiene una propiedad común (tipo) que actúa como discriminante:

```typescript
interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}
```

----

### Análisis Exhaustivo con never

En la función generarReporte, se ha implementado un switch con comprobación exhaustiva:

```typescript
default:
  const error: never = estado;
  throw new Error("Estado no manejado");
```

#### Beneficios:
Garantiza que todos los casos posibles están contemplados.
Si se añade un nuevo estado en el futuro, el compilador generará un error si no se gestiona.
Mejora la escalabilidad del sistema.

----

### Uso de Genéricos en la capa de servicios

Se ha diseñado una interfaz genérica para modelar respuestas de API:

```typescript
interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}
```

Y un método genérico:

```typescript
function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>
```

#### Ventajas:

Permiten reutilizar la misma lógica para distintos tipos de datos.
Mantienen el tipado fuerte sin duplicar código.
Aseguran coherencia entre la petición y la respuesta.

Ejemplo de uso:

```typescript
const respuesta = await obtenerRecurso<Estudiante[]>("/estudiantes");
```
----

### Conclusión

El uso de TypeScript ha permitido:

 - Detectar errores en tiempo de compilación.
 - Definir contratos claros mediante interfaces.
 - Modelar estados complejos de forma segura con uniones discriminadas.
 - Reutilizar lógica mediante genéricos.

En comparación con JavaScript, este enfoque reduce significativamente los errores en tiempo de ejecución y mejora la mantenibilidad del código.