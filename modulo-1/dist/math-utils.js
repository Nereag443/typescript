"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return null;
    }
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}
function calcularMediana(numeros) {
    if (numeros.length === 0) {
        return null;
    }
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(numerosOrdenados.length / 2);
    if (numerosOrdenados.length % 2 === 0) {
        return (numerosOrdenados[mitad - 1] + numerosOrdenados[mitad]) / 2;
    }
    else {
        return numerosOrdenados[mitad];
    }
}
function filtrarAtipicos(numeros, limite) {
    return numeros.filter(num => Math.abs(num) <= limite);
}
