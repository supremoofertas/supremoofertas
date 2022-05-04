
function voltar() {

    window.history.back()
}

function salvar(event) {

    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var celular = document.getElementById('celular').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;
    var cidade = document.getElementById('cidade').value;
    var endereco = document.getElementById('endereco').value;

    var usuarioObjeto = new Object();
    usuarioObjeto.name = nome;
    usuarioObjeto.email = email;
    usuarioObjeto.cpf = cpf;
    usuarioObjeto.celular = celular;
    usuarioObjeto.telefone = telefone;
    usuarioObjeto.cep = cep;
    usuarioObjeto.cidade = cidade;
    usuarioObjeto.endereco = endereco;

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
            localStorage.setItem('userConfig', result);
            window.location = "cadastro-senha-usuario.html"
            console.log('sucesso ' + localStorage.getItem('userConfig'));

        } else if (xhr.status >= 400) {
            console.log("erro");
        }

    }

    xhr.send(body);
}
