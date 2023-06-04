var area = document.getElementById("area")

function Entrar(){
    var nome = prompt("Digite seu nome");
    if(nome == "" || nome == null){
        alert("ops não há nada")
        area.innerHTML = "CLIQUE NO BOTÃO PARA ACESSAR..."
    }else{
    area.innerHTML = "Bem vindo " + nome;
    
    let BotaoSair = document.createElement("button");
    BotaoSair.innerHTML = "Sair da Conta";
    area.appendChild(BotaoSair);
    BotaoSair.onclick = sair;
    }

}
function sair(){
    alert("até mais !")
    area.innerHTML = "Vc saiu."

}

//testar no console
function arrays(){
    var lista = ["Mat", "José", 150]
    //lista.length = digite no console e veja o tamanho da lista
    //lista[0] = irá retornar Mat pq é o primeiro item da lista
}