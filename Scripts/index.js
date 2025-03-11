function Entrar() {
    var usuario = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (usuario == "Gabriel" && senha == "GranMarmore2025") {
        window.location.href = "main.html";
    } else {
        alert("Usuário ou senha inválidos");
    }
}