const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".message");
const copia = document.querySelector(".copy");
//Funcion de acciones
function validateText(){

    var valid = new RegExp(/^[a-z]*$/);
    var str = document.querySelector(".text-area").value;
    var res = valid.test(str);
    if (!res || res === 0) {
        alert("Solo son permitidas letras minúsculas.");
        return true;
    } else {
        alert("Palabra Aceptada.");
    }
}

function encript(textEncript){
    textEncript = textEncript.toLowerCase();
    const replaceText = [["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]];

    for(let i = 0; i < replaceText.length; i++){
        if(textEncript.includes(replaceText[i][0])) textEncript = textEncript.replaceAll(replaceText[i][0], replaceText[i][1]);
    }
    return textEncript;
}

function decript(textDecript){
    textDecript = textDecript.toLowerCase()
    const replaceText = [["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]];

    for(let i = 0; i < replaceText.length; i++){
        if(textDecript.includes(replaceText[i][1])) textDecript = textDecript.replaceAll(replaceText[i][1] , replaceText[i][0]);
    }
    return textDecript
}

//Funciones de los botones
function btnEncriptar(){
    if(!validateText()) {
        let textoEncriptado = encript(textArea.value)
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
    }
}

function btnDesencriptar(){
    mensaje.value = decript(textArea.value);
    textArea.value = "";
}

function btnCopy(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}



