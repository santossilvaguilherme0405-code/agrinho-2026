const baseConhecimento = [
    { p: "📉 Baixa Produtividade", s: "Use drones para mapear falhas de nutrientes e aplicar fertilizantes apenas onde é necessário." },
    { p: "💧 Desperdício de Água", s: "Implemente sensores de humidade no solo conectados ao telemóvel para irrigar com precisão." },
    { p: "🦗 Ataque de Pragas", s: "A hidroponia e estufas inteligentes protegem as plantas de pragas externas sem usar venenos." },
    { p: "☀️ Falta de Energia", s: "Instale painéis solares para alimentar as bombas de água e reduzir custos fixos." }
];

// Iniciar Central de Dúvidas
function iniciarSuporte() {
    const container = document.getElementById('lista-problemas');
    if (!container) return;
    baseConhecimento.forEach(item => {
        const btn = document.createElement('button');
        btn.innerText = item.p;
        btn.className = 'btn-problema';
        btn.onclick = () => {
            document.getElementById('texto-resposta').innerHTML = `<strong>💡 Solução Técnica:</strong> ${item.s}`;
        };
        container.appendChild(btn);
    });
}

// Opção de Zoom
let zoomAtual = 1.0;
function alterarZoom(fator) {
    zoomAtual *= fator;
    if (zoomAtual < 0.7) zoomAtual = 0.7;
    if (zoomAtual > 1.4) zoomAtual = 1.4;
    document.body.style.zoom = zoomAtual;
}

// Adicionar Foto da Comunidade
function adicionarFoto() {
    const input = document.getElementById('input-foto');
    const galeria = document.getElementById('galeria-usuario');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const figure = document.createElement('figure');
            figure.className = 'item-foto';
            figure.innerHTML = `
                <img src="${e.target.result}" alt="Foto do Usuário">
                <figcaption>Enviada por Usuário</figcaption>
            `;
            galeria.prepend(figure);
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        alert("Por favor, selecione uma imagem primeiro!");
    }
}

// Alternar Tema
document.getElementById('btn-theme').onclick = () => {
    document.body.classList.toggle('dark-mode');
};

// Reiniciar
document.getElementById('btn-reset').onclick = () => {
    location.reload();
};

window.onload = iniciarSuporte;
