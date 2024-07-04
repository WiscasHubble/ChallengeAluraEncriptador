let selectedText = ''; //almacenamos el texto en un array

function selectText() {
    // Seleccionamos el textarea por su ID y luego guardamos su valor
    const textInput = document.getElementById('txtArea').value;

    // Comprobamos si todo el texto está en minúsculas
    if (textInput === textInput.toLowerCase()) {

        selectedText = textInput;
        return textInput;
    } else {

        console.error("El texto debe estar en minúsculas.");
        return null;
    }
}

function encriptarTexto() {
    // Llamamos a selectText para obtener el texto seleccionado
    const textToEncript = selectText();

    // Si selectText devolvió un texto válido
    if (textToEncript !== null) {
        // Realizamos los reemplazos y guardamos el texto encriptado en el array
        const encryptedText = textToEncript
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        console.log(encryptedText);

        return encryptedText;

    } else {
        console.error("No se ha seleccionado ningún texto");
    }
}


function desencriptarTexto() {
    const textToDecrypt = selectText();

    if (textToDecrypt !== null) {
        const decryptedText = textToDecrypt

            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        console.log(decryptedText);
        return decryptedText;

    } else {
        console.error("No se ha seleccionado texto para desencriptar.");
    }
}

//llamamos aquí a los eventos para no tener que escribirlos en el html y tener un mejor control sobre ellos
document.getElementById('encriptarBtn').onclick = encriptarTexto;
document.getElementById('desencriptarBtn').onclick = desencriptarTexto;
