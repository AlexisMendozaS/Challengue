function encriptarTexto() {
    var texto = document.getElementById("texto");
    var imagen = document.getElementById("imagen-aside");
    var alerta = document.getElementById("alerta");
    var mensaje = document.getElementById("mensaje");
    var texto2 = document.getElementById("texto-encriptado");
    var btnCopiar = document.getElementById("btn-copiar");
    var textoEncriptado = "";
  // Aquí puedes hacer lo que quieras con el texto, como encriptarlo
  var  textoPlano = texto.value;
  console.log("Texto sin encriptar:", textoPlano);
  // Definimos un objeto con las correspondencias de encriptación
  const encriptacion = {
    e: "enter",
    i: "imes",
    a: "ai",
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

function desencriptarTexto(textoEncriptado) {
  // Definimos un objeto con las correspondencias de desencriptación
  const desencriptacion = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  // Separamos el texto encriptado en palabras
  const palabrasEncriptadas = textoEncriptado.split(" ");

  // Iteramos sobre cada palabra encriptada y la desencriptamos
  let textoOriginal = "";
  for (let i = 0; i < palabrasEncriptadas.length; i++) {
    const palabraEncriptada = palabrasEncriptadas[i];
    // Si la palabra está en las llaves de desencriptación, la reemplazamos
    if (palabraEncriptada in desencriptacion) {
      textoOriginal += desencriptacion[palabraEncriptada];
    } else {
      textoOriginal += palabraEncriptada; // Si no, mantenemos la palabra original
    }
    // Añadimos un espacio después de cada palabra, excepto la última
    if (i < palabrasEncriptadas.length - 1) {
      textoOriginal += " ";
    }
  }

  return textoOriginal;
}
