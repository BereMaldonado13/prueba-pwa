function pagarDeuda(montoDeuda) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (montoDeuda <= 0) {
          reject("Deuda saldada");
        } else {
          const pago = Math.min(100, montoDeuda);
          const nuevaDeuda = montoDeuda - pago;
          console.log(`Pagando $${pago}, deuda restante: $${nuevaDeuda}`);
          resolve(nuevaDeuda);
        }
      }, 2500);
    });
  }
  
  async function realizarPagosEncadenados(montoInicialDeuda, llamadasRestantes) {
    if (llamadasRestantes === 0) {
      return;
    }
    
    try {
      const deudaActual = await pagarDeuda(montoInicialDeuda);
      await realizarPagosEncadenados(deudaActual, llamadasRestantes - 1);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Uso de la función para realizar 6 llamadas encadenadas
  realizarPagosEncadenados(600, 6);