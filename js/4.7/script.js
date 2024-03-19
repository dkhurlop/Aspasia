
function calcularIngresado() {
    // Parte (a): Solicitar al usuario un número superior a 10000000 con tres dígitos significativos
    let numeroA = prompt("Introduce un número superior a 10000000:");
    if (numeroA === null) {
        return;
    }
    while (isNaN(numeroA) || parseFloat(numeroA) <= 10000000) {
        numeroA = prompt("El número ingresado no es válido. Introduce un número superior a 10000000:");
        
    }
    const numeroSignificativo = parseFloat(numeroA).toPrecision(3);
    alert(`El número significativo es ${numeroSignificativo}`);

    // Parte (b): Solicitar al usuario un número con 4 decimales y redondearlo a dos decimales
    let numeroB = prompt("Introduce un número con 4 decimales:");
    if (numeroA === null) {
        return;
    }
    while (isNaN(numeroB) || !/^\d+(\.\d{4})$/.test(numeroB)) {
        numeroB = prompt("El número ingresado no es válido. Introduce un número con 4 decimales:");
        
    }
    const numeroRedondeado = parseFloat(numeroB).toFixed(2);
    alert(`El número redondeado a dos decimales es ${numeroRedondeado}`);
}
