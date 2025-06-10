function calcular() {
    var nomePeca = document.getElementById("nomePeca").value;
    var corPedra = document.getElementById("corPedra").value;
    var comprimento = document.getElementById("comprimento").value;
    var largura = document.getElementById("largura").value;
    var resultado = document.getElementById("resultadoPDF");

    var opcoesPedra = [
        { nome: "Verde Ubatuba", preco: 380 },
        { nome: "Branco Dalas", preco: 450 },
        { nome: "Preto São Gabriel", preco: 500 },
        { nome: "Cinza Okley", preco: 600 },
        { nome: "Nanoglass", preco: 1000 }
    ]

    var area = comprimento * largura;
    opcoesPedra.forEach(function (pedra) {
        if (corPedra == pedra.nome) {
            var total = area * pedra.preco;
            resultado.innerHTML = "O valor total é de R$ " + total.toFixed(2);
        }
    })

    resultado.innerHTML = "O valor total é de R$ " + total.toFixed(2);
    resultado.innerHTML += "<br>Nome da peça: " + nomePeca;
}

function limpar() {
    document.getElementById("corPedra").value = "";
    document.getElementById("comprimento").value = "";
    document.getElementById("largura").value = "";
    document.getElementById("resultadoPDF").innerHTML = "";
}