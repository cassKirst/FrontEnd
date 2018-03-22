'use strict';

/* declarada variavel nome e já recebe um elemento pela id nome, qual é o objeto qual recebe o nome do usuário  */
var nome = document.getElementById('nome');
/* */
nome.onkeydown = showLetra;

function showLetra(event){
    
    console.log("digitado agora: " + event.key);
    console.log("conteúdo da textbox:" + event.srcElement.value);
}



function salvarContato(){
    var nome = $('#nome').val();
    var telefone = document.getElementById('telefone').value;
    //recebe o q usu digitou
    document.getElementById('telefone').value = "";
    document.getElementById('nome').value = "";
    if (nome == ""||telefone == ""){
        alert("Não é permito contato sem nome ou telefone.")
    }
    else{
        var contato = nome +" - "+ telefone;
        var lista = document.getElementById('contatos');
        //seta bloco de código com LI e valor contido em contato
        var item = "<li>"+ contato +"</li>";
        //objeto.innerHTML pode get e set valores HTML de dentro de um componente/objeto
        lista.innerHTML += item;
    }
}

var botao = $('#salvar');
botao.on('click', salvarContato);
setTimeout(() => {},3000);