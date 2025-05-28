// Simulação de banco de dados em memória - Cadastro de Autor
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
