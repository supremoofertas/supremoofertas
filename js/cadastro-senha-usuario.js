function validar() {
    const senhaInicial = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmaSenha").value;
    console.log(senhaInicial.length)
    if (senhaInicial.length < 8) {
        const divCaracterMaiorOito = document.getElementById("passwordHelpBlock");
        divCaracterMaiorOito.classList.remove('d-none');

    } else {

        const divCaracterMaiorOito = document.getElementById("passwordHelpBlock");
        divCaracterMaiorOito.classList.add('d-none');

    }

    if (senhaInicial != confirmarSenha) {
        const divValidacaoSenhaDiferente = document.getElementById("passwordNotEquals");
        divValidacaoSenhaDiferente.classList.remove('d-none');
    } else {

        const divValidacaoSenhaDiferente = document.getElementById("passwordNotEquals");
        divValidacaoSenhaDiferente.classList.add('d-none');
    }
}