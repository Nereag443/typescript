import {
    calcularMedia,
    calcularMediana,
    filtrarAtipicos
} from "./math-utils";

const datosPrueba = [5, 20, 45, 80 -20, -2]

const filtrados = filtrarAtipicos(datosPrueba, 10);
const media = calcularMedia(filtrados);
const mediana = calcularMediana(filtrados);

console.log("Datos: ", datosPrueba);
console.log("Filtrados: ", filtrados);
console.log("Media: ", media);
console.log("Mediana: ", mediana);

console.log("Media vacía: ", calcularMedia([]));
console.log("Mediana vacía: ", calcularMediana([]));