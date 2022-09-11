let texto = document.querySelector(".texto");
let mensaje = document.querySelector(".mensaje");

function encriptarTexto(){
    let mensajeSecreto = encriptar(texto.value);
    mensaje.value = mensajeSecreto;
    mensaje.style.backgroundImage = "none";
    texto.value = "";    
}

function encriptar(stringEncriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptarTexto(){
    let mensajeSecreto = desencriptar(texto.value);
        mensaje.value = mensajeSecreto;
        texto.value = "";    
}

function desencriptar(stringDesencriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    for(let i = 0; i < matriz.length; i++){
        if(stringDesencriptada.includes(matriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarMensaje(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
}