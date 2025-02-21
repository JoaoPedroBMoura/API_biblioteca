const biblioteca = [];
  
function adicionarLivro() {
  const titulo = document.getElementById("livro-titulo").value;
  const autor = document.getElementById("livro-autor").value;
  const disponivelInput = document.getElementById("livro-disponivel").value.toLowerCase();
  const disponivel = (disponivelInput === "true");
  const emprestimos = parseInt(document.getElementById("livro-emprestimos").value, 10) || 0;
  if (!titulo || !autor) {
    alert("Preencha título e autor.");
    return;
  }
  biblioteca.push({ titulo, autor, disponivel, emprestimos });
  alert("Livro adicionado!");
  // Limpa os campos
  document.getElementById("livro-titulo").value = "";
  document.getElementById("livro-autor").value = "";
  document.getElementById("livro-disponivel").value = "";
  document.getElementById("livro-emprestimos").value = "";
}

function atualizarSistemaBiblioteca() {
  let html = "<h4>Livros Cadastrados:</h4>";
  if (biblioteca.length === 0) {
    html += "<p>Nenhum livro cadastrado.</p>";
  } else {
    // Listar livros disponíveis
    const disponiveis = biblioteca.filter(livro => livro.disponivel);
    html += "<p><strong>Livros Disponíveis:</strong></p>";
    if (disponiveis.length) {
      html += "<ul>" + disponiveis.map(livro => `<li>${livro.titulo} - ${livro.autor}</li>`).join("") + "</ul>";
    } else {
      html += "<p>Nenhum livro disponível.</p>";
    }
    // Listar títulos dos livros emprestados (emprestimos > 0)
    const emprestados = biblioteca.filter(livro => livro.emprestimos > 0).map(livro => livro.titulo);
    html += "<p><strong>Livros Emprestados:</strong></p>";
    if (emprestados.length) {
      html += "<ul>" + emprestados.map(titulo => `<li>${titulo}</li>`).join("") + "</ul>";
    } else {
      html += "<p>Nenhum empréstimo registrado.</p>";
    }
    // Calcular total de empréstimos com reduce()
    const totalEmprestimos = biblioteca.reduce((total, livro) => total + livro.emprestimos, 0);
    html += `<p><strong>Total de Empréstimos:</strong> ${totalEmprestimos}</p>`;
  }
  document.getElementById("resultado-biblioteca").innerHTML = html;
}
