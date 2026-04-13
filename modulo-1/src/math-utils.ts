export function calcularMedia (numeros: number[]): number | null {
    if (numeros.length === 0) {
      return null;
    }
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
  }

export function calcularMediana (numeros: number[]): number | null {
    if (numeros.length === 0) {
      return null;
    }
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(numerosOrdenados.length / 2);
    if (numerosOrdenados.length % 2 === 0) {
      return (numerosOrdenados[mitad - 1] + numerosOrdenados[mitad]) / 2;
    } else {
      return numerosOrdenados[mitad];
    }
  }

  export function filtrarAtipicos (numeros: number[], limite: number): number[] {
    return numeros.filter(num => Math.abs(num)<= limite);
  }