function makeLogin(event) {
    event.preventDefault();

    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;
    console.log(`Email: ${email} | Password: ${password}`);
    ToastChannelJS.postMessage("{\"value\":\"Chamando a Tela de Login\"}");
}

