document.addEventListener("DOMContentLoaded", function() {
    const botonesGenerar = document.querySelectorAll(".boton");
    botonesGenerar.forEach(function(boton) {
        boton.addEventListener("click", generarNumerosAleatorios);
    });
});

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
