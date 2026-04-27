// 1. Variáveis Significativas
const btnTema = document.getElementById('btn-theme');
const inTech = document.getElementById('input-tech');
const inMata = document.getElementById('input-mata');
const statusAgro = document.getElementById('status-agro');

// 2. Função de Modo Escuro (Recurso Extra)
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    btnTema.innerText = isDark ? "☀️ Modo Claro" : "🌓 Modo Escuro";
});

// 3. Lógica de Equilíbrio (Operadores Lógicos)
function atualizarPainel() {
    const tech = Number(inTech.value);
    const mata = Number(inMata.value);
    
    document.getElementById('txt-tech').innerText = tech;
    document.getElementById('txt-mata').innerText = mata;

    if (tech > 70 && mata < 40) {
        statusAgro.innerText = "CUIDADO: Alta produção com baixa preservação gera desequilíbrio!";
        statusAgro.style.color = "#e74c3c";
    } else if (tech >= 50 && mata >= 50) {
        statusAgro.innerText = "SUCESSO: Você atingiu o Agro Sustentável!";
        statusAgro.style.color = "#2ecc71";
    } else {
        statusAgro.innerText = "Continue ajustando para encontrar o equilíbrio.";
        statusAgro.style.color = "var(--texto)";
    }
}

// 4. Laço de Repetição para Ouvintes de Evento (Eficiência)
[inTech, inMata].forEach(item => {
    item.addEventListener('input', atualizarPainel);
});

// 5. Função do Quiz (Interatividade)
function responderQuiz(correto) {
    const res = document.getElementById('res-quiz');
    if (correto) {
        res.innerText = "✅ Correto! O plantio direto evita a erosão.";
        res.style.color = "#2ecc71";
    } else {
        res.innerText = "❌ Tente novamente! A preservação do solo é a chave.";
        res.style.color = "#e74c3c";
    }
}

// Botão Ver Mais (Simulação de carregamento)
document.getElementById('btn-foto-mais').addEventListener('click', () => {
    alert("Carregando mais inovações do Agrinho 2026...");
});
