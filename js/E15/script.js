 // Obtener la referencia al elemento de la imagen del corazón
 const corazon = document.getElementById('gusta');
        
 // Agregar un event listener para el clic en la imagen del corazón
 corazon.addEventListener('click', function() {
     // Cambiar la src de la imagen del corazón a la versión roja
     corazon.src = 'img/agrada-vermell.png';
 });