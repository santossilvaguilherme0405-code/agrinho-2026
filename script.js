/**
 * PROJETO AGRINHO 2026
 * Autor: [Seu Nome]
 * Funcionalidade: Lógica de equilíbrio e controle de estado
 */

// 1. Variáveis e Constantes Claras (Nomenclatura Significativa)
const inputProducao = document.getElementById('nivel_producao');
const inputPreservacao = document.getElementById('nivel_preservacao');
const displayStatus = document.getElementById('resultado-status');
const btnReset = document.getElementById('btn-reset');

// 2. Transmissão de Mensagens / Funções de Atualização
function calcularEquilibrio() {
    const pld = Number(inputProducao.value); // Valor da produção
    const pre = Number(inputPreservacao.value); // Valor da preservação
    
    // Atualiza os textos na tela// Espera a página carregar
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

    document.getElementById('val_producao').innerText = pld;
    document.getElementById('val_preservacao').innerText = pre;

    // 3. Operadores Lógicos para determinar o nível
    let mensagem = "";
    let corFundo = "";

    if (pld > 80 && pre < 30) {
        mensagem = "ALERTA: Produção insustentável. Risco de esgotamento de recursos!";
        corFundo = "#ff4444";
    } else if (pld >= 50 && pre >= 50) {
        mensagem = "EQUILÍBRIO PERFEITO: Agro forte e natureza protegida.";
        corFundo = "#8bc34a";
    } else {
        mensagem = "EM ANÁLISE: Continue ajustando para encontrar o ponto ideal.";
        corFundo = "#ffbb33";
    }

    displayStatus.innerText = mensagem;
    displayStatus.style.backgroundColor = corFundo;
}

// 4. Laço de Repetição para Eventos (Evitando blocos repetitivos)
[inputProducao, inputPreservacao].forEach(input => {
    input.addEventListener('input', calcularEquilibrio);
});

// 5. Recursos Extras (Botão de Reiniciar)
btnReset.addEventListener('click', () => {
    inputProducao.value = 50;
    inputPreservacao.value = 50;
    calcularEquilibrio();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inicialização com tempo agradável
window.onload = () => {
    setTimeout(calcularEquilibrio, 500); 
};
