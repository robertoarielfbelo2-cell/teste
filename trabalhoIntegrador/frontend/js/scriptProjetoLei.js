async function cadastrarProjetoLei(event) {
    event.preventDefault();

    const form = document.getElementById('formProjetoLei');
    const mensagem = document.getElementById('mensagem');
    const dataHoje = new Date().toISOString().split('T')[0];
    const titulo = document.getElementById('tituloProjetoLei').value.trim();
    const descricao = document.getElementById('descricaoProjetoLei').value.trim();
    const date = document.getElementById('dataProjetoLei').value.trim();
    const arquivo = document.getElementById('arquivoP1rojetoLei').value.trim();
    const botao = form.querySelector('button[type="submit"]');
    mensagem.textContent = '';

    if (!titulo || !descricao || !date || !arquivo) {
        mensagem.textContent = 'Preencha todos os campos'
        return;
    }
    if (date !== dataHoje) {
        alert('Data incorreta inserida');
        return;
    }
    const dadosProjeto = {
        titulo: titulo,
        descricao: descricao,
        date: date,
        arquivo: arquivo
    }
    try {
        const response = await fetch(
            '../../backend/php/cadastrarPorjetoLei.php'
        )
    }
}