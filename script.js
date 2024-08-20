const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultados = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Ser muito sociável, porém só ter notas baixas.",
                afirmacao: "Afirmação 1",
            },
            {
                texto: "Ter notas altas e ser pouco sociável.",
                afirmacao: "Afirmação 2",
            }]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Acabar com a poluição, mas nunca mais a humanidade andar de carro.",
                afirmacao: "Afirmação 3",
            },
            {
                texto: "Ter muito dinheiro, mas morrer em uma avalanche.",
                afirmacao: "Afirmação 4"
            }]
        },
    {
        enunciado: "No âmbito tecnologico, você prefere:",
    
        alternativas: [
            {
               texto:"Descobrir a cura do câncer, porém nunca mais mexer no celular.",
               afirmacao: "Afirmação 5",
            },
            {
                texto:"Você ser a ultima pessoa a ter câncer na terra, porém morrer em alguns anos.",
                afirmacao: "Afirmação 6"
            }]
    }

]

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPerguntas() {
    if(atual >= perguntas.length){
mostraResultado();
return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();

}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada (opcaoSelecionada ){
    const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + "";
    atual++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaAlternativas.textContent ="Em resumo, você escolheu";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPerguntas();
