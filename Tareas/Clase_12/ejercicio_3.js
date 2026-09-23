import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el nombre del empleado: ", (nombre) => {
  rl.question("Ingrese el salario del empleado: ", (salario) => {
    rl.question("Ingrese los años trabajados: ", (anios) => {

      salario = parseFloat(salario);
      anios = parseInt(anios, 10);

      if (anios >= 5) {
        const bonificacion = salario * 0.10;
        console.log(`\nEmpleado: ${nombre}`);
        console.log(`Bonificación obtenida: $${bonificacion.toFixed(2)}`);
      } else {
        console.log(`\nEl empleado ${nombre} no aplica para la bonificación por tener menos de 5 años de antigüedad.`);
      }

      rl.close();

    });
  });
});


