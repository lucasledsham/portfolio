// Scroll Animacao

window.sr = ScrollReveal({ reset: false }); // Define reset para false

// Apresentacao
sr.reveal(".conteudo", {
  duration: 3500,
});
sr.reveal(".apresentacao-texto", {
  rotate: { x: 0, y: 50, z: 0 },
  duration: 5200,
});
sr.reveal(".apresentacao-texto1", {
  rotate: { x: 0, y: 50, z: 0 },
  duration: 5200,
});

sr.reveal(".desenho img", {
  rotate: { x: 0, y: 0, z: 900 },
  duration: 4000,
});
// /Apresentacao

// Subtitulo Formacao
sr.reveal(".subtitulo", { duration: 1800 });
// /Subtitulo Formacao

// Links
sr.reveal(".links-email", { duration: 1200 });
sr.reveal(".links-git", { duration: 1800 });
sr.reveal(".links-linkedin", { duration: 2400 });
sr.reveal(".links-curriculo", { duration: 3000 });
sr.reveal(".links-wpp", { duration: 3600 });
sr.reveal(".links-instagram", { duration: 4200 });
// /Links

// ANIMACAO de Scroll para Anchors
var page = $("html, body");
var animationDuration = 2000;

$(".anchor").click(function () {
  page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, animationDuration);
  return false;
});
