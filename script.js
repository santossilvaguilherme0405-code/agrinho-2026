/**
 * PROJETO AGRINHO 2026
 * Lógica de Interatividade e Sustentabilidade
 */

// 1. MAPEAMENTO DE ELEMENTOS (Variáveis com nomes claros)
const btnTema = document.getElementById('btn-theme');
const btnReset = document.getElementById('btn-reset');
const inputTech = document.getElementById('input-tech');
const inputMata = document.getElementById('input-mata');
const displayStatus = document.getElementById('status-agro');

// 2. FUNÇÃO: ALTERNAR TEMA (Dark Mode)
if (btnTema) {
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Transmissão de mensagem visual
        const estaNoModoEscuro = document.body.classList.contains('dark-mode');
        btnTema.innerText = estaNoModoEscuro ? "☀️ Modo Claro" : "🌓 Modo Escuro";
        console.log("Tema alterado com sucesso.");
    });
}

// 3. FUNÇÃO: SIMULADOR DE EQUILÍBRIO (Lógica e Operadores)
function calcularImpacto() {
    // Transformando valores dos sliders em números
    const nivelTech = Number(inputTech.value);
    const nivelMata = Number(inputMata.value);

    // Atualizando os textos na tela (Feedback em tempo real)
    document.getElementById('txt-tech').innerText = nivelTech;
    document.getElementById('txt-mata').innerText = nivelMata;

    // Lógica de decisão (Operadores Lógicos &&)
    if (nivelTech > 80 && nivelMata < 30) {
        displayStatus.innerText = "ALERTA: Produção insustentável! Risco de esgotamento do solo.";
        displayStatus.style.backgroundColor = "#ff4d4d"; // Vermelho
        displayStatus.style.color = "white";
    } else if (nivelTech >= 50 && nivelMata >= 50) {
        displayStatus.innerText = "EXCELENTE: O equilíbrio perfeito entre tecnologia e natureza!";
        displayStatus.style.backgroundColor = "#2ecc71"; // Verde
        displayStatus.style.color = "white";
    } else {
        displayStatus.innerText = "EM ANÁLISE: Ajuste os níveis para buscar a sustentabilidade.";
        displayStatus.style.backgroundColor = "#f1c40f"; // Amarelo
        displayStatus.style.color = "black";
    }
}

// 4. LAÇO DE REPETIÇÃO: Adiciona o evento nos dois sliders de uma vez
[inputTech, inputMata].forEach(slider => {
    if (slider) {
        slider.addEventListener('input', calcularImpacto);
    }
});

// 5. FUNÇÃO: QUIZ (Chamada via HTML onclick)
function responderQuiz(escolhaCorreta) {
    const feedbackQuiz = document.getElementById('res-quiz');
    
    if (escolhaCorreta) {
        feedbackQuiz.innerText = "✅ Parabéns! O plantio direto protege a biodiversidade do solo.";
        feedbackQuiz.style.color = "#27ae60";
    } else {
        feedbackQuiz.innerText = "❌ Quase lá! Tente refletir sobre a importância da cobertura do solo.";
        feedbackQuiz.style.color = "#e74c3c";
    }
}

// 6. FUNÇÃO: REINICIAR (Recurso Extra)
if (btnReset) {
    btnReset.addEventListener('click', () => {
        inputTech.value = 50;
        inputMata.value = 50;
        calcularImpacto();
        // Rola a tela para o topo suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Inicializa o simulador ao carregar a página
window.onload = calcularImpacto;
