const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    try {
        // Validar que todos los campos obligatorios estén informados
        if (!formulario.nombre.value || !formulario.mail.value || !formulario.descripcion.value || !formulario.presupuesto.value) {
            throw new Error('Por favor, complete todos los campos obligatorios.');
        }

        // Validar que el presupuesto sea un número y esté dentro del rango especificado
        const presupuesto = parseInt(formulario.presupuesto.value);
        if (isNaN(presupuesto) || presupuesto < 150 || presupuesto > 30000) {
            throw new Error('El presupuesto debe ser un número entre 150 y 30000.');
        }

        // Si todas las validaciones pasan, mostrar mensaje de envío exitoso
        mensaje.textContent = 'El formulario se ha enviado correctamente.';
    } catch (error) {
        // Capturar y mostrar el mensaje de error
        mensaje.textContent = error.message;
    }
});