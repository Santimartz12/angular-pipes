export enum Color{
    azul, negro, rojo,  verde
//   0      1     2      3
}

export interface Heroe{
    nombre: string;
    vuela: boolean;
    color: Color;
}