//variaveis de entrada
var btn_usr = document.getElementById("btn-usr");
var inputUSR = document.getElementById("usr_input");

//variaveis de saida
var id = document.getElementById("id");
var nodeID = document.getElementById("node-id");
var bio = document.getElementById("bio");
var folws = document.getElementById("followers");
var folwg = document.getElementById("following");
var created = document.getElementById("created");
var locationCountry = document.getElementById("location");
var repo = document.getElementById("repo");
var name = document.getElementById("name");
var login = document.getElementById("login")
var boxError = document.getElementById("alert-error-box");


//funções
function criaAlerta(){
    //adiconando classe a div
    boxError.setAttribute("class","");
    boxError.setAttribute("class","alert alert-danger alert-dismiss animated shake");
    //limpando a div
    while(boxError.firstChild){
        boxError.removeChild(boxError.firstChild);
    }
    //variaveis de controle/manipulação de dados
    var alertError = document.createElement("div");
    var btnAlert = document.createElement("button")
    var txt1 = document.createElement("strong");
    

    //setando atributos
    btnAlert.setAttribute("class","close");
    btnAlert.setAttribute("data-dismiss","alert")
    btnAlert.innerHTML = "&times;";
    txt1.setAttribute("class","errorP")
    txt1.innerHTML = ("<strong>Error!</strong> Esse usuario não existe ou foi digitado mais de um usuario ao mesmo tempo.")

    //atribuindo filhos
    alertError.appendChild(btnAlert);
    alertError.appendChild(txt1);
    boxError.appendChild(alertError);

}
function url_cria(inputUSR){
    inputVal = inputUSR.value;
    return "https://api.github.com/users/" + inputVal;
}
function renderDados(response_Data){
    //apaga os dados antigos
    id.innerHTML = "";
    nodeID.innerHTML = "";
    bio.innerHTML = "";
    folws.innerHTML = "";
    folwg.innerHTML = "";
    created.innerHTML = "";
    locationCountry.innerHTML = "";
    repo.innerHTML = "";
    name.innerHTML = "";
    login.innerHTML = "";

    //preenche com os novos 
    id.innerHTML = response_Data.data.id || "*null";
    nodeID.innerHTML = response_Data.data.node_id || "*null";
    bio.innerHTML = response_Data.data.bio || "*null";
    folws.innerHTML = response_Data.data.followers || "*null";
    folwg.innerHTML = response_Data.data.following || "*null";
    created.innerHTML = response_Data.data.created_at || "*null";
    locationCountry.innerHTML = response_Data.data.location || "*null";
    repo.innerHTML = response_Data.data.public_repos || "*null"
    name.innerHTML = response_Data.data.name || "*null";
    login.innerHTML = response_Data.data.login || "*null";
}
function alertaInicial(texto){
    alert(texto)
}
btn_usr.onclick = function carregaAPI(){
    axios.get(url_cria(inputUSR)).then(function(response){
        console.log(response.data);
        renderDados(response);
    }).catch(function(){
    })
}

