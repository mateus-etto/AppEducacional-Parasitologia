function carregaLivroAberto() {

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  var livro = {};
  var paginaAtual = null;

  scene[2].openBook = function(titulo) {
    disableInteractiveness();

    // Desabilita interação com os livros do armario
    groupDisable(scene[2].livros);
    item.setaSalaDeAula.setInteractive(false);

    // Mostra o livro
    item.livroAberto.enable();
    item.livroAberto.changeAlpha(1, 600);
    item.fechaLivro.enable();
    item.fechaLivro.changeAlpha(1, 600);

    livro[titulo].abre();

    setTimeout(function() {
      enableInteractiveness();
    }, 700);
  }

  // Conteudo dos livros

  // LIVRO: OBJETO DE APRENDIZAGEM
  livro.ObjetoDeApendizagem = {};
  livro.ObjetoDeApendizagem.abre = function() {
    item.livroObjetoDeApendizagemPagina0.show();
    paginaAtual = livro.ObjetoDeApendizagem;
  }
  livro.ObjetoDeApendizagem.fecha = function() {
    item.livroObjetoDeApendizagemPagina0.hide();
  }

  // Conteúdo do livro Objeto de Aprendizagem
  item.livroObjetoDeApendizagemPagina0 = new Game.Page();
  item.livroObjetoDeApendizagemPagina0.titulo = new Game.Text(
    "       O Objeto de Aprendizagem"
  , estiloTitulo);
  item.livroObjetoDeApendizagemPagina0.titulo.setPosition(248, 120);
  item.livroObjetoDeApendizagemPagina0.titulo.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.titulo.disable();

  item.livroObjetoDeApendizagemPagina0.texto = new Game.Text(
    "     Os Objetos de Aprendizagem são uma\n" +
    "tecnologia recente que abre caminhos na\n" +
    "educação à distância e que serve de\n" +
    "material de apoio a aula presencial\n" +
    "tradicional. São elementos de uma nova\n" +
    "metodologia de ensino e aprendizagem\n" +
    "baseada no uso do computador e da Internet.", estiloTextoLivro);
  item.livroObjetoDeApendizagemPagina0.texto.setPosition(248, 190);
  item.livroObjetoDeApendizagemPagina0.texto.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.texto.disable();

  // Imagens do livro e do X de fechar
  item.livroAberto = new Game.Image("livroAberto.png");
  item.livroAberto.setZorder(4);
  item.livroAberto.setPosition(960, 540);
  item.livroAberto.setAlpha(0);
  item.livroAberto.disable();

  item.fechaLivro = new Game.Item("botaoFechar.png");
  item.fechaLivro.setPosition(1840, 70);
  item.fechaLivro.setZorder(1);
  item.fechaLivro.setAlpha(0);
  item.fechaLivro.disable();
  item.fechaLivro.onMouseOver = function() {
    item.fechaLivro.addGlow();
  }
  item.fechaLivro.onMouseOut = function() {
    item.fechaLivro.removeGlow();
  }
  item.fechaLivro.onClick = function(mouse) {
    disableInteractiveness();

    // Habilita interação com os livros do armario
    groupEnable(scene[2].livros);
    item.setaSalaDeAula.setInteractive(true);

    // Esconde o livro
    item.livroAberto.changeAlpha(0, 600);
    item.fechaLivro.changeAlpha(0, 600);

    // Esconde o texto
    paginaAtual.fecha();
    paginaAtual = null;

    setTimeout(function() {
      item.livroAberto.disable();
      item.fechaLivro.disable();
      enableInteractiveness();
    }, 700);
  }

}
