// ---------------------- Simples ------------------
function calcSimples(e) {
    // Esta variavel vai definir que pegue todos os valores do elementos.
    var operacao_simples = e.value;

    // Aqui a variavel n1 e n2 vai pegar os valores digitados (numeros) de acordo com seu valor.
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    // O eval ele vai avaliar a expressão e retornar seu valor
    var calculo_simples = eval(n1 + operacao_simples + n2);

    // Se for um numero ele volta o resultado
    if (!isNaN(calculo_simples)) {
        document.getElementById("resultado-calculadora-simples").innerHTML = "O resultado obtido é:  " + calculo_simples
    }
}

// Aqui vamos limpar os valores digitados na calculadora simples.
$("#limpar-calculadora-simples").click(function () {
    $('#n1').val("")
    $('#n2').val("")
    $("#resultado-calculadora-simples").text("")
})

// ----------- Altera Simples e Cientifica ---------
// Exibir e Ocultar Calculadora Simples
$("#form1").toggle()
function aparecerSimples() {
    $("#form2").hide()
    $("#form1").fadeToggle(500);
} 

// Exibir e Ocultar Calculadora Cientifica
$("#form2").toggle()
function aparecerCientifica() {
    $("#form1").hide()
    $("#form2").fadeToggle(500);
}

// Habilitar e Desabilitar


// ------------------- Raiz Quadrada -----------------

function calcCientifico(e) {
    // Esta variavel vai definir que pegue todos os valores do elementos.
    var operacao_Cientifica = e.value;

    // Aqui a variavel n1 e n2 vai pegar os valores digitados (numeros) de acordo com seu valor.
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);

    // O eval ele vai avaliar a expressão e retornar seu valor
    var calculo_Cientifico = eval(n3 + operacao_Cientifica + n4);

    // Se for um numero ele volta o resultado
    if (!isNaN(calculo_Cientifico)) {
        document.getElementById("resultado-calculadora-simples-cientifica").innerHTML = "O resultado obtido é: " + calculo_Cientifico
    }
}

$("#limpar-resultado-simples-na-cientifica").click(function () {
    $('#n3').val("")
    $('#n4').val("")
    $("#resultado-calculadora-simples-cientifica").text("")
})

function calcularRaiz() {
    document.getElementById("form2")
    var raiz = form2.raiz.value;
    raiz = (Math.sqrt(raiz)).toFixed(2);
    var resultado = raiz;
    document.getElementById("resultado-raiz-quadrada").innerHTML = "O resultado obtido é: " + resultado;
}

// Aqui vamos limpar os valores digitados na calculadora científica.
$("#limpar-raiz-quadrada").click(function () {
    $('#raiz').val("")
    $("#resultado-raiz-quadrada").text("")
})
