
let div = document.querySelector("div");
let section = document.querySelector("section");
let texto = document.querySelector("input");
let botao = document.querySelector("button");
let texto2 = document.querySelector("h2");
let naoSouEu = document.querySelector("a");

if(localStorage.nome){
    div.style.display = "none";
    texto2.innerHTML=`Seja bem-vindo ${localStorage.nome}`;
    naoSouEu.innerHTML=`Não sou ${localStorage.nome} ?`;
}
else{
    div.style.display="block";
    section.style.display="none";
    function cadastrar(){
        localStorage.setItem("nome", texto.value);
        if(localStorage.nome){
            div.style.display = "none";
            section.style.display="block"
            texto2.innerHTML=`Seja bem-vindo ${localStorage.nome}`;
            naoSoueu.innerHTML=`Não sou ${localStorage.nome}?`;
        }
    }
}


 function limparStorage(){
    localStorage.clear();
}

botao.onclick = Cadastre-se ;
naoSou.onclick = limparStorage;