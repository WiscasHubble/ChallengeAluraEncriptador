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
        mostrarResultados(encryptedText);

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

function mostrarResultados(encryptedText) {
    // Seleccionamos el aside por su ID y vaciamos su contenido
    const resultadosAside = document.getElementById('resultados');
    resultadosAside.innerHTML = '';

    // Creamos un nuevo div con una clase llamada 'contenidoResultado' usando template strings
    const newContent = `
        <div class="contenidoResultado">
            <div class="contenidoResultadoParrafo" id = "contenidoResultadoParrafo"><p>${encryptedText}</p></div>
            <div class="copiarResultado"><button class="copiar" id = "copiarBtn">Copiar</button></div>
        </div>
    `;

    // Insertamos el nuevo contenido en el aside
    resultadosAside.innerHTML = newContent;

    document.getElementById('copiarBtn').onclick = copiarTexto; //asignamos el evento una vez se crea el boton
}

function copiarTexto() {
    var content = document.getElementById('contenidoResultadoParrafo').textContent;
    navigator.clipboard.writeText(content).then(() => {
        console.log("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}



//llamamos aquí a los eventos para no tener que escribirlos en el html y tener un mejor control sobre ellos
document.getElementById('encriptarBtn').onclick = encriptarTexto;
document.getElementById('desencriptarBtn').onclick = desencriptarTexto;

