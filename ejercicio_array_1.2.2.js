"use strict";

let listaMaterias = [];
let nombreAlumno;

function cargarAlumnos () {
    nombreAlumno = prompt("Escribe el nombre del alumno o alumna");

    do {
        let materia = prompt(`Carga las materias de ${nombreAlumno}`);
        listaMaterias.push(materia);
    } while (confirm("¿Quieres cargar otra materia?"));
}

function mostrarLista () {
    console.log(`La lista de materias que cursa ${nombreAlumno}`);

    for (let i of listaMaterias) {
        console.log(`- ${i}`);
    }
}