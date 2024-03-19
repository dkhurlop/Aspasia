
    
    function Medico(nombre, especialidad) {
      this.nombre = nombre;
      this.personasCuradas = 0; // Inicialmente no ha curado a nadie
      this.especialidad = especialidad;

      this.curarPersona = function() {
        this.personasCuradas++;
      };

      this.mostrarDatos = function() {
        document.write(`El médico se llama ${this.nombre}, su especialidad es ${this.especialidad} y lleva curadas ${this.personasCuradas} personas.`);
      };
    }

    // Función para crear un médico y probar sus métodos
    function creaMedico() {

      var medico1 = new Medico("Juan Eslava", "Traumatología");
      var medico2 = new Medico("María López", "Pediatría");

      medico1.mostrarDatos();
      medico2.mostrarDatos();

      medico1.curarPersona();
      medico1.curarPersona();
      medico2.curarPersona();

      // Mostrar los datos actualizados de los médicos
      medico1.mostrarDatos();
      medico2.mostrarDatos();
    }

    
    creaMedico();