let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de posiciones ")
);
let indice: number;
let arrayAños: number[] = new Array(dimensionArreglo);
let arrayAltura: number[] = new Array(dimensionArreglo);
let arrayNombres: string[] = new Array(dimensionArreglo);
let edad: number;
let altura: number;
let nombre: string;
let numPosicion: number;
let i: number;
let j: number;

for (numPosicion = 0; numPosicion < dimensionArreglo; numPosicion++) {
  nombre = String(prompt(" Nombre " + (numPosicion + 1)));
  edad = Number(prompt(" Edad " + (numPosicion + 1)));
  altura = Number(prompt(" Altura " + (numPosicion + 1)));
  i = 0;
  while (i < numPosicion && arrayAños[i] <= edad && arrayAltura[i] < altura) {
    //error
    i++;
  }
  for (j = numPosicion; j > i; j--) {
    arrayNombres[j] = arrayNombres[j - 1];
    arrayAños[j] = arrayAños[j - 1];
    arrayAltura[j] = arrayAltura[j - 1];
  }
  arrayNombres[i] = nombre;
  arrayAños[i] = edad;
  arrayAltura[i] = altura;
}

for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "Posición",
    indice + 1,
    ": Nombre -",
    arrayNombres[indice],
    " Edad -",
    arrayAños[indice],
    " Altura -",
    arrayAltura[indice]
  );
}
