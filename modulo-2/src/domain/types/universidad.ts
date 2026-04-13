export interface Estudiante {
    readonly id: string;
    nombre: string;
    apellido: string;
    edad: number;
    carrera: string;
}

export interface Asignatura {
    readonly id: string;
    nombre: string;
    profesor: string;
    estudiantes: Estudiante[];
}

export interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}

export interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            return `Matricula Activa: ${estado.asignaturas.map(a => a.nombre).join(", ")}`;
        case "SUSPENDIDA":
            return `Matricula Suspendida: ${estado.motivo}`;
        case "FINALIZADA":
            return `Matricula Finalizada: ${estado.notaMedia}`;
            default:
                const error: never = estado;
                throw new Error(`Estado de matricula desconocido: ${JSON.stringify(error)}`);
    }
}