function generarNumerosAleatorios() {
    const cantidadNumeros = parseInt(prompt("¿Cuántos números aleatorios quiere escribir?"));
    let valorMaximo = parseInt(prompt("¿Cuál es el valor máximo? (este número no puede ser más pequeño que 10)"));
    
    if (valorMaximo < 10) {
        alert("El valor máximo debe ser al menos 10.");
        return;
    }

    let numerosAleatorios = [];
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = ""; // Limpiar el contenido previo
    
    while (numerosAleatorios.length < cantidadNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * valorMaximo) + 1;
        if (!numerosAleatorios.includes(numeroAleatorio)) {
            numerosAleatorios.push(numeroAleatorio);
            const li = document.createElement("li");
            li.textContent = numeroAleatorio;
            resultadoElement.appendChild(li);
        }
    }
}


// function generarNumerosAleatorios() {
    //     // Preguntar al usuario cuántos números aleatorios quiere generar
//     const cantidadNumeros = parseInt(prompt("¿Cuántos números aleatorios quiere escribir?"));

//     // Preguntar al usuario el valor máximo
//     let valorMaximo = parseInt(prompt("¿Cuál es el valor máximo? (este número no puede ser más pequeño que 10)"));
//     if (valorMaximo < 10) {
//         alert("El valor máximo debe ser al menos 10.");
//         return;
//     }

//     // Crear un array para almacenar los números aleatorios
//     let numerosAleatorios = [];

//     // Generar números aleatorios únicos y ordenarlos
//     while (numerosAleatorios.length < cantidadNumeros) {
//         const numeroAleatorio = Math.floor(Math.random() * valorMaximo) + 1;
//         if (!numerosAleatorios.includes(numeroAleatorio)) {
//             numerosAleatorios.push(numeroAleatorio);
//         }
//     }
//     numerosAleatorios.sort((a, b) => a - b);

//     // Mostrar los números aleatorios en el elemento con id "resultado"
//     const resultadoElement = document.getElementById("resultado");
//     resultadoElement.innerHTML = ""; // Limpiar el contenido previo
//     numerosAleatorios.forEach(numero => {
//         const li = document.createElement("li");
//         li.textContent = numero;
//         resultadoElement.appendChild(li);
//     });
// }