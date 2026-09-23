const alternativasSelecionada = document.querySelectorAll('.answer');
const botao = document.querySelector('#next-btn');



function limparAlternativas() {
    for(let limpar of alternativasSelecionada) {
        limpar.classList.remove('answer-select')
    }
};



for(let alternativaclicada of alternativasSelecionada) {
    alternativaclicada.addEventListener('click', () => {
        limparAlternativas();
        alternativaclicada.classList.add('answer-select');
    });
};



botao.addEventListener('click', () => {
    limparAlternativas();
});

// FUNÇÃO QUE CORRIGE A PERGUNTA COM PARAMETRO E OUTRA DE VERIFICAÇÃO