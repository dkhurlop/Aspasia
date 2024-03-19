// Utilizando función flecha
const diasSemana = () => {
    // Creación de una matriz (array) con los días de la semana
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    // Creación de un mensaje para la consola del navegador que muestre el último elemento de la matriz
    console.log(`El último día de la semana es: ${dias[dias.length - 1]}`);

    // Eliminación del segundo elemento de la matriz
    dias.splice(1, 1);

    // Creación de un mensaje para la consola del navegador que muestre los elementos de la matriz
    console.log(`Los días de la semana son: ${dias.join(", ")}`);
}
