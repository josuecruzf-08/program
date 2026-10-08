import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}

function perimetroCuadrado(lado) {
    return 4 * lado;
}

function areaRectangulo(base, altura) {
    return base * altura;
}

function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function perimetroTriangulo(l1, l2, l3) {
    return l1 + l2 + l3;
}

function mostrarMenu() {
    console.log("\n--- FIGURAS GEOMÉTRICAS ---");
    console.log("1. Círculo");
    console.log("2. Cuadrado");
    console.log("3. Rectángulo");
    console.log("4. Triángulo");
    console.log("5. Salir");

    rl.question("Seleccione una figura (1-5): ", (opcion) => {
        switch (opcion) {
            case "1":
                rl.question("Ingrese el radio del círculo: ", (r) => {
                    const radio = Number(r);
                    console.log(`Área: ${areaCirculo(radio).toFixed(2)}`);
                    console.log(`Perímetro: ${perimetroCirculo(radio).toFixed(2)}`);
                    mostrarMenu();
                });
                break;

            case "2":
                rl.question("Ingrese el lado del cuadrado: ", (l) => {
                    const lado = Number(l);
                    console.log(`Área: ${areaCuadrado(lado).toFixed(2)}`);
                    console.log(`Perímetro: ${perimetroCuadrado(lado).toFixed(2)}`);
                    mostrarMenu();
                });
                break;

            case "3":
                rl.question("Ingrese la base del rectángulo: ", (b) => {
                    rl.question("Ingrese la altura del rectángulo: ", (a) => {
                        const base = Number(b);
                        const altura = Number(a);
                        console.log(`Área: ${areaRectangulo(base, altura).toFixed(2)}`);
                        console.log(`Perímetro: ${perimetroRectangulo(base, altura).toFixed(2)}`);
                        mostrarMenu();
                    });
                });
                break;

            case "4":
                rl.question("Ingrese la base del triángulo: ", (b) => {
                    rl.question("Ingrese la altura del triángulo: ", (a) => {
                        rl.question("Ingrese el lado 1: ", (l1) => {
                            rl.question("Ingrese el lado 2: ", (l2) => {
                                rl.question("Ingrese el lado 3: ", (l3) => {
                                    const base = Number(b);
                                    const altura = Number(a);
                                    const lado1 = Number(l1);
                                    const lado2 = Number(l2);
                                    const lado3 = Number(l3);

                                    console.log(`Área: ${areaTriangulo(base, altura).toFixed(2)}`);
                                    console.log(`Perímetro: ${perimetroTriangulo(lado1, lado2, lado3).toFixed(2)}`);
                                    mostrarMenu();
                                });
                            });
                        });
                    });
                });
                break;

            case "5":
                console.log("Saliendo del programa...");
                rl.close();
                break;

            default:
                console.log("Opción no válida.");
                mostrarMenu();
        }
    });
}

mostrarMenu();