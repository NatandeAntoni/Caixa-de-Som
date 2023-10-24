//Criando/Declarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector("idElementoAudio").play();
}

//Criando referência constante ListaDeTeclas buscando todos os itens pela classe .tecla
const ListaDeTeclas = document.querySelectorAll(".tecla");

//Criando referência variável "contador" iniciando = 0
let contador = 0;

//Estrutura de repetição "while" significa "enquanto algo acontecer"
while(contador < ListaDeTeclas.length ){
    const efeito = ListaDeTeclas [contador].classList [1];
    const idAudio = "#som_"+ efeito;
    ListaDeTeclas[contador].onclick = function ()
         tocaSom(idAudio);
    contador = contador + 1;
    console.log(contador);
}
