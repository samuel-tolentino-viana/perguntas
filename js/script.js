const cardDoQuiz = document.querySelector('.quiz-card');
const alternativasSelecionada = document.querySelectorAll('.answer');
const questao = document.getElementById('question');
const botao = document.getElementById('next-btn');
const quantidadeDeQuestoes = document.getElementById('question-number');
const barraProgresso = document.querySelector('.progress');
const pontuacaoTotal = document.getElementById('score');
const cardDeResultado = document.querySelector('.result-card');
const resultadoFinal = document.querySelector('#final-score');
const subResultadoFinal = document.querySelector('#sub-final-score');
const reiniciarJogo = document.getElementById('restart-btn');

let pontuacao = 0;
let nTeste = 0;



fetch('dados/perguntas.json')

    .then(resposta => {
        return resposta.json();
    })

    .then(dadosCompletos => {
        botao.addEventListener('click', () => {
            verificarAltCorreta(dadosCompletos);
            setTimeout(() => {
                verificarAlternativas(dadosCompletos);
                mudarAlternativas(dadosCompletos);
                limparAlternativas();
                perguntaEaumentarBarra();
                limparAlternativas();
            }, 1000);
        });
        reiniciarJogo.addEventListener('click', () => {
            reiniciarQuiz(dadosCompletos);
        });
    });



function limparAlternativas() {
    for (let limpar of alternativasSelecionada) {
        limpar.classList.remove('answer-select')
    };
};

function verificarAlternativas(dds) {
    for (let verif of alternativasSelecionada) {
        if (verif.classList.contains('answer-select')) {
            if (nTeste < 4) {
                nTeste++;
            } else {
                mudarCards();
            }
            questao.innerText = dds[nTeste].pergunta;
        }
    };
};

function mudarAlternativas(dds) {
    for (let i = 0; i < alternativasSelecionada.length; i++) {
        alternativasSelecionada[i].innerText = dds[nTeste].alternativas[i];
    };
};

function perguntaEaumentarBarra() {
    let numeroDaPergunta = nTeste + 1;
    quantidadeDeQuestoes.innerText = `Pergunta ${numeroDaPergunta} de 5`;

    barraProgresso.style.width = `${numeroDaPergunta * 20}%`;
};

function verificarAltCorreta(dds) {
    for (let i = 0; i < alternativasSelecionada.length; i++) {
        if (alternativasSelecionada[i].innerText === dds[nTeste].resposta) {


            alternativasSelecionada[i].classList.remove('wrong');
            alternativasSelecionada[i].classList.add('correct');

            if (alternativasSelecionada[i].classList.contains('answer-select')) {
                pontuacao++;
                pontuacaoTotal.innerText = `Corretas: ${pontuacao}`;

                finalRes(pontuacao);
            }
        }
        else {
            alternativasSelecionada[i].classList.add('wrong');
        }
    };
};

function mudarCards() {
    cardDoQuiz.style.display = 'none';
    cardDeResultado.style.display = 'block';
};

function finalRes(pontfinal) {
    resultadoFinal.innerText = pontfinal;
    subResultadoFinal.innerText = pontfinal;
};

function reiniciarQuiz(dds) {
    cardDeResultado.style.display = 'none';
    cardDoQuiz.style.display = 'block';
    pontuacao = 0;
    pontuacaoTotal.innerText = `Corretas: 0`;
    nTeste = 0;
    limparAlternativas();
    mudarAlternativas(dds);
    questao.innerText = dds[0].pergunta;
    perguntaEaumentarBarra();
};

function limparAlternativas() {
    for (let alternativas of alternativasSelecionada) {
        alternativas.classList.remove('correct', 'wrong', 'answer-select');
    }
};




for (let alternativaclicada of alternativasSelecionada) {
    alternativaclicada.addEventListener('click', () => {
        limparAlternativas();
        alternativaclicada.classList.add('answer-select');
    });
};




// FUNÇÃO QUE CORRIGE A PERGUNTA COM PARAMETRO E OUTRA DE VERIFICAÇÃO