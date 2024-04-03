const preguntas = [
    ["¿Cuál es el resultado de dividir 10 entre 2?", "5"],
    ["Como se dice en inglés libro", "book"],
    ["Java es lo mismo que JavaScript?", "no"],
    ["En JavaScript, con qué operador podemos incrementar un número en una unidad", "++"]
  ];

  document.getElementById("startQuiz").addEventListener("click", () => {
    const nombreUsuario = prompt("Por favor, introduce tu nombre:");
    if (nombreUsuario) {
      let respuestasCorrectas = 0;
      for (const [pregunta, respuesta] of preguntas) {
        const respuestaUsuario = prompt(pregunta);
        if (respuestaUsuario && respuestaUsuario.toLowerCase() === respuesta) {
          alert("Correcto");
          respuestasCorrectas++;
        } else {
          alert(`Incorrecto. La respuesta correcta es ${respuesta}`);
        }
      }
      document.getElementById("resultado").textContent = `${nombreUsuario}, has respondido correctamente a ${respuestasCorrectas} de ${preguntas.length} preguntas.`;
    }
  });