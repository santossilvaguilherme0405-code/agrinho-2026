/**
 * LÓGICA AGRINHO 2026
 * Responsável por: Simulação, Tema e Quiz.
 */

// 1. Seleção de Elementos com Verificação
const inTech = document.getElementById('input-tech');
const inMata = document.getElementById('input-mata');
const txtTech = document.getElementById('txt-tech');
const txtMata = document.getElementById('txt-mata');
const statusBox = document.getElementById('status-agro');
const btnReset = document.getElementById('btn-reset');
const btnTema = document.getElementById('btn-theme');

// 2. Função de Simulação (Melhorada)
function atualizarSimulacao() {
    // Verificamos se os elementos existem para evitar erros no console
    if (!inTech || !inMata || !statusBox) return;

    const valorTech = Number(inTech.value);
    const valorMata = Number(inMata.value);

    if (txtTech) txtTech.innerText = valorTech;
    if (txtMata) txtMata.innerText = valorMata;

    if (valorTech > 80 && valorMata < 30) {
        statusBox.innerText = "ALERTA: Produção insustentável. Risco ambiental alto!";
        statusBox.style.background = "#e74c3c";
        statusBox.style.color = "white";
    } else if (valorTech >= 50 && valorMata >= 50) {
        statusBox.innerText = "EQUILÍBRIO: Você atingiu a meta de Agro Sustentável!";
        statusBox.style.background = "#27ae60";
        statusBox.style.color = "white";
    } else {
        statusBox.innerText = "Ajuste os controles para melhorar o desempenho.";
        statusBox.style.background = "#f1c40f";
        statusBox.style.color = "#333";
    }
}

// 3. Eventos dos Sliders
[inTech, inMata].forEach(slider => {
    if (slider) slider.addEventListener('input', atualizarSimulacao);
});

// 4. Recurso Extra: Alternar Tema (DARK MODE)
if (btnTema) {
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        btnTema.innerText = isDark ? "☀️ Modo Claro" : "🌓 Modo Escuro";
    });
}

// 5. Função do Botão Reiniciar (Faltava isso!)
if (btnReset) {
    btnReset.addEventListener('click', () => {
        inTech.value = 50;
        inMata.value = 50;
        atualizarSimulacao();
        console.log("Sistema reiniciado pelo usuário.");
    });
}

// Inicia a lógica assim que a página carrega
window.onload = atualizarSimulacao;
