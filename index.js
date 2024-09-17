var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")


function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex; margin-right: 25px"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top: 50px; margin-right: 0px"
}

function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex; margin-left: 25px"
    Leonardo.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex; margin-top: 50px"
}