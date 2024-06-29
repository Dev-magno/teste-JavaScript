function calcular() {
    var valor = document.getElementById('valor').value
    var opcao = document.getElementById('opcao').value
    var total = document.getElementById('total')
    if (opcao == 1) {
        var res = parseFloat(valor) - (parseFloat(valor) * 0.15)
        console.log(typeof(res.innerHTML))

    }
    else if (opcao == 2) {
        var res = parseFloat(valor) - (parseFloat(valor) * 0.10)
        console.log(typeof(res.innerHTML))

    }
    else if (opcao == 3) {
        var res = parseFloat(valor)

    }
    else if (opcao == 4) {
        var res = parseFloat(valor) + (parseFloat(valor) * 0.10)

    }
    else {
        var res = parseFloat(valor)
    }
    total.innerHTML = "Valor a pagar: " + res.toFixed(2)
 
}