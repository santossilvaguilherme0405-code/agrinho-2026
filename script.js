// Espera a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const btnSaibaMais = document.getElementById('btnSaibaMais');

    // Scroll suave ao clicar no botão de "Conhecer Projeto"
    btnSaibaMais.addEventListener('click', () => {
        const sectionProjetos = document.querySelector('#projetos');
        sectionProjetos.scrollIntoView({ behavior: 'smooth' });
    });

    // Efeito de mudança de cor no header ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 5%';
            header.style.backgroundColor = '#f4f9f4';
        } else {
            header.style.padding = '1rem 5%';
            header.style.backgroundColor = 'white';
        }
    });

    console.log("Agrinho 2026: Tecnologia e Sustentabilidade carregado com sucesso!");
});
