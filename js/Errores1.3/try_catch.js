const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');
const input = document.getElementById('demo');

boton.addEventListener('click', () => {
    try {
        const valor = parseInt(input.value);
        if (isNaN(valor)) {
            throw new Error('No ha escrito un número');
        } else if (valor < 5) {
            throw new Error('El número escrito es menor que 5');
        } else if (valor > 10) {
            throw new Error('El número escrito es mayor que 10');
        } else if (!input.value) {
            throw new Error('Campo no informado');
        } else {
            mensaje.textContent = 'El número introducido es correcto';
        }
    } catch (error) {
        mensaje.textContent = error.message;
    }
});