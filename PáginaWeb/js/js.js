document.addEventListener('input', function (e) {
    if (e.target.id === 'inputValorVenda') {
        formatCurrency(e.target);
    }
});

function formatCurrency(input) {
    const numericValue = input.value.replace(/[^0-9]/g, '');

    const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numericValue / 100);

    input.value = formattedValue;
}

function redirecionarParaLogin() {
    window.location.href = 'Login.html';
}

function redirecionarParaRecuperar() {
    window.location.href = 'Recuperar.html';
}

function redirecionarParaCadastrar() {
    window.location.href = 'Cadastrar.html';
}

function redirecionarParaMenu() {
    window.location.href = 'Menu.html';
}

function redirecionarParaConfRecupera() {
    window.location.href = 'ConfRecupera.html';
}

function redirecionarParaPesquisar() {
    window.location.href = 'Pesquisar.html';
}

function redirecionarParaConfPesquisa() {
    window.location.href = 'ConfPesquisa.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const limparButton = document.getElementById('limparButton');
    limparButton.addEventListener('click', function () {
        // Limpar os campos de entrada e a área de texto
        document.getElementById('inputNome').value = '';
        document.getElementById('inputRG').value = '';
        document.getElementById('inputEndereco').value = '';
        document.getElementById('inputCpf').value = '';
        document.getElementById('inputNascimento').value = '';
    });

    const enviarButton = document.getElementById('enviarButton');

    enviarButton.addEventListener('click', function () {
        window.location.href = 'Cadastrar.html';
    });
});
