
function voltar() {

    window.history.back()
}

function salvar(event) {

    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;

    var usuarioObjeto = new Object();
    usuarioObjeto.name = nome;
    usuarioObjeto.email = email;
    usuarioObjeto.celular = celular;
    usuarioObjeto.latitude = "-56656565656";
    usuarioObjeto.longitude = "-56656565656";


    var payload = JSON.stringify(usuarioObjeto);


    enviar('https://supremoofertas-api.herokuapp.com/api/v1/users', 'POST', payload);

}


function enviar(url, method, body) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhots:80');
    xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');

    xhr.onload = e => {
        if (xhr.status >= 200) {

            var result = xhr.response
            SaveUserPasswordChannelJS.postMessage("{\"onCalback\":\"onSaveUserId\", \"value\": $result}");
            window.location = "cadastro-senha-usuario.html"

        } else if (xhr.status >= 400) {
            console.log("erro");
        }

    }

    xhr.send(body);
}
