const readline = require('readline'); // Módulo de Nodejs, lee una línea de entrada desde la terminal

const rl = readline.createInterface({ // Función que crea una interfaz de lectura y escritura
  input: process.stdin,
  output: process.stdout
});

function traducirFrase(frase) { // Función para traducir la frase 
    let resultado = "";
    for (let i = 0; i < frase.length; i++) { // "for" recorre cada letra de la frase
        let letra = frase.charAt(i); // "charAt(i)" Se utiliza para obtener la letra en la posición "i"
        if (esVocal(letra)) {
            resultado += letra + 'p' + letra.toLowerCase(); // Verifica si es vocal, y si es, añade una "p" en el medio 
        } else {
            resultado += letra; // Si no es, no modifica la letra
        }
    }
    return resultado;
}

function esVocal(letra) { // Función para verificar si es vocal 
    return 'aeiouAEIOU'.indexOf(letra) !== -1; // verifica si el resultado es diferente de -1. Si "indexOf" no encuentra la letra dentro de las vocales, devuelve -1
}

 // question(prompt, callback) "Prompt" solicita una información, espera a que el usuario escriba y luego se ejecuta la función "callback" con la respuesta como argumento
rl.question('Ingresa una frase a traducir: ', (frase) => {
    let traduccion = traducirFrase(frase);
    console.log('La traducción a Idioma P es:', traduccion);
    rl.close();
  });

