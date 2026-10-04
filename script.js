document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideItems = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carrossel = document.querySelector('.carrossel');

  let indiceAtual = 0;
  const totalSlides = slideItems.length;
  let intervalo;

  // Atualiza a posição da imagem
  function atualizarSlide() {
    slides.style.transform = `translateX(-${indiceAtual * 100}%)`;
  }

  function proximoSlide() {
    indiceAtual = (indiceAtual + 1) % totalSlides;
    atualizarSlide();
  }

  function slideAnterior() {
    indiceAtual = (indiceAtual - 1 + totalSlides) % totalSlides;
    atualizarSlide();
  }

  // Inicia o timer de rotação automática
  function iniciarTimer() {
    intervalo = setInterval(proximoSlide, 3500); // Muda a cada 3.5 segundos
  }

  function pararTimer() {
    clearInterval(intervalo);
  }

  // Eventos dos botões manuais
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      pararTimer();
      proximoSlide();
      iniciarTimer();
    });

    prevBtn.addEventListener('click', () => {
      pararTimer();
      slideAnterior();
      iniciarTimer();
    });
  }

  // Pausa ao passar o ponteiro do mouse por cima
  carrossel.addEventListener('mouseenter', pararTimer);
  carrossel.addEventListener('mouseleave', iniciarTimer);

  // Inicializa o carrossel
  iniciarTimer();
});