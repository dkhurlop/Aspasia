document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const submitBtn = document.getElementById('registrar');
    const politicaCheckbox = document.getElementById('politica');
    const mensaje = document.getElementById('mensajeinfo');
    const selectGeneros = document.getElementById('geners');
    // Inhabilitar el botón de registro inicialmente
    submitBtn.disabled = true;

    // Habilitar el botón de registro cuando se marque el checkbox de política de privacidad
    politicaCheckbox.addEventListener('change', function () {
        submitBtn.disabled = !politicaCheckbox.checked;
    });

    // Validar los campos del formulario antes de enviar
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        try {
            // Validar que todos los campos obligatorios estén informados
            if (!formulario.name.value || !formulario.surname.value || !formulario.email.value ||
                !formulario.telefon.value || !formulario.password.value || !formulario.geners.value) {
                throw new Error('Por favor, complete todos los campos obligatorios.');
            }

            // Validar el formato del correo electrónico
            if (!validarEmail(formulario.email.value)) {
                throw new Error('El correo electrónico no tiene un formato válido');
            }

            // Validar el formato del teléfono móvil
            const telefonRegex = /^6\d{8}$/; // Empieza con 6 y tiene 9 dígitos

            // Obtener el valor del campo de teléfono móvil y limpiarlo de espacios y otros caracteres no numéricos
            const telefonValue = formulario.telefon.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos

            if (!telefonRegex.test(telefonValue)) {
                throw new Error('El teléfono móvil no tiene un formato válido');
            }

            // Validar el formato del password
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(formulario.password.value)) {
                throw new Error('La contraseña no cumple con los requisitos de formato');
            }

            // Obtener el valor seleccionado
            const valorSeleccionado = selectGeneros.value;
            // Verificar si se ha seleccionado una opción válida
            if (valorSeleccionado === '') {
                throw new Error('Por favor, selecciona un género literario de la lista.');
            }


            // Si todas las validaciones pasan, mostrar mensaje de envío exitoso
            mensaje.textContent = 'El formulario se ha enviado correctamente.';
        } catch (error) {
            // Capturar y mostrar el mensaje de error
            mensaje.textContent = error.message;
        }
    });
});

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}(?:\.[a-zA-Z]{2,4})?$/;
    return emailRegex.test(email);
}
