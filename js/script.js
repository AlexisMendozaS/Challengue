function encriptarTexto() {
    var texto = document.getElementById("texto");
    var imagen = document.getElementById("imagen-aside");
    var alerta = document.getElementById("alerta");
    var mensaje = document.getElementById("mensaje");
    var texto2 = document.getElementById("texto-encriptado");
    var btnCopiar = document.getElementById("btn-copiar");
    var textoEncriptado = "";
    // Aquí puedes hacer lo que quieras con el texto, como encriptarlo
    var textoPlano = texto.value;
    console.log("Texto sin encriptar:", textoPlano);
    // Definimos un objeto con las correspondencias de encriptación
    const encriptacion = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };

    // Convertimos el texto a minúsculas
    textoPlano = textoPlano.toLowerCase();

    // Iteramos sobre cada letra del texto
    let textEnc = "";
    for (let i = 0; i < textoPlano.length; i++) {
        const letra = textoPlano[i];
        // Si la letra está en las llaves de encriptación, la reemplazamos
        if (letra in encriptacion) {
            textoEncriptado += encriptacion[letra];
        } else {
            textoEncriptado += letra; // Si no, mantenemos la letra original
        }
    }
    console.log("Texto sin encriptar:", textoEncriptado);

    imagen.style.display = "none";
    alerta.style.display = "none";
    mensaje.style.display = "none";
    btnCopiar.style.display = "block";
    texto2.style.display = "block";
    texto2 = document.getElementById("texto-encriptado").value = textoEncriptado;
}

function desencriptarTexto() {
    var textoEncriptado = document.getElementById("texto").value;
    var imagen = document.getElementById("imagen-aside");
    var alerta = document.getElementById("alerta");
    var mensaje = document.getElementById("mensaje");
    var texto2 = document.getElementById("texto-encriptado");
    var btnCopiar = document.getElementById("btn-copiar");
    var textoDesencriptado = "";
    // Aquí puedes hacer lo que quieras con el texto encriptado, como desencriptarlo
    console.log("Texto encriptado:", textoEncriptado);

    // Definimos un objeto con las correspondencias de desencriptación
    const desencriptacion = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };

    // Creamos una expresión regular para buscar las palabras encriptadas
    const palabraEncriptadaRegex = new RegExp(Object.keys(desencriptacion).join("|"), "g");

    // Reemplazamos cada palabra encriptada con su letra original
    textoDesencriptado = textoEncriptado.replace(palabraEncriptadaRegex, function(matched){
        return desencriptacion[matched];
    });

    console.log("Texto desencriptado:", textoDesencriptado);
    // Aquí puedes hacer lo que quieras con el texto desencriptado
    imagen.style.display = "none";
    alerta.style.display = "none";
    mensaje.style.display = "none";
    texto2.style.display = "block";
    btnCopiar.style.display = "block";
    // Por ejemplo, puedes mostrarlo en un área de texto
    document.getElementById("texto-encriptado").value = textoDesencriptado;
}

function copiarTexto() {
    var textoEncriptado = document.getElementById("texto-encriptado");
    
    // Seleccionar el texto dentro del textarea
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
    
    // Deseleccionar el texto
    window.getSelection().removeAllRanges();
}
