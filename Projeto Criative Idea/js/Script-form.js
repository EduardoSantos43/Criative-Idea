function VerificaCPF() {
    // if para verificar se o cpf é falso
    if (validaCpf(document.cadastro.cpf.value)) { document.cadastro.submit(); } else {
        errors = "1"; if (errors) alert("cpf invalido");
        document.retorno = (errors == '');
    }
}
function validaCpf(cpf) {
    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

function validaForm() {
    //if para verificar se o campo nome do formulario fale está vazio ou com menos de dois caracteres.
    if (document.cadastro.nome.value.length < 3) {
        //caixa trazendo a informação de que o campo não foi preenchido corretamente
        nome.style.border = "1px solid red";
        //focus para setar para a caixa de texto que não foi preenchida corretamente
        document.cadastro.nome.focus();
        //sem o return false, entra uma repetição de caixa de alert e perde a função do focus.
        return false;

        document.style.border = "none"
    }
    if (document.cadastro.email.value == "" || document.cadastro.email.value.length < 3) {
        //caixa trazendo a informação de que o campo não foi preenchido corretamente
        email.style.border = "1px solid red"
        //focus para setar para a caixa de texto que não foi preenchida corretamente
        document.cadastro.email.focus();
        //sem o return false, entra uma repetição de caixa de alert e perde a função do focus.
        return false
    }
    // if verifica o campo telefone e confere se o valor dele está vazio ou menor que 9
    if (document.cadastro.telefone.value == "" || document.cadastro.telefone.value.length < 9) {
        //caixa trazendo a informação de que o campo não foi preenchido corretamente
        telefone.style.border = "1px solid red"
        //focus para setar para a caixa de texto que não foi preenchida corretamente
        document.cadastro.telefone.focus();
        //sem o return false, entra uma repetição de caixa de alert e perde a função do focus.
        return false;
    }
    if (document.cadastro.cpf.value == false) {
        //caixa trazendo a informação de que o campo não foi preenchido corretamente
        cpf.style.border = "1px solid red"
        //focus para setar para a caixa de texto que não foi preenchida corretamente
        document.cadastro.cpf.focus()
        return false;
    }
    let dataNascimento = validaData();
    if (dataNascimento == (false)) {
        alert("Preencha o campo data corretamente");
        document.cadastro.nascimento.focus();
        return false;
    } else{
          // Utilizando sweet alert
       return swal("Olá " + this.nome.value + " ! \n" + "Seu email de login é: " + this.email.value + ". \n" + "Utilizaremos seu cpf: " + this.cpf.value + " como senha.");
    }
    
}

// VALIDA DATA DE NASCIMENTO
function validaData() {
    var data = document.getElementById("nascimento").value; // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if (data_array[0].length != 4) {
        data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
    }

    // comparo as datas e calculo a idade
    var hoje = new Date();
    var nasc = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    // Utilizo o if para verificar se a data digitada no input é menor que 1, se for menor que 1, provavelmente será negativa e não será aceita
    if (idade < 1 || idade > 130) {
        alert("Preencha o campo Data de nascimento corretamente!!");
        document.nascimento.focus();
        return false;
    }
    if (idade >= 18 && idade <= 129) {
        return true;
    }

}



// Função para validar Cep, utilizando viaCep
const apresentaDados = (resultado) => {
    //for para ele percorrer todos os campos
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            console.log(campo);

            document.querySelector("#" + campo).value = resultado[campo]
        }
    }
}
function consultaCep() {
    let cepDigitado = document.getElementById("cep");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        let cepProcurado = cepDigitado.value.replace("-", "");
        console.log(cepProcurado);

        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`).then(response => {
            response.json()
                .then(data => console.log(apresentaDados(data)))
        })
            .catch(x => console.log("cep não encontrado!"))
    }
}




