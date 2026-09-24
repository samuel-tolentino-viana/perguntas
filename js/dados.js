const barraDeProgresso = document.querySelector('.progress');
let perguntaDaQuest = document.querySelector('#question');
const botaoProxima = document.querySelector('#next-btn');
const marqueAlternativa  = document.querySelector('.alert');



function mudarquestao(dadosJson) {
    let lista = 0;
    botaoProxima.addEventListener('click', () => {
        let alternativas = document.querySelectorAll('.answer');
        for(let alt of alternativas) {
            if(alt.classList.contains('answer-select')) {
                perguntaDaQuest.innerHTML = dadosJson[lista].pergunta;
                lista++;
                marqueAlternativa.innerText = '';
            } else {
                marqueAlternativa.innerText = 'Marque uma alternativa acima!';
            }
        };
    });
};




fetch('../dados/perguntas.json') // BUSCA O ARQUIVO EM:

    .then(resposta =>  { // ENTÃO FAÇA OQUE ESSA FUNÇÃO DIZ

        return resposta.json(); // RETORNE PARA A PRÓXIMA E json INTERPRETA O CONTEUDO QUE VEIO

    })

    .then(dados => { // RECEBE TODO O CONTEÚDO PARA O JS TRABALHAR COM ELE
        
        // O CÓDIGO CONTINUA AQUI
        console.log(dados);
        mudarquestao(dados);
    });


