let ventana;

function abrirVentana() {
  ventana = window.open("", "", "width=200,height=200");
}

function redimensionarVentana() {
  if (ventana && !ventana.closed) {
    // ventana.innerWidth = 300;
    // ventana.innerHeight = 300;
    ventana.resizeTo(300, 300);
} else {
    alert("Primero debes abrir la ventana.");
  }
}
