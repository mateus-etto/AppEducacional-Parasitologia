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

  item.livroObjetoDeApendizagemPagina0.texto1 = new Game.Text(
    "     Os Objetos de Aprendizagem são uma\n" +
    "tecnologia recente que abre caminhos na\n" +
    "educação à distância e que serve de material\n" +
    "de apoio a aula presencial tradicional. São\n" +
    "elementos de uma nova metodologia de\n" +
    "ensino e aprendizagem baseada no uso do\n" +
    "computador e da Internet.\n" +
    "     Apesar de sua definição ainda ser vaga, o\n" +
    "o consenso é de que o Objeto de Aprendiza-\n" +
    "gem deva possuir um propósito educacional\n" +
    "definido, um elemento que estimule a refle-\n" +
    "xão do estudante e que sua construção seja\n" +
    "de forma a facilitar a reutilização dentro de\n" +
    "outros contextos de aprendizagem.\n" +
    "     Desta forma, as autoras apresentam o\n" +
    "presente Objeto de Aprendizagem em Para-\n" +
    "sitologia.\n" +
    "     O software (ou “jogo”) conta com regiões\n" +
    "clicáveis e interativas, as quais revelarão ao\n" +
    "usuário informações adicionais sobre o objeto\n" +
    "interativo, como os ciclos de vida dos para-\n" +
    "sitas em questão e as suas consequentes doen-"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemPagina0.texto1.setPosition(248, 190);
  item.livroObjetoDeApendizagemPagina0.texto1.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.texto1.disable();

  item.livroObjetoDeApendizagemPagina0.texto2 = new Game.Text(
    "ças. Visualmente, o jogo é repleto de imagens\n" +
    "e se é intencionado que estas sejam autoexpli-\n" +
    "cativas, contando, num primeiro momento,\n" +
    "com os auxílios das legendas.\n" +
    "     São expostas três telas: a principal, a sala\n" +
    "de aula, na qual serão encontradas representa-\n" +
    "ções de quatro doenças e seus respectivos\n" +
    "parasitas. À direita da tela principal será ex-\n" +
    "posto o exterior da escola, com mais quatro\n" +
    "doenças e seus três parasitas. À esquerda da\n" +
    "sala de aula será apresentada uma estante re-\n" +
    "pleta de livros interativos, nos quais serão\n" +
    "explicadas as teorias sobre o Parasitismo e\n" +
    "cada parasita abordado neste Objeto de Apren-\n" +
    "dizagem."
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemPagina0.texto2.setPosition(990, 120);
  item.livroObjetoDeApendizagemPagina0.texto2.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.texto2.disable();

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
