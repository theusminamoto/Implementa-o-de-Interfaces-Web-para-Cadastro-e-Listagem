Cadastro de Autor
// Simulação de banco de dados em memória
let autores = [];

document.getElementById('formAutor').addEventListener('submit', function(e) {
    e.preventDefault();
    const novoAutor = {
        id: autores.length + 1,
        nome: document.getElementById('nomeAutor').value,
        nacionalidade: document.getElementById('nacionalidadeAutor').value
    };
    autores.push(novoAutor);
    alert('Autor cadastrado com sucesso!');
    this.reset();
});

Listagem de Autores
function carregarAutores() {
    const tabela = document.getElementById('tabelaAutores');
    tabela.innerHTML = autores.map(autor => `
        <tr>
            <td>${autor.id}</td>
            <td>${autor.nome}</td>
            <td>${autor.nacionalidade}</td>
        </tr>
    `).join('');
}
