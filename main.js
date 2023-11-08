//Criando/declarando a função tocaSom com parâmetro IDaudio
function tocaSom(IDaudio){
    document.querySelector(IDaudio).play();
}

//Criando referência constante ListaDeTeclas buscando todos classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//estrutura de repetição while = significa "enquanto algo acontecer"
//"enquanto algo acontecer" mudou para "for"
for(let contador = 0; contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const IDaudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(IDaudio);
    }
    contador = contador + 1;

    console.log(contador);
}