import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales(cadena) {
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contador = 0;
    for (const char of cadena) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
}

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

function esPalindromo(cadena) {
    const limpia = cadena.toLowerCase().replace(/[\W_]/g, "");
    const invertida = limpia.split("").reverse().join("");
    return limpia === invertida;
}

rl.question("Ingrese una palabra o frase: ", (texto) => {
    console.log("\n--- RESULTADOS ---");
    console.log(`Cantidad de vocales: ${contarVocales(texto)}`);
    console.log(`Cadena invertida: ${invertirCadena(texto)}`);
    console.log(`Es palíndromo: ${esPalindromo(texto) ? "Sí" : "No"}`);
    rl.close();
});