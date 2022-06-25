const inputText = document.getElementById("text-area");
const textoCripto = document.getElementById("msg-criptografada");
const img = document.querySelector("img.msg-aviso");
const mensagem = document.getElementById("text-criptografada");

const btnCripto = document.getElementById("criptobtn");
const btnDescripto = document.getElementById("descriptobtn");
const btnCopy = document.getElementById("copiar");
const msgAviso = document.querySelector(".mensagem-aviso");

btnCripto.addEventListener("click", Criptografar);
btnDescripto.addEventListener("click", Descriptografar);
btnCopy.addEventListener("click", Copiar);

// FUNÇÃO PARA CODIFICAR A MENSAGEM
function Criptografar() {
    //Pega o valor do textarea
    var texto = inputText.value;

    //Cria variavel para armazenar o texto criptografado
    var encripto;

    //Verifica se o texto está vazio
    if (texto != "") {
        //Cria uma nova string na variavel encripto com o texto criptografada
        encripto = texto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat")
            .replaceAll("y", "two");

        //Exibe o texto criptografado
        textoCripto.innerHTML = encripto;

        //Remove a img de aviso
        img.style.display = "none";

        //Limpa o texto do textarea
        inputText.value = "";
    } else {
        //Alerta o usuário que o texto está vazio
        alert("Digite uma mensagem para ser criptografada");
    }
    //Limpa o alerta de mensagem copiada
    mensagem.innerHTML = "";
    msgAviso.innetHTML = "";
}

// FUNÇÃO PARA DESCRIPTOGRAFAR A MENSAGEM
function Descriptografar() {
    //Pega o valor do textarea
    var texto = inputText.value;

    //Cria variavel para armazenar o texto Descriptografado
    var descripto;

    //Verifica se o texto está vazio
    if (texto != "") {
        //Cria uma nova string na variavel descripto com o texto descriptografada
        descripto = texto
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u")
            .replaceAll("two", "y");

        textoCripto.innerHTML = descripto;
        img.style.display = "none";
    }
    //Limpa o alerta de mensagem copiada
    mensagem.innerHTML = "";
    msgAviso.innetHTML = "";
    
}

//FUNÇÃO PARA COPIAR A MENSAGEM CODIFICADA
function Copiar() {
    //Pega o valor do texto criptografado/Descriptografado
    var textoCopiado = textoCripto.innerHTML;

    if (textoCopiado.length > 0) {
        //Copia o texto criptografado
        navigator.clipboard.writeText(textoCopiado);

        //Exibe mensagem de texto copiado
        mensagem.innerHTML = "Mensagem copiada";

        //limpa o texto criptografado
        textoCripto.innerHTML = "";
        msgAviso.innetHTML = "";
        
    }
}
