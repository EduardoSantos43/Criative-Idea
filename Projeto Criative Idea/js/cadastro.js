//definição de uma classe Produto
class Produto {
    //definição doa atributos de classe com a função constructor
    constructor() {
        this.id = 1;
        this.produto = '';
        this.valor = '';
        this.fornecedor = '';
        this.quantidade = '';
        this.arrayProdutos = [];
        //propriedade para testar qual método dave ser executado pelo botão btn
        this.btn = 0;
    }


    //salvar o produto digitado pelo usuário no objeto produto
    salvar() {

        let produto = this.lerDados();
        //chamamos o método para validar o conteúdo dos inputs (somente verificou inputs vazios)
        if (this.validarInputs(produto)) {
            if (this.btn == 0) { // se testeBtn == 0 vai adicionar o produto
                this.adicionarDados(produto);
            } else {
                this.atualizar(this.btn);//senão vai adicionar
            }
            this.adicionarTable(); //adiciona na tabela
            this.cancelar() //deixar a listaDados limpa para a próxima inserção
        }

    }

    //capturar o que foi digitado pelo usuário nos inputs
    lerDados() {
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = $('#nomeProduto').val();

        produto.preco = $('#precoProduto').val();

        produto.fornecedor = $('#fornecedor').val();

        produto.quantidade = $('#quantidade').val();

        return produto;

    }

    //adiciona dados digitados e faz um push no objeto produto
    adicionarDados(produto) {
        //adiciona o novo produto no arrayproduto
        this.arrayProdutos.push(produto);
        //incrementa o id para o próxima produto adicionado
        this.id++;
    }

    //validação dos inputs, se o usuário digitou dados em todos os inputs antes de adicionar na tabela
    validarInputs(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do produto \n';
            console.log(msg);
        }
        if (produto.preco == '') {
            msg += 'Informe o preço do produto \n';
            console.log(msg);
        }
        if (produto.fornecedor == '') {
            msg += 'Informe o fornecedor do produto \n';
            console.log(msg);
        }
        if (produto.quantidade == '') {
            msg += 'Informe a quantidade do produto \n';
            console.log(msg);
        }
        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    //método para alimentar a tabela com os produtos
    adicionarTable() {
        //declaração de uma variável para referenciar tbody da tabela 
        let tbody = document.getElementById('tbody');

        tbody.innerText = '' //sempre iniciar com inputs com string vazias

        //loop para percorrer o array do Produtos
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            //inserir uma nova linha no tbody
            let tr = tbody.insertRow();
            //criei colunas(células) para cada novaLinha
            let td_id = tr.insertCell();

            //criei colunas(células) para cada novaLinha 
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_fornecedor = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_acoes = tr.insertCell()

            //alimentar as células correspondentes aos inputs
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;
            td_fornecedor.innerHTML = this.arrayProdutos[i].fornecedor;
            td_quantidade.innerHTML = this.arrayProdutos[i].quantidade;

            //criando um elemento de imagem para ser colocado na quarta coluna(td_acoes) da linha, imagem delete
            let imgDelete = document.createElement('img');
            //atribuindo a esse elemento o caminho
            imgDelete.src = 'img/delete2.png';
            //atrinuindo um id para a imagem
            imgDelete.id = 'delete';
            //adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgDelete);

            //criando um elemento de imagem para ser colocado na quarta coluna(td_acoes) da linha, imagem editar
            let imgEdit = document.createElement('img');
            //atribuindo a esse elemento o caminho
            imgEdit.src = 'img/edit.png';
            //atrinuindo um id para a imagem
            imgEdit.id = 'edit';
            //adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgEdit);

            //atribuir um método para imgDelete através do setAttribute com os parêmetros: ("evento", método)
            //vc está criando <img onclick="produto.deletar(id)"> mas o ID é variável, para o HTML entender que é variável vc precisa concatenar
            imgDelete.setAttribute('onclick', "produto.deletar(" + this.arrayProdutos[i].id + ")");

            //Aqui vou atribuir um método para mostrar os dados do produto selecionado
            //Para posterior edição (evento, método)
            imgEdit.setAttribute('onclick', "produto.editar(" + JSON.stringify(this.arrayProdutos[i]) + ")");

            //somente para validação em console
            console.log(JSON.stringify(this.arrayProdutos));
        }

    }

    //método para deletar a linha, utilizado ao clicar na imagem delete
    deletar(idIdentificado) {
        //confirmação da deleção
        if (confirm('Deseja deletar o produto ' + idIdentificado + ' ?')) {
            //loop para percorrer o array do Produtos
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                //verifica o id do produto a ser cancelado 
                if (this.arrayProdutos[i].id == idIdentificado) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);

                }
                //validação do método
                console.log(this.arrayProdutos)
            }
        }
    }

    //método para limpar os inputs  após Enviar 
    cancelar() {
        $('#nomeProduto').val('');
        $('#precoProduto').val('');
        $('#fornecedor').val('');
        $('#quantidade').val('');

        //botão mantém o texto salvar
        $('#btn1').text('Salvar');
        this.btn = 0;
    }

    //método editar os dados dos inputs
    editar(dados) {
        //mostrar as propriedades dos produtos nos inputs
        document.getElementById('nomeProduto').value = dados.nomeProduto;
        document.getElementById('precoProduto').value = dados.preco;
        document.getElementById('fornecedor').value = dados.fornecedor;
        document.getElementById('quantidade').value = dados.quantidade;

        //atribuindo a propriedade Btn para o id do produto salecionado
        this.btn = dados.id;
        // modificar texto do botão salvar para atualizar
        $('#btn1').text('Atualizar')

    }
    //método para atualizar a tabela
    atualizar(id) {
        //procurando pelo produto a ser atualizado
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (id == this.arrayProdutos[i].id) {
                this.arrayProdutos[i].nomeProduto = document.getElementById('nomeProduto').value;
                this.arrayProdutos[i].preco = document.getElementById('precoProduto').value;
                this.arrayProdutos[i].fornecedor = document.getElementById('fornecedor').value;
                this.arrayProdutos[i].quantidade = document.getElementById('quantidade').value;
                console.log(this.arrayProdutos[i].nomeProduto);
            }
        }

    }

}


let produto = new Produto()