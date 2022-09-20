"use strict";

let listaAlumnos = [];

function cargarAlumnos () {
    let alumno = prompt("Escribe el nombre del alumno");

    listaAlumnos.push(alumno);
}

function mostrarAlumnos () {
    let len = listaAlumnos.length;

    for (let i of listaAlumnos)
    console.log(`- ${i}`)
}