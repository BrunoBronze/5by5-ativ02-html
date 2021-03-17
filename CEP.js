const url = 'https://viacep.com.br/ws/$cep/json/';

function findCEP() {
    var cep = document.getElementById("cep").value;
    var urlWithCEP = url.replaceAll("$cep", cep).replaceAll("-", "");
    loadDoc(urlWithCEP);
}

function loadDoc(urlWithCEP) {
    this.getJSON(urlWithCEP, function (err, data) {

        /*console.log("logradouro: " + data.logradouro);
        console.log("complemento: " + data.complemento);
        console.log("bairro: " + data.bairro);
        console.log("localidade: " + data.localidade);
        console.log("uf: " + data.uf);
        console.log("ibge: " + data.ibge);
        console.log("gia: " + data.gia);
        console.log("ddd: " + data.ddd);
        console.log("siafi: " + data.siafi);*/

        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;
    });
}

var getJSON = function (url, callback) {

    var xhr = new XMLHttpRequest(); //XMLHttpRequest é um objeto que 
    //fornece funcionalidade ao cliente para 
    //transferir dados entre um cliente e um servidor.

    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

function enviar(){
    verificaIdade();
    console.log("teste");
}

function insert() {
    if (document.getElementById("idade") != null) {
        var idade = parseInt(document.getElementById("idade").value);

        if (idade < 18) {
            document.getElementById("alert").style.color = "#ff0000";
            document.getElementById("alert").hidden = false;
            document.getElementById("alert").textContent = "Impossivel cadastrar menor de 18 anos";
        }
        else {
            document.getElementById("alert").hidden = false;
            document.getElementById("alert").style.color = "#ffffff";
            document.getElementById("alert").textContent = "Enviado";
        }

        console.log(idade);

    }
    else {
        console.log("null");
    }

    if(document.getElementById("salario") != null){
        var salario= document.getElementById("salario").value;
        console.log(salario);
        if(salario > 10000){
            alert("Necessario declarar imposto de renda !");
        }
    }
    else{
        console.log("null");
    }

    if(document.getElementById("estadoCivil") != null){
        var estadoCivil= document.getElementById("estadoCivil").value;
        console.log(estadoCivil);
        if(estadoCivil == "casado"){
            alert("Necessario enviar documentação do parceiro(a) !");
        }
    }
    else{
        console.log("null");
    }
}