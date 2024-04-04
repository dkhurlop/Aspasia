document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el enlace al final de la ficha de la película
    const enlaceVideo = document.getElementById('gk');
    
    // Añadimos un event listener para el clic en el enlace
    enlaceVideo.addEventListener('click', function(event) {
        // Prevenimos el comportamiento por defecto del enlace
        event.preventDefault();
        
        // Obtenemos la referencia al contenedor de YouTube
        const contenedorYoutube = document.getElementById('youtube');
        
        // Creamos el iframe para incrustar el vídeo de YouTube
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/D1ZYhVpdXbQ');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        
        // Añadimos el iframe al contenedor de YouTube
        contenedorYoutube.appendChild(iframe);
    });
});
