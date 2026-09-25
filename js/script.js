const alternativasSelecionada = document.querySelectorAll('.answer');
const questao = document.querySelector('#question');
const botao = document.querySelector('#next-btn');
const quantidadeDeQuestoes = document.querySelector('#question-number');
const barraProgresso = document.querySelector('.progress');

let nTeste = 0;


fetch('../dados/perguntas.json')

    .then(resposta => {
        return resposta.json();
    })

    .then(dadosCompletos => {
        botao.addEventListener('click', ()  => {
            verificarAlternativas(dadosCompletos);
            mudarAlternativas(dadosCompletos);
            limparAlternativas();
            perguntaEaumentarBarra();
        });
    });



function limparAlternativas() {
    for(let limpar of alternativasSelecionada) {
        limpar.classList.remove('answer-select')
    };
};

function verificarAlternativas(dds) {
    for(let verif of alternativasSelecionada) {
        if(verif.classList.contains('answer-select')) {
            nTeste++;
            questao.innerText = dds[nTeste].pergunta;
        }
    };
};

function mudarAlternativas(dds) {
    for(let i = 0; i<alternativasSelecionada.length; i++) {
        alternativasSelecionada[i].innerText = dds[nTeste].alternativas[i];
    };
};


function perguntaEaumentarBarra() {
    quantidadeDeQuestoes.innerText = `Pergunta ${nTeste+1} de 5`;

    switch(nTeste) {
        case nTeste==1:
            barraProgresso.style.width = '40%';
            break
        default:
            barraProgresso.style.width = '0%';
    };
};


for(let alternativaclicada of alternativasSelecionada) {
    alternativaclicada.addEventListener('click', () => {
        limparAlternativas();
        alternativaclicada.classList.add('answer-select');
    });
};



// FUNÇÃO QUE CORRIGE A PERGUNTA COM PARAMETRO E OUTRA DE VERIFICAÇÃO