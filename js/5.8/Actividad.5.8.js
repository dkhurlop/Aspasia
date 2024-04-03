function informarItemsElegidos() {
    // Obtener los elementos checkbox de animales
    const checkboxes = document.getElementsByName('animal');
    let selectedAnimals = [];

    // Iterar sobre los checkboxes y obtener los animales seleccionados
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedAnimals.push(checkboxes[i].value);
        }
    }

    // Mostrar mensaje según los animales seleccionados
    if (selectedAnimals.length === 0) {
        alert('¡No ha elegido ningún animal!');
    } else {
        const message = 'Animales que ha elegido que le gustan incluye: ' + selectedAnimals.join(', ');
        alert(message);
    }

    // Retornar false para prevenir el envío del formulario
    return false;
}


// function informarItemsElegidos() {
//     // Obtener los elementos checkbox de animales
//     const checkboxes = document.getElementsByName('animal');
//     let selectedAnimals = [];

//     // Recorrer los checkboxes y obtener los animales seleccionados
//     checkboxes.forEach((checkbox) => {
//         if (checkbox.checked) {
//             selectedAnimals.push(checkbox.value);
//         }
//     });

//     // Mostrar mensaje según los animales seleccionados
//     if (selectedAnimals.length === 0) {
//         alert('¡No ha elegido ningún animal!');
//     } else {
//         const message = 'Animales que ha elegido que le gustan incluye: ' + selectedAnimals.join(', ');
//         alert(message);
//     }

//     // Retornar false para prevenir el envío del formulario
//     return false;
// }
