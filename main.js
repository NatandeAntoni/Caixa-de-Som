//Criando/declarando a função tocaSom com parâmetro IDaudio
function tocaSom(IDaudio){
    document.querySelector(IDaudio).play();
}

//Criando referência constante ListaDeTeclas buscando todos classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//invocando a função tocaSomPom a partir do item 0, 1º botão
listaDeTeclas [0].onclick = tocaSom;

//criando referência variável "contador" iniciando = 0
let contador = 0; 

//estrutura de repetição while = significa "enquanto algo acontecer"
while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const IDaudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(IDaudio);
    }
    contador = contador + 1;

    console.log(contador);
}