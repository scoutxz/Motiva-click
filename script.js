// FRASES
const inicios = [
    "Você pode",
    "Nunca esqueça:",
    "Hoje é o dia para",
    "Acredite, você vai",
    "Continue, você está perto de",
    "Seu esforço vai"
];

const meios = [
    "conquistar seus objetivos",
    "vencer qualquer desafio",
    "chegar onde quiser",
    "superar tudo isso",
    "evoluir mais um pouco",
    "mudar sua história"
];

const finais = [
    "não desista agora.",
    "o sucesso está próximo.",
    "você nasceu pra isso.",
    "confie no processo.",
    "continue tentando.",
    "vai valer a pena."
];

// 🐉 DRAGÕES
const dragoes = [
    "https://media.tenor.com/ItloOf_4U-AAAAAi/toothless-dancing.gif",
    "https://media.tenor.com/ip2ijY0tIfsAAAAi/dance-dragon.gif",
    "https://media.tenor.com/O5BuhhRREWEAAAAi/dragon-wow.gif",
    "https://media.tenor.com/XU_t4XSavoIAAAAi/dragon-happy.gif"
];

// FRASE
function gerarFrase() {
    return `${inicios[Math.floor(Math.random() * inicios.length)]} 
    ${meios[Math.floor(Math.random() * meios.length)]}, 
    ${finais[Math.floor(Math.random() * finais.length)]}`;
}

document.addEventListener("DOMContentLoaded", () => {

    const dragao = document.getElementById("dragao");
    const mensagem = document.getElementById("mensagem");
    const select = document.getElementById("selectDragao");
    const auto = document.getElementById("autoTroca");

    let x = 0, y = 0;
    let usados = [];

    // preencher select
    dragoes.forEach((d, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = "Dragão " + (i + 1);
        select.appendChild(option);
    });

    // segue mouse
    document.addEventListener("mousemove", (e) => {
        x += (e.clientX - x) * 0.1;
        y += (e.clientY - y) * 0.1;

        dragao.style.transform = `translate(${x}px, ${y}px)`;
    });

    // botão motivar
    window.motivar = function () {

        mensagem.innerText = gerarFrase();

        if (auto.checked) {

            if (usados.length === dragoes.length) {
                usados = [];
            }

            let novo;

            do {
                novo = dragoes[Math.floor(Math.random() * dragoes.length)];
            } while (usados.includes(novo));

            usados.push(novo);

            dragao.src = novo;

            select.value = dragoes.indexOf(novo);
        }
    };

    // troca manual
    window.trocarDragaoManual = function () {
        dragao.src = dragoes[select.value];
    };

});