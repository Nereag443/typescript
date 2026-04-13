export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[]
}

export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve) => { setTimeout(() => {
    const respuesta: RespuestaAPI<T> = {codigoEstado: 0, exito: true, datos: {} as T};
    resolve(respuesta);
    }, 1000); 
});
}