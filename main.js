const form = document.getElementById('add-new') //selecionando form
const nome = [] //criando array
const numero = []
const email = []
let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault(); //previnindo pagina de atualizar
    addLinha(); //adicionando informações a linha
    attTabela(); //atualizando a tabela
})

function addLinha() {
    const inputNome = document.getElementById('name'); //selecionando elementos de input do form
    const inputTelefone = document.getElementById('number');
    const inputEmail = document.getElementById('mail');

    nome.push(inputNome.value); //adicionando o valor do input ao array
    numero.push(inputTelefone.value);
    email.push(inputEmail.value);

    let linha = '<tr>'; //abrindo nova linha
    linha += `<td>${inputNome.value}</td>`; //adicionando input do usuario
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += '</tr>'; //fechando linha

    linhas += linha; //atualizando nova linha

    inputNome.value = ''; //zerando campos de input
    inputTelefone.value = '';
    inputEmail.value = '';
}

function attTabela() {
    const corpoTabela = document.querySelector('tbody'); //selecionando corpo da tabela
    corpoTabela.innerHTML = linhas; //atualizando corpo da tabela com nova linha
}
