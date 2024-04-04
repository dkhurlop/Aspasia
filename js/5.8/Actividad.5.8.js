document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('.formularioTipo1');
    formulario.addEventListener('submit', informarItemsElegidos);
});

function informarItemsElegidos(event) {
    event.preventDefault();

    // Obtener los elementos checkbox de animales
    const checkboxes = document.getElementsByName('animal');
    let selectedAnimals = [];

    // Recorrer los checkboxes y obtener los animales seleccionados
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedAnimals.push(checkboxes[i].value);
        }
    }

    // Mostrar mensaje según los animales seleccionados
    const mensajeElemento = document.getElementById('mensaje');
    if (selectedAnimals.length === 0) {
        mensajeElemento.textContent = '¡No ha elegido ningún animal!';
    } else {
        const message = 'Animales que ha elegido que le gustan incluye: ' + selectedAnimals.join(', ');
        mensajeElemento.textContent = message;
    }
}