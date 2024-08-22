const textArea = document.querySelector(".text-area");
const evaluar = document.querySelector(".evaluar");
const encriptarBtn = document.querySelector(".btn-encriptar");
const desencriptarBtn = document.querySelector(".btn-desencriptar");
const copiarBtn = document.querySelector(".btn-copiar");
const texto1 = document.querySelector(".texto1");
const texto2 = document.querySelector(".texto2");
const imgMuñeco = document.querySelector(".img-muñeco");

function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

encriptarBtn.addEventListener("click", () => {
    const texto = textArea.value;

    if (texto && validarTexto(texto)) {
        const textoEncriptado = encriptar(texto);
        evaluar.value = textoEncriptado;
        mostrarResultado();
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos ni caracteres especiales");
    }
});

desencriptarBtn.addEventListener("click", () => {
    const texto = textArea.value;

    if (texto && validarTexto(texto)) {
        const textoDesencriptado = desencriptar(texto);
        evaluar.value = textoDesencriptado;
        mostrarResultado();
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos ni caracteres especiales");
    }
});

function mostrarResultado() {
    copiarBtn.style.visibility = "visible";
    imgMuñeco.style.display = "none";
    texto1.style.display = "none";
    texto2.style.display = "none";
    evaluar.style.visibility = "visible";
}

copiarBtn.addEventListener("click", () => {
    const textToCopy = evaluar.value;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
});
