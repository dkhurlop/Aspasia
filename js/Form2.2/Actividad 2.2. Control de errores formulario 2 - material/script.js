const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensajeinfo');
const botonEnviar = document.getElementById('boton_enviar');

// Habilitar el botón de enviar cuando se acepte el RGPD
document.getElementById('rgpd').addEventListener('change', () => {
    botonEnviar.disabled = !document.getElementById('rgpd').checked;
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    try {
        // Validar que todos los campos obligatorios estén informados
        if (!formulario.nombre.value || !formulario.email.value || !formulario.mensaje.value ||
            !formulario.rgpd.checked) {
            throw new Error('Por favor, complete todos los campos obligatorios.');
        }

        // Si todas las validaciones pasan, mostrar mensaje de envío exitoso
        mensaje.textContent = 'El formulario se ha enviado correctamente.';
    } catch (error) {
        // Capturar y mostrar el mensaje de error
        mensaje.textContent = error.message;
    }
});


