document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnSaibaMais');

    btn.addEventListener('click', () => {
        // Rola suavemente para a seção "Sobre"
        document.getElementById('sobre').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        // Pequena interação de alerta
        console.log("Iniciando jornada rumo ao futuro sustentável!");
    });
});
