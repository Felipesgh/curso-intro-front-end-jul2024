var senha = prompt("Entre com a Senha de 6 dígitos. ");

while (senha.length !== 6) {
    alert("Quantidade de dígitos invalido! ");
    var senha = prompt("Entre com a Senha de 6 dígitos. ");
}

alert("Boas Vindas!")