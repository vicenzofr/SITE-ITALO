//window.alert("Bem-vindo ao Italo ADV");

// Configuração padrão do ScrollReveal
const sr = ScrollReveal({
    duration: 1500, // Duração da animação (em milissegundos)
    origin: 'bottom', // A animação vem de baixo
    easing: 'ease-in-out', // Suavização
    reset: true, // Permite que a animação aconteça ao rolar para cima e para baixo
    interval: 30, // Intervalo entre a revelação dos elementos
    viewFactor: 0, // Percentual de visibilidade necessário para iniciar a animação
    opacity: 0.1  // Opacidade inicial (evita desaparecer completamente)
});

// Revelando os elementos
sr.reveal('.italo');
sr.reveal('.text-e-imagem');
sr.reveal('.areastrabalho');
sr.reveal('.one');
sr.reveal('.quadradosareas');
sr.reveal('.conte');
sr.reveal('.contato-container');
sr.reveal('.maps');
sr.reveal('.card');


