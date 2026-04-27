/**
 * LÓGICA AGRINHO 2026
 * Responsável por: Simulação, Tema e Quiz.
 */

// 1. Definição de Variáveis e Seleção de Elementos
const inTech = document.getElementById('input-tech');
const inMata = document.getElementById('input-mata');
const txtTech = document.getElementById('txt-tech');
const txtMata = document.getElementById('txt-mata');
const statusBox = document.getElementById('status-agro');
const btnReset = document.getElementById('btn-reset');
const btnTema = document.getElementById('btn-theme');

// 2. Função de Simulação (Uso de Operadores Lógicos)
function atualizarSimulacao() {
    const valorTech = Number(inTech.value);
    const valorMata = Number(inMata.value);

    // Atualiza o texto na interface
    txtTech.innerText = valorTech;
    txtMata.innerText = valorMata;

    // Lógica de Equilíbrio
    if (valorTech > 80 && valorMata < 30) {
        statusBox.innerText = "ALERTA: Produção insustentável. Risco ambiental alto!";
        statusBox.style.backgroundColor = "#e74c3c";
        statusBox.style.color = "white";
    } else if (valorTech >= 50 && valorMata >= 50) {
        statusBox.innerText = "EQUILÍBRIO: Você atingiu a meta de Agro Sustentável!";
        statusBox.style.backgroundColor = "#27ae60";
        statusBox.style.color = "white";
    } else {
        statusBox.innerText = "Ajuste os controles para melhorar o desempenho.";
        statusBox.style.backgroundColor = "#f1c40f";
        statusBox.style.color = "#333";
    }
}

// 3. Laço de Repetição (Fundamentos da Computação)
// Adiciona o evento de input em todos os sliders da lista
[inTech, inMata].forEach(slider => {
    slider.addEventListener('input', atualizarSimulacao);
});

// 4. Recurso Extra: Alternar Tema
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    btnTema.innerText = isDark ? "☀️ Modo Claro" : "🌓 Modo Escuro";
});
