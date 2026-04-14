export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[]
}

export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve) => { 
        setTimeout(() => {
            if (endpoint === "/usuarios") {
                resolve({
                    codigoEstado: 200,
                    exito: true, 
                    datos: {} as T, 
                });
                return;
            } if (endpoint === "/error") {
                resolve ({ 
                    codigoEstado: 500, 
                    exito: false, 
                    datos: {} as T,
                    errores: ["Error al obtener recursos"]
                });
                return;
            }
            resolve({
                codigoEstado: 404, 
                exito: false, 
                datos: {} as T, 
                errores: ["Recurso no encontrado"]
            });
        }, 1000);
    });
}