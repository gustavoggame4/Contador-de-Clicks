

function clicando(){
 resultado.innerHTML = ++x
 num = x
 verificarNumero(num);


};

function zero(){
  resultado.innerHTML = x = 0
contdivi.innerHTML = z = 0
};
function contzero(){
contagem.innerHTML = ++y


};





var num = 0
var x = 0
var y = 0
var z = 0
var contagem = document.querySelector("#contagemRES")
var botao = document.querySelector("#clicks")
var zerando = document.querySelector("#reset")
var contdivi = document.querySelector("#divisivel")
var resultado = document.querySelector("#contclicks")



botao.addEventListener("click", clicando )
zerando.addEventListener("click", zero)
zerando.addEventListener("click",contzero)

function verificarNumero(x) {
  if (num % 10 == 0) { 
    alert("Você clicou 10 vezes"); 
    contdivi.innerHTML = ++z
  }
}




