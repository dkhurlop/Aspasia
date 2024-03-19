
function comprobacionDni() {
    // Solicitar al usuario el número del DNI
    var numeroDni = prompt("Introduce tu número de DNI (sin letra):");
    // Convertir el número del DNI a un número entero
    numeroDni = parseInt(numeroDni);

    // Solicitar al usuario la letra del DNI
    var letraDni = prompt("Introduce la letra de tu DNI:");
    // Convertir la letra del DNI a mayúsculas
    letraDni = letraDni.toUpperCase();

    // Array con las letras correspondientes al resto de la división del número del DNI entre 23
    var letrasDni = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    var resto = numeroDni % 23;
    var letraCorrecta = letrasDni[resto];

    // Comprobar si la letra introducida coincide con la letra calculada
    if (letraCorrecta === letraDni) {
        alert("El DNI introducido es correcto.");
    } else {
        alert("El DNI introducido es incorrecto.");
    }
}

