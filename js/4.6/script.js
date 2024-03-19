const contarVocales = () => {
    const palabra = prompt("Introduce la palabra que quieres saber el número de vocales:");

    // Convertir la palabra a minúsculas para facilitar la comparación
    const palabraMinusculas = palabra.toLowerCase();

    // Contador para almacenar el número de vocales encontradas
    let contadorVocales = 0;

    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Iterar sobre cada letra de la palabra
    for (let letra of palabraMinusculas) {
        if (vocales.includes(letra)) {
            contadorVocales++;
        }
    }

    // Mostrar el resultado al usuario
    alert(`La palabra "${palabra}" tiene ${contadorVocales} vocales.`);
}

