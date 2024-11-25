document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseInt(document.getElementById('altura').value);

    if (peso && altura) {
        let imc = calcularIMC(peso, altura);
        let estado = obtenerEstado(imc);

        document.getElementById('imcResultado').innerText = `Tu IMC es: ${imc.toFixed(2)}`;
        document.getElementById('estadoResultado').innerText = `Estado: ${estado}`;
        document.getElementById('resultado').style.display = 'block';
    } else {
        alert("Por favor, introduce valores válidos.");
    }
});

export function calcularIMC(peso, altura) {
    let alturaMetros = altura / 100;
    return peso / (alturaMetros * alturaMetros);
}

export function obtenerEstado(imc) {
    if (imc < 18.5) {
        return "Delgadez";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
