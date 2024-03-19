function comprobacionDni() {
    const numeroDni = prompt("Introduce tu número de DNI (sin letra):");

    var letraDni = prompt("Introduce la letra de tu DNI:");

    var letrasDni = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    // Calcular la letra correcta
    var resto = numeroDni % 23;
    var letraCorrecta = letrasDni[resto];

    // Comprobar si la letra introducida coincide con la letra calculada
    if (letraCorrecta === letraDni.toUpperCase()) {
        alert("El DNI introducido es correcto.");
    } else {
        alert("El DNI introducido es incorrecto.");
    }
}
