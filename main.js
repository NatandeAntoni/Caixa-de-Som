//Criando/Declarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector("#som_tecla_pom").play();
}
//Chamando/Invocando a função tocaSomPom pelo clique no botão Pom
document.querySelector(".tecla_pom").onclick = tocaSomPom;

//Criando referência constante ListaDeTeclas buscando todos os itens pela classe .tecla
const ListaDeTeclas = document.querySelectorAll(".tecla");

//Chamando a função tocaSomPom a partir do item "0", 1° botão
ListaDeTeclas[0].onclick = tocaSomPom;
