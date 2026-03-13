/**
 * Lógica de Visibilidade: Kevin
 * Controla a aparição sequencial conforme o scroll (ida e volta).
 */
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('active');
            
            // Lógica específica para o efeito de digitação reiniciar
            const spanDigitar = entrada.target.querySelector('.efeito-digitar');
            if (spanDigitar) {
                spanDigitar.style.animation = 'none';
                spanDigitar.offsetHeight; // Truque de reflow
                spanDigitar.style.animation = null;
            }
        } else {
            // Remove a classe quando o elemento sai da visão (para cima ou para baixo)
            // Isso permite que a animação ocorra novamente ao voltar
            entrada.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.1, // Ativa um pouco mais rápido (10% de visibilidade)
    rootMargin: "0px"
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos de scroll
    const elementosParaRevelar = document.querySelectorAll('.revelacao-visual, .revelacao, .principal');
    elementosParaRevelar.forEach(el => observador.observe(el));

    // 2. Garantir que o texto inicial também seja observado
    // Adicionamos a classe 'revelacao' no HTML para o texto do topo se quiser que ele suma/volte
});