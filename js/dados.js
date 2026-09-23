const barraDeProgresso = document.querySelector('.progress');
const alternativas = document.querySelectorAll('.answer');
const pergunta = document.querySelector('#question');
const botaoProxima = document.querySelector('#next-btn');

fetch('../dados/perguntas.json') // BUSCA O ARQUIVO EM:

    .then(resposta =>  { // ENTÃO FAÇA OQUE ESSA FUNÇÃO DIZ

        return resposta.json(); // RETORNE PARA A PRÓXIMA E json INTERPRETA O CONTEUDO QUE VEIO

    })

    .then(dados => { // RECEBE TODO O CONTEÚDO PARA O JS TRABALHAR COM ELE
        
        // O CÓDIGO CONTINUA AQUI
        console.log(dados);
    });

