function validar() {
    var campoErrados = []
    const senhaInicial = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmaSenha").value;
    console.log(senhaInicial.length)

    if (senhaInicial.length < 8) {
        const divCaracterMaiorOito = document.getElementById("passwordHelpBlock");
        divCaracterMaiorOito.classList.remove('d-none');

        campoErrados.push("senha");

    } else {

        const divCaracterMaiorOito = document.getElementById("passwordHelpBlock");
        divCaracterMaiorOito.classList.add('d-none');
        var index = campoErrados.indexOf(1); //  indexOf localiza  elemento dentro do array
        if (index > -1) {

            campoErrados.splice(index, 1)

        }
    }

    if (senhaInicial != confirmarSenha) {
        const divValidacaoSenhaDiferente = document.getElementById("passwordNotEquals");
        divValidacaoSenhaDiferente.classList.remove('d-none');

        campoErrados.push("senha errada")
    } else {

        const divValidacaoSenhaDiferente = document.getElementById("passwordNotEquals");
        divValidacaoSenhaDiferente.classList.add('d-none');

        var removerelemento = campoErrados.indexOf(1);
        if (removerelemento > -1) {

            campoErrados.splice(removerelemento, 1)
        }
    }


    if (campoErrados.length == 0) {
        salvarSenha();
    }
}


function salvarSenha() {

    var senhaUsuario = new Object();
    senhaUsuario.senha = senha;


    var payload = JSON.stringify(senhaUsuario);

    enviarSenhaUsuario('https://supremoofertas-api.herokuapp.com/api/v1/users/1', 'PUT', payload);
} 


function enviarSenhaUsuario(url, method, body) {

    const xhr = new XMLHttpRequest();

    xhr.open(method, url, url);
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('access-Control-Allow-Origin', 'htto//localhots:80');
    xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');

    xhr.onload = e => {
        if (xhr.status >= 200) {
            
            var payload = "{\"onCalback\":\"onSavePassword\", \"value\": true}";
            SaveUserPasswordChannelJS.postMessage(payload);
        } else if (xhr.status >= 400) {

            alert("erro na senha ")
        }
    }
    xhr.send(body);

    window.location.href = "login.html"
}


