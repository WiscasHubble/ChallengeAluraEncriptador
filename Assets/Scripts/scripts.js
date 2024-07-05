let selectedText = ''; //almacenamos el texto en un array

function selectText() {
    const textInput = document.getElementById('txtArea').value.trim();
    var textarea = document.getElementById('txtArea');

    // Verificar si el campo está vacío
    if (validator.isEmpty(textInput)) {
        textarea.classList.add('error');
        return null;
    }

    // Verificar si el texto está en minúsculas y no contiene acentos ni caracteres especiales
    const lowercaseAndNoSpecialCharsRegex = /^[a-z]+$/;

    if (!lowercaseAndNoSpecialCharsRegex.test(textInput)) {
        textarea.classList.add('error');
        return null;
    }

    // Si pasa todas las validaciones, remover la clase de error
    textarea.classList.remove('error');
    selectedText = textInput;
    return textInput;
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

        mostrarResultadosEncriptados(encryptedText);

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

        mostrarResultadosDesencriptados(decryptedText);
        return decryptedText;

    } else {
        console.error("No se ha seleccionado texto para desencriptar.");
    }
}

function mostrarResultadosEncriptados(encryptedText) {
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

function mostrarResultadosDesencriptados(decryptedText) {
    // Seleccionamos el aside por su ID y vaciamos su contenido
    const resultadosAside = document.getElementById('resultados');
    resultadosAside.innerHTML = '';

    // Creamos un nuevo div con una clase llamada 'contenidoResultado' usando template strings
    const newContent = `
        <div class="contenidoResultado">
            <div class="contenidoResultadoParrafo" id="contenidoResultadoParrafo"><p>${decryptedText}</p></div>
            <div class="copiarResultado"><button class="copiar" id="copiarBtn">Copiar</button></div>
        </div>
    `;

    // Insertamos el nuevo contenido en el aside
    resultadosAside.innerHTML = newContent;

    // Asignamos el evento onclick al botón después de que se haya insertado en el DOM
    document.getElementById('copiarBtn').onclick = copiarTexto;
}

function copiarTexto() {
    var content = document.getElementById('contenidoResultadoParrafo').textContent;
    navigator.clipboard.writeText(content).then(() => {
        console.log("Texto copiado al portapapeles!");

        // Mostrar el banner de notificación
        showNotification("Texto copiado al portapapeles!");

    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Eliminar el banner después de 3 segundos
}


//llamamos aquí a los eventos para no tener que escribirlos en el html y tener un mejor control sobre ellos
document.getElementById('encriptarBtn').onclick = encriptarTexto;
document.getElementById('desencriptarBtn').onclick = desencriptarTexto;

