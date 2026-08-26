// LISTAS DE PALAVRAS (cada parte da frase)
const inicios = [
    "Você pode",
    "Nunca esqueça:",
    "Hoje é o dia para",
    "Acredite, você vai",
    "Continue, você está perto de",
    "Seu esforço vai"
];
// ↑ começo das frases

const meios = [
    "conquistar seus objetivos",
    "vencer qualquer desafio",
    "chegar onde quiser",
    "superar tudo isso",
    "evoluir mais um pouco",
    "mudar sua história"
];
// ↑ parte do meio da frase

const finais = [
    "não desista agora.",
    "o sucesso está próximo.",
    "você nasceu pra isso.",
    "confie no processo.",
    "continue tentando.",
    "vai valer a pena."
];
// ↑ final da frase

// FUNÇÃO QUE MONTA UMA FRASE ALEATÓRIA
function gerarFrase() {

    // pega um item aleatório do início
    const inicio = inicios[Math.floor(Math.random() * inicios.length)];

    // pega um item aleatório do meio
    const meio = meios[Math.floor(Math.random() * meios.length)];

    // pega um item aleatório do final
    const final = finais[Math.floor(Math.random() * finais.length)];

    // junta tudo em uma frase só
    return inicio + " " + meio + ", " + final;
}

// FUNÇÃO DO BOTÃO
function motivar() {

    // pega o elemento da tela com id "mensagem"
    const elemento = document.getElementById("mensagem");

    // troca o texto pelo resultado da função gerarFrase()
    elemento.innerText = gerarFrase();
}
