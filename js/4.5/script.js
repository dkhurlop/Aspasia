const anyadirNumero = () => {
    const numeros = [30, 12, 80, 75];

    const mensaje = numeros.join(" / ");

    const numeroUsuario = prompt(`Escribe un número. Este número debe estar comprendido entre los de esta lista: ${mensaje}`);
    // Verificar si el valor ingresado es un número y está dentro del rango
    if (isNaN(numeroUsuario) || numeroUsuario <= numeros[0] || numeroUsuario >= numeros[numeros.length - 1]) {
        alert("Lo sentimos, no podemos añadir el número a nuestra lista.");
    } else {
        // Convertir el número ingresado a un entero y añadirlo al array
        numeros.push(parseInt(numeroUsuario));

        // Ordenar el array de manera ascendente
        numeros.sort((a, b) => a - b);

        const nuevoMensaje = numeros.join(" / ");

        alert(`El nuevo listado es: ${nuevoMensaje}`);
    }
}
