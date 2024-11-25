import { calcularIMC, obtenerEstado } from '../js/script.js';


function testCalcularIMC() {
    console.log("Ejecutando test para calcularIMC...");

    const peso = 70;
    const altura = 175;
    const imc = calcularIMC(peso, altura);

    console.assert(imc === 22.86, `Expected 22.86 but got ${imc}`);
    console.log("Test para calcularIMC completado.");
}

function testObtenerEstado() {
    console.log("Ejecutando test para obtenerEstado...");

    const imc = 22.86;
    const estado = obtenerEstado(imc);

    console.assert(estado === "Normal", `Expected Normal but got ${estado}`);
    console.log("Test para obtenerEstado completado.");
}

testCalcularIMC();
testObtenerEstado();

