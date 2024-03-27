window.onload = function() {
    var labels = document.querySelectorAll("label");

    labels.forEach(function(label) {
        var div = document.createElement("div");
        div.className = "campoFormulario";
        label.parentNode.insertBefore(div, label);
        div.appendChild(label);

        // Agregar evento click para cambiar el fondo del div contenedor
        div.addEventListener("click", function() {
            cambiarFondo(div);
        });
    });

    function cambiarFondo(elemento) {
        var color;
        switch (elemento.querySelector("label").htmlFor) {
            case "nombre":
                color = "orange";
                break;
            case "apellidos":
                color = "#ff7f00";
                break;
            case "email":
                color = "yellow";
                break;
            default:
                color = "white";
        }
        elemento.style.background = color;
        
    }
};

