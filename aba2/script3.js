var indiceAtual = 0;
var salvo = false;

function abrirFotos(indice) {
  indiceAtual = indice;
  mostrarFoto();
  document.getElementById("visor").style.display = "flex";
}

function fecharFotos() {
  document.getElementById("visor").style.display = "none";
}

function mudarFoto(passo) {
  var total = document.getElementsByClassName("fotoGaleria").length;
  indiceAtual = (indiceAtual + passo + total) % total;
  mostrarFoto();
}

function mostrarFoto() {
  var fotos = document.getElementsByClassName("fotoGaleria");
  var imagem = document.getElementById("visorImagem");
  imagem.src = fotos[indiceAtual].src;
  imagem.alt = fotos[indiceAtual].alt;
  document.getElementById("visorContador").textContent = (indiceAtual + 1) + " / " + fotos.length;
}

function salvar() {
  var botao = document.getElementById("botaoSalvar");
  if (salvo == false) {
    botao.textContent = "Salvo ✓";
    botao.classList.add("botaoAtivo");
    salvo = true;
  } else {
    botao.textContent = "Salvar";
    botao.classList.remove("botaoAtivo");
    salvo = false;
  }
}

function compartilhar() {
  if (navigator.share) {
    navigator.share({ title: document.title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado!");
  }
}

document.onkeydown = function (evento) {
  if (document.getElementById("visor").style.display != "flex") {
    return;
  }
  if (evento.key == "Escape") {
    fecharFotos();
  }
  if (evento.key == "ArrowRight") {
    mudarFoto(1);
  }
  if (evento.key == "ArrowLeft") {
    mudarFoto(-1);
  }
};
