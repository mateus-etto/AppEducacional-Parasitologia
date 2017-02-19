var estiloNumeros = {
  fontFamily: "CircleCaps",
  dropShadow: true,
  dropShadowBlur: 10,
  fill: 0xFFFFFF,
  fontSize: "200px"
}

var estiloInfoBalao = {
  fontFamily: "Book Antiqua",
  fill: 0x000000,
  fontSize: "40px"
}

function carregaCicloEcoli() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estBananaNormal"] = new Game.Item("estHprdSdv.png");
  item.estBananaNormal.setPosition(1220, 630);
  item.estBananaNormal.setZorder(11);
  item.estBananaNormal.setBrightness(220);
  item.estBananaNormal.onMouseOver = function() {
    item.estBananaNormal.setBrightness(255);
    scene[0].setSubtitle("Amebíase");
  }
  item.estBananaNormal.onMouseOut = function() {
    item.estBananaNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estBananaNormal.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    // Fadeout unrelated images
    scene[0].background.changeBrightness(100, 600);
    item.carteiras.changeBrightness(100, 600);
    item.mesaProfessor.changeBrightness(100, 600);

    item.estTomateNormal.changeBrightness(100, 600);
    item.estPernNormal.changeBrightness(100, 600);
    item.estGatoNormal.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    item.estTomateNormal.setInteractive(false);
    item.estPernNormal.setInteractive(false);
    item.estGatoNormal.setInteractive(false);
    item.estBananaNormal.setInteractive(false);
    item.setaJanela.setInteractive(false);
    item.setaArmario.setInteractive(false);

    setTimeout(function() {
      scene[0].setSubtitle("");
      item.setaJanela.disable();
      item.setaArmario.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estBananaNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estBananaNormal.disable();
      item.estBananaCiclo.enable();
      item.estBananaCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.bananaElem1.enable();
      item.bananaElem1.changeAlpha(1, 600);
      item.bananaNum1.enable();
      item.bananaNum1.changeAlpha(1, 600);
      item.bananaSetaElem1Est.enable();
      item.bananaSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.bananaElem2a.enable();
      item.bananaElem2a.changeAlpha(1, 600);
      item.bananaNum2.enable();
      item.bananaNum2.changeAlpha(1, 600);
      item.bananaSetaElem2aElem2b.enable();
      item.bananaSetaElem2aElem2b.changeAlpha(1, 600);
      item.bananaElem2b.enable();
      item.bananaElem2b.changeAlpha(1, 600);
      item.bananaSetaElem2bEst.enable();
      item.bananaSetaElem2bEst.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.bananaSetaEstElem3a.enable();
      item.bananaSetaEstElem3a.changeAlpha(1, 600);
      item.bananaElem3a.enable();
      item.bananaElem3a.changeAlpha(1, 600);
      item.bananaNum3.enable();
      item.bananaNum3.changeAlpha(1, 600);
      item.bananaSetaElem3aElem3b.enable();
      item.bananaSetaElem3aElem3b.changeAlpha(1, 600);
      item.bananaElem3b.enable();
      item.bananaElem3b.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.bananaSetaEstElem4.enable();
      item.bananaSetaEstElem4.changeAlpha(1, 600);
      item.bananaNum4.enable();
      item.bananaNum4.changeAlpha(1, 600);
      item.bananaElem4.enable();
      item.bananaElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.bananaSetaElem4Elem5.enable();
      item.bananaSetaElem4Elem5.changeAlpha(1, 600);
      item.bananaNum5.enable();
      item.bananaNum5.changeAlpha(1, 600);
      item.bananaElem5.enable();
      item.bananaElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.bananaFechar.enable();
      item.bananaFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensBananaCiclo = [];

  // Imagens ciclo
  item["estBananaCiclo"] = new Game.Image("estHprdClo.png");
  item.estBananaCiclo.setPosition(960, 550);
  item.estBananaCiclo.setScale(0.5);
  item.estBananaCiclo.setZorder(9);
  item.estBananaCiclo.setAlpha(0);
  item.estBananaCiclo.disable();
  itensBananaCiclo.push(item.estBananaCiclo);

  item["bananaElem1"] = new Game.Item("entamoebaCisto.png");
  item.bananaElem1.setPosition(485, 300);
  item.bananaElem1.setScale(0.7);
  item.bananaElem1.setZorder(6);
  item.bananaElem1.setAlpha(0);
  item.bananaElem1.disable();
  item.bananaElem1.onMouseOver = function() {
    scene[0].setSubtitle("Cisto de <i>Entamoeba coli</i>");
  }
  item.bananaElem1.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensBananaCiclo.push(item.bananaElem1);

  item["bananaNum1"] = new Game.Text("1", estiloNumeros);
  item.bananaNum1.setAnchor(0.5, 0.6);
  item.bananaNum1.setPosition(650, 140);
  item.bananaNum1.setAlpha(0);
  item.bananaNum1.disable();
  itensBananaCiclo.push(item.bananaNum1);

  item["bananaSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.bananaSetaElem1Est.setColor(0, 0, 0);
  item.bananaSetaElem1Est.setZorder(7);
  item.bananaSetaElem1Est.setAlpha(0);
  item.bananaSetaElem1Est.disable();
  itensBananaCiclo.push(item.bananaSetaElem1Est);

  item["bananaElem2a"] = new Game.Item("entamoebaCisto.png");
  item.bananaElem2a.setPosition(200, 750);
  item.bananaElem2a.setScale(0.4);
  item.bananaElem2a.setZorder(6);
  item.bananaElem2a.setAlpha(0);
  item.bananaElem2a.disable();
  item.bananaElem2a.onMouseOver = function() {
    scene[0].setSubtitle("Desencistamento de <i>Entamoeba coli</i>: cisto");
  }
  item.bananaElem2a.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensBananaCiclo.push(item.bananaElem2a);

  item["bananaNum2"] = new Game.Text("2", estiloNumeros);
  item.bananaNum2.setAnchor(0.5, 0.6);
  item.bananaNum2.setPosition(350, 700);
  item.bananaNum2.setAlpha(0);
  item.bananaNum2.disable();
  itensBananaCiclo.push(item.bananaNum2);

  item["bananaSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.bananaSetaElem2aElem2b.setColor(0, 0, 0);
  item.bananaSetaElem2aElem2b.addArrowAtEnd();
  item.bananaSetaElem2aElem2b.setZorder(7);
  item.bananaSetaElem2aElem2b.setAlpha(0);
  item.bananaSetaElem2aElem2b.disable();
  itensBananaCiclo.push(item.bananaSetaElem2aElem2b);

  item["bananaElem2b"] = new Game.Item("entamoebaTrofozoito.png");
  item.bananaElem2b.setPosition(537, 750);
  item.bananaElem2b.setScale(0.53);
  item.bananaElem2b.setZorder(6);
  item.bananaElem2b.setAlpha(0);
  item.bananaElem2b.disable();
  item.bananaElem2b.onMouseOver = function() {
    scene[0].setSubtitle("Desencistamento de <i>E. coli</i>: trofozoíto");
  }
  item.bananaElem2b.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensBananaCiclo.push(item.bananaElem2b);

  item["bananaSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.bananaSetaElem2bEst.setColor(0, 0, 0);
  item.bananaSetaElem2bEst.setZorder(7);
  item.bananaSetaElem2bEst.setAlpha(0);
  item.bananaSetaElem2bEst.disable();
  itensBananaCiclo.push(item.bananaSetaElem2bEst);

  item["bananaSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.bananaSetaEstElem3a.setColor(0, 0, 0);
  item.bananaSetaEstElem3a.setZorder(7);
  item.bananaSetaEstElem3a.setAlpha(0);
  item.bananaSetaEstElem3a.disable();
  itensBananaCiclo.push(item.bananaSetaEstElem3a);

  item["bananaElem3a"] = new Game.Item("entamoebaTrofozoito.png");
  item.bananaElem3a.setPosition(1330, 250);
  item.bananaElem3a.setScale(0.42);
  item.bananaElem3a.setZorder(6);
  item.bananaElem3a.setAlpha(0);
  item.bananaElem3a.disable();
  item.bananaElem3a.onMouseOver = function() {
    scene[0].setSubtitle("Encistamento de <i>E. coli</i>: trofozoíto");
  }
  item.bananaElem3a.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensBananaCiclo.push(item.bananaElem3a);

  item["bananaNum3"] = new Game.Text("3", estiloNumeros);
  item.bananaNum3.setAnchor(0.5, 0.6);
  item.bananaNum3.setPosition(1480, 200);
  item.bananaNum3.setAlpha(0);
  item.bananaNum3.disable();
  itensBananaCiclo.push(item.bananaNum3);

  item["bananaSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.bananaSetaElem3aElem3b.setColor(0, 0, 0);
  item.bananaSetaElem3aElem3b.addArrowAtEnd();
  item.bananaSetaElem3aElem3b.setZorder(7);
  item.bananaSetaElem3aElem3b.setAlpha(0);
  item.bananaSetaElem3aElem3b.disable();
  itensBananaCiclo.push(item.bananaSetaElem3aElem3b);

  item["bananaElem3b"] = new Game.Item("entamoebaCisto.png");
  item.bananaElem3b.setPosition(1670, 250);
  item.bananaElem3b.setScale(0.55);
  item.bananaElem3b.setZorder(6);
  item.bananaElem3b.setAlpha(0);
  item.bananaElem3b.disable();
  item.bananaElem3b.onMouseOver = function() {
    scene[0].setSubtitle("Encistamento de <i>E. coli</i>: cisto");
  }
  item.bananaElem3b.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensBananaCiclo.push(item.bananaElem3b);

  item["bananaSetaEstElem4"] = new Game.Line(1000, 810, 1180, 800, 4);
  item.bananaSetaEstElem4.setColor(0, 0, 0);
  item.bananaSetaEstElem4.addArrowAtEnd();
  item.bananaSetaEstElem4.setZorder(7);
  item.bananaSetaEstElem4.setAlpha(0);
  item.bananaSetaEstElem4.disable();
  itensBananaCiclo.push(item.bananaSetaEstElem4);

  item["bananaNum4"] = new Game.Text("4", estiloNumeros);
  item.bananaNum4.setAnchor(0.5, 0.6);
  item.bananaNum4.setPosition(1450, 660);
  item.bananaNum4.setAlpha(0);
  item.bananaNum4.disable();
  itensBananaCiclo.push(item.bananaNum4);

  item["bananaElem4"] = new Game.Item("fezesComMosca.png");
  item.bananaElem4.setPosition(1330, 800);
  item.bananaElem4.setScale(0.51);
  item.bananaElem4.setZorder(6);
  item.bananaElem4.setAlpha(0);
  item.bananaElem4.disable();
  item.bananaElem4.onMouseOver = function() {
    scene[0].setSubtitle("Moscas sendo infectadas por fezes com <i>E. coli</i>");
  }
  item.bananaElem4.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensBananaCiclo.push(item.bananaElem4);

  item["bananaSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.bananaSetaElem4Elem5.setColor(0, 0, 0);
  item.bananaSetaElem4Elem5.setZorder(7);
  item.bananaSetaElem4Elem5.setAlpha(0);
  item.bananaSetaElem4Elem5.disable();
  itensBananaCiclo.push(item.bananaSetaElem4Elem5);

  item["bananaNum5"] = new Game.Text("5", estiloNumeros);
  item.bananaNum5.setAnchor(0.5, 0.6);
  item.bananaNum5.setPosition(1851, 671);
  item.bananaNum5.setAlpha(0);
  item.bananaNum5.disable();
  itensBananaCiclo.push(item.bananaNum5);

  item["bananaElem5"] = new Game.Item("entamoebaCisto.png");
  item.bananaElem5.setPosition(1700, 800);
  item.bananaElem5.setScale(0.56);
  item.bananaElem5.setZorder(6);
  item.bananaElem5.setAlpha(0);
  item.bananaElem5.disable();
  item.bananaElem5.onMouseOver = function() {
    scene[0].setSubtitle("Cisto de <i>E. coli</i>");
  }
  item.bananaElem5.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensBananaCiclo.push(item.bananaElem5);

  item["bananaFechar"] = new Game.Item("botaoFechar.png");
  item.bananaFechar.setPosition(1840, 70);
  item.bananaFechar.setRotation(180);
  item.bananaFechar.setZorder(1);
  item.bananaFechar.setAlpha(0);
  item.bananaFechar.disable();
  item.bananaFechar.onMouseOver = function() {
    item.bananaFechar.addGlow();
  }
  item.bananaFechar.onMouseOut = function() {
    item.bananaFechar.removeGlow();
  }
  item.bananaFechar.onClick = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensBananaCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensBananaCiclo);

      item.estBananaDoente.enable();
      item.estBananaDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensBananaCiclo);
      item.bananaBalaoSintoma.enable();
      item.bananaBalaoSintoma.changeAlpha(1, 600);
      item.bananaTextoSintomas.enable();
      item.bananaTextoSintomas.changeAlpha(1, 600);

      item.bananaAbaPrevencao.enable();
      item.bananaAbaPrevencao.changeAlpha(1, 600);
      item.bananaAbaTransmissao.enable();
      item.bananaAbaTransmissao.changeAlpha(1, 600);

      item.bananaBotaoOK.enable();
      item.bananaBotaoOK.changeAlpha(1, 600);

      item.bananaBalaoPrevencao.setAlpha(1);
      item.bananaBalaoTransmissao.setAlpha(1);
      item.bananaAbaSintomas.setAlpha(1);
      item.bananaBotaoOKhover.setAlpha(1);
      item.bananaTextoPrevencao.setAlpha(1);
      item.bananaTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensBananaCiclo.push(item.bananaFechar);

  var itensBananaDoente = [];

  item["estBananaDoente"] = new Game.Image("estHprdDte.png");
  item.estBananaDoente.setPosition(1218, 668);
  item.estBananaDoente.setZorder(11);
  item.estBananaDoente.setAlpha(0);
  item.estBananaDoente.disable();
  itensBananaDoente.push(item.estBananaDoente);

  item["bananaBalaoSintoma"] = new Game.Image("balSintEsq.png");
  item.bananaBalaoSintoma.setPosition(730, 300);
  item.bananaBalaoSintoma.setScale(0.25);
  item.bananaBalaoSintoma.setZorder(6);
  item.bananaBalaoSintoma.setAlpha(0);
  item.bananaBalaoSintoma.disable();
  itensBananaDoente.push(item.bananaBalaoSintoma);

  item["bananaBalaoPrevencao"] = new Game.Image("balPrevEsq.png");
  item.bananaBalaoPrevencao.setPosition(730, 300);
  item.bananaBalaoPrevencao.setScale(0.25);
  item.bananaBalaoPrevencao.setZorder(6);
  item.bananaBalaoPrevencao.disable();
  itensBananaDoente.push(item.bananaBalaoPrevencao);

  item["bananaBalaoTransmissao"] = new Game.Image("balTranEsq.png");
  item.bananaBalaoTransmissao.setPosition(730, 300);
  item.bananaBalaoTransmissao.setScale(0.25);
  item.bananaBalaoTransmissao.setZorder(6);
  item.bananaBalaoTransmissao.disable();
  itensBananaDoente.push(item.bananaBalaoTransmissao);


  item["bananaAbaSintomas"] = new Game.Item("abaSint.png");
  item.bananaAbaSintomas.setPosition(432, 71);
  item.bananaAbaSintomas.setScale(0.25);
  item.bananaAbaSintomas.setZorder(7);
  item.bananaAbaSintomas.disable();
  item.bananaAbaSintomas.onClick = function() {
    item.bananaBalaoSintoma.enable();
    item.bananaBalaoPrevencao.disable();
    item.bananaBalaoTransmissao.disable();

    item.bananaAbaSintomas.disable();
    item.bananaAbaPrevencao.enable();
    item.bananaAbaTransmissao.enable();

    item.bananaTextoSintomas.enable();
    item.bananaTextoPrevencao.disable();
    item.bananaTextoTransmissao.disable();
  }
  itensBananaDoente.push(item.bananaAbaSintomas);

  item["bananaTextoSintomas"] = new Game.Text("Texto sintomas.", estiloInfoBalao);
  item.bananaTextoSintomas.setPosition(432-130, 71+20);
  item.bananaTextoSintomas.setAlpha(0);
  item.bananaTextoSintomas.disable();
  itensBananaDoente.push(item.bananaTextoSintomas);

  /*item["bananaAbaSintomasHover"] = new Game.Item("abaSintHover.png");
  item.bananaAbaSintomasHover.setPosition(432, 71);
  item.bananaAbaSintomasHover.setScale(0.25);
  item.bananaAbaSintomasHover.setZorder(7);
  item.bananaAbaSintomasHover.disable();
  item.bananaAbaSintomasHover.setInteractive(false);
  item.bananaAbaSintomas.onMouseOut = function() {
    item.bananaAbaSintomas.enable();
    item.bananaAbaSintomasHover.disable();
  }*/

  item["bananaAbaPrevencao"] = new Game.Item("abaPrev.png");
  item.bananaAbaPrevencao.setPosition(432 + 232, 71);
  item.bananaAbaPrevencao.setScale(0.25);
  item.bananaAbaPrevencao.setZorder(7);
  item.bananaAbaPrevencao.setAlpha(0);
  item.bananaAbaPrevencao.disable();
  item.bananaAbaPrevencao.onClick = function() {
    item.bananaBalaoSintoma.disable();
    item.bananaBalaoPrevencao.enable();
    item.bananaBalaoTransmissao.disable();

    item.bananaAbaSintomas.enable();
    item.bananaAbaPrevencao.disable();
    item.bananaAbaTransmissao.enable();

    item.bananaTextoSintomas.disable();
    item.bananaTextoPrevencao.enable();
    item.bananaTextoTransmissao.disable();
  }
  itensBananaDoente.push(item.bananaAbaPrevencao);

  item["bananaTextoPrevencao"] = new Game.Text("Texto prevenção.", estiloInfoBalao);
  item.bananaTextoPrevencao.setPosition(432-130, 71+20);
  item.bananaTextoPrevencao.disable();
  itensBananaDoente.push(item.bananaTextoPrevencao);

  /*item["bananaAbaPrevencaoHover"] = new Game.Item("abaPrevHover.png");
  item.bananaAbaPrevencaoHover.setPosition(432 + 247, 71);
  item.bananaAbaPrevencaoHover.setScale(0.25);
  item.bananaAbaPrevencaoHover.setZorder(7);
  item.bananaAbaPrevencaoHover.setInteractive(false);
  item.bananaAbaPrevencaoHover.disable();
  item.bananaAbaPrevencaoHover.onMouseOut = function() {
    item.bananaAbaPrevencaoHover.setInteractive(false);
    item.bananaAbaPrevencaoHover.disable();
    item.bananaAbaPrevencao.setInteractive(true);
    item.bananaAbaPrevencao.enable();
  }*/

  item["bananaAbaTransmissao"] = new Game.Item("abaTran.png");
  item.bananaAbaTransmissao.setPosition(432 + 482, 71);
  item.bananaAbaTransmissao.setScale(0.25);
  item.bananaAbaTransmissao.setZorder(7);
  item.bananaAbaTransmissao.setAlpha(0);
  item.bananaAbaTransmissao.disable();
  item.bananaAbaTransmissao.onClick = function() {
    item.bananaBalaoSintoma.disable();
    item.bananaBalaoPrevencao.disable();
    item.bananaBalaoTransmissao.enable();

    item.bananaAbaSintomas.enable();
    item.bananaAbaPrevencao.enable();
    item.bananaAbaTransmissao.disable();

    item.bananaTextoSintomas.disable();
    item.bananaTextoPrevencao.disable();
    item.bananaTextoTransmissao.enable();
  }
  itensBananaDoente.push(item.bananaAbaTransmissao);

  item["bananaTextoTransmissao"] = new Game.Text("Texto transmissão.", estiloInfoBalao);
  item.bananaTextoTransmissao.setPosition(432-130, 71+20);
  item.bananaTextoTransmissao.disable();
  itensBananaDoente.push(item.bananaTextoTransmissao);

  /*item["bananaAbaTransmissaoHover"] = new Game.Item("abaTranHover.png");
  item.bananaAbaTransmissaoHover.setPosition(432 + 2*247, 71);
  item.bananaAbaTransmissaoHover.setScale(0.25);
  item.bananaAbaTransmissaoHover.setZorder(7);
  item.bananaAbaTransmissaoHover.disable();*/

  item["bananaBotaoOK"] = new Game.Item("okNormal.png");
  item.bananaBotaoOK.setScale(0.25);
  item.bananaBotaoOK.setPosition(432+450, 71+290);
  item.bananaBotaoOK.setAlpha(0);
  item.bananaBotaoOK.disable();
  item.bananaBotaoOK.onMouseOver = function() {
    item.bananaBotaoOK.disable();
    item.bananaBotaoOKhover.enable();
  }
  itensBananaDoente.push(item.bananaBotaoOK);

  item["bananaBotaoOKhover"] = new Game.Item("okHover.png");
  item.bananaBotaoOKhover.setScale(0.25);
  item.bananaBotaoOKhover.setPosition(432+450, 71+290);
  item.bananaBotaoOKhover.disable();
  item.bananaBotaoOKhover.onMouseOut = function() {
    item.bananaBotaoOKhover.disable();
    item.bananaBotaoOK.enable();
  }
  item.bananaBotaoOKhover.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensBananaDoente, 0, 600);

    setTimeout(function() {
      item.estBananaNormal.enable();
      item.estBananaNormal.setBrightness(220);
      item.estBananaNormal.changeAlpha(1, 600);

      scene[0].background.changeBrightness(210, 600);
      item.carteiras.changeBrightness(210, 600);
      item.mesaProfessor.changeBrightness(210, 600);

      item.estTomateNormal.changeBrightness(210, 600);
      item.estPernNormal.changeBrightness(210, 600);
      item.estGatoNormal.changeBrightness(210, 600);
      item.setaJanela.enable();
      item.setaArmario.enable();
      item.setaJanela.changeAlpha(1, 600);
      item.setaArmario.changeAlpha(1, 600);

      item.bananaBotaoOKhover.disable();
      item.bananaBalaoPrevencao.disable();
      item.bananaBalaoTransmissao.disable();
      item.bananaAbaSintomas.disable();
      item.bananaAbaPrevencao.disable();
      item.bananaAbaTransmissao.disable();
      item.bananaTextoPrevencao.disable();
      item.bananaTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estTomateNormal.setInteractive(true);
      item.estPernNormal.setInteractive(true);
      item.estGatoNormal.setInteractive(true);
      item.estBananaNormal.setInteractive(true);
      item.setaJanela.setInteractive(true);
      item.setaArmario.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensBananaDoente.push(item.bananaBotaoOKhover);

}
