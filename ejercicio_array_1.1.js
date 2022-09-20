"use strict";

let array1 = [];
let nuevoArray = [];
let arr1 = [5, 10, 3, 8];
let arr2 = [];

function cargarElemento () {
    array1.push("Hola");
}

function largoArray () {
    let largo = parseInt(prompt("Ingrese un el número que configurará el largo del Array"));

    let len = nuevoArray.length;
    if (nuevoArray.length > 0) {
        for (let i = 0; i < len; i++) {
            nuevoArray.pop();
        }
    }

    for (let i = 0; i < largo; i++) {
        nuevoArray.push("null");
    }
}

function invertirArray () {
    let len = arr1.length;

    for (let i = len -1; i > - 1; i--) {
        arr2.push(arr1[i]);
    }
}

function copiarArray () {
    let len = Math.ceil(arr1.length / 2);

    for (let i = 0; i < len; i++) {
        arr2.push(arr1[i]);
    }
}

function valorMaximo () {
    let valorMaximo = 0;

    for (let numero of arr1) {
        if (numero > valorMaximo) {
            valorMaximo = numero;
        }
    }

    console.log(valorMaximo);
}

function valorMinimo () {
    let valorMinimo = Number.POSITIVE_INFINITY;

    for (let numero of arr1) {
        if (numero < valorMinimo) {
            valorMinimo = numero;
        }
    }

    console.log(valorMinimo);
}