function crearCuentaBancaria() {
    // Pedir al usuario los datos de la cuenta
    const nombre = prompt("Introduce el nombre del titular:");
    const apellidos = prompt("Introduce los apellidos del titular:");
    const saldo = parseFloat(prompt("Introduce el saldo inicial de la cuenta:"));
  
    // Validar que el saldo sea un número
    if (!Number.isNaN(saldo)) {
      // Crear el objeto cuentaBancaria con los datos proporcionados por el usuario
      const cuentaBancaria = {
        nombreTitular: nombre,
        apellidosTitular: apellidos,
        saldo: saldo
      };
  
      // Mostrar un mensaje con los datos de la cuenta bancaria creada
      const mensaje = `Se ha creado una nueva cuenta bancaria con los siguientes datos:\n\n
                      Nombre del titular: ${cuentaBancaria.nombreTitular}\n
                      Apellidos del titular: ${cuentaBancaria.apellidosTitular}\n
                      Saldo inicial: ${cuentaBancaria.saldo.toFixed(2)} euros`;
  
      alert(mensaje);
    } else {
      alert("El saldo introducido no es válido.");
    }
  }
  