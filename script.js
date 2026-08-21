// 1. Variável para guardar o total de cliques
let totalCliques = 0;

// 2. Lista (Array) com as frases de poder e atitude
let frases = [
    "Você não veio ao mundo para ser coadjuvante. O show é seu.",
    "Enquanto eles duvidam, você constrói o império. Deixe que falem.",
    "Eles tentaram te enterrar, mas esqueceram que você é uma semente de gigante.",
    "O medo olha para você e muda de calçada.",
    "Você é a tempestade que os outros tentam prever. Avance.",
    "Ninguém consegue parar alguém que descobriu a própria força. E você descobriu.",
    "Você é o pesadelo dos seus problemas e o dono do seu destino.",
    "Olhe no espelho: essa é a única pessoa que tem o poder de te parar. Ou seja, ninguém.",
    "Suas maiores vitórias são aquelas que você conquistou quando todos achavam que era o fim.",
    "A sua mente é uma máquina de vencer. Ligue o motor e não olhe para trás.",
    "Eles querem o seu topo, mas não aguentariam carregar o peso do seu escudo.",
    "Você não tem sorte, você tem competência e uma força que assusta os fracos.",
    "Você nasceu para quebrar recordes, não para seguir regras comuns.",
    "Se o caminho está difícil, é porque você subiu de nível. Mostre quem manda.",
    "Você é o tipo de pessoa que faz o mundo parar para ver você passar."
];

// 3. Função que roda toda vez que o botão é clicado
function computarClique() {
    // Aumenta o contador em +1
    totalCliques = totalCliques + 1;


    // Sorteia um número de 0 até o tamanho da lista de frases
    let numeroSorteado = Math.floor(Math.random() * frases.length);

    // Pega a frase sorteada e coloca na tela
    document.getElementById("frase").innerText = frases[numeroSorteado];

    // Variáveis de atalho para manipulação dos elementos do HTML
    const corpo = document.body;
    const recompensa = document.getElementById("recompensa");
    const fraseNivel = document.getElementById("frase-nivel");
    const botao = document.getElementById("btn-principal");

    // Limpa classes de efeitos temporários antigos para poderem ser reaplicados
    corpo.classList.remove("efeito-tremor");
    recompensa.className = ""; 

    // --- SISTEMA DE RECOMPENSA COM FRASES MARCANTES E EFEITOS EXCLUSIVOS ---
    
    // Nível 1: 10 cliques (Modo Bronze) -> EFEITO: Impacto físico e tremor de terra
    if (totalCliques === 10) {
        recompensa.innerText = "🥉 INCRÍVEL! Você atingiu 10 cliques e liberou o Modo Bronze!";
        recompensa.style.color = "#cd7f32"; 
        corpo.style.backgroundColor = "#faebd7"; 
        botao.style.backgroundColor = "#cd7f32";

        // Efeito Visual: Tremor na tela
        corpo.classList.add("efeito-tremor");
        
        fraseNivel.innerText = "Você está avançando cada vez mais. Imagine que seus cliques são o caminho exato que você está pavimentando para o seu futuro.";
        fraseNivel.style.color = "#8b4513";
    }
    
    // Nível 2: 50 cliques (Modo Prata) -> EFEITO: Expansão do botão e suavidade
    if (totalCliques === 50) {
        recompensa.innerText = "🥈 SENSACIONAL! Você atingiu 50 cliques e liberou o Modo Prata!";
        recompensa.style.color = "#708090"; 
        corpo.style.backgroundColor = "#e6e6fa"; 
        botao.style.backgroundColor = "#708090";

        // Efeito Visual: O botão cresce permanentemente para mostrar evolução de poder
        botao.style.padding = "18px 40px";
        botao.style.fontSize = "22px";

        // Aplica surgimento suave nos textos novos
        recompensa.classList.add("efeito-fade");
        fraseNivel.classList.add("efeito-fade");
        
        fraseNivel.innerText = "Olhe para trás e veja a distância que você já percorreu. A consistência silenciosa constrói os maiores impérios.";
        fraseNivel.style.color = "#4a4a4a";
    }

    // Nível 3: 100 cliques (Modo Ouro) -> EFEITO: Chuva de Moedas / Alerta de conquista
    if (totalCliques === 100) {
        recompensa.innerText = "🥇 MITO! Você atingiu 100 cliques e liberou o Modo Ouro!";
        recompensa.style.color = "#d4af37"; 
        corpo.style.backgroundColor = "#fff8e7"; 
        botao.style.backgroundColor = "#d4af37";

        // Efeito Visual: Janela de conquista clássica de jogos no navegador
        alert("✨ CONQUISTA DESBLOQUEADA: Você alcançou os 100 cliques dourados! ✨");

        // Deixa o título brilhando e pulsando ouro conforme o CSS anterior
        recompensa.classList.add("efeito-pulso-ouro");
        
        fraseNivel.innerText = "A maioria das pessoas desiste antes dos cem passos. Ao insistir, você acabou de provar que a sua mente não aceita a média.";
        fraseNivel.style.color = "#8b6508";
    }

    // Nível 4: 500 cliques (Modo Diamante) -> EFEITO: Cristalização e Bordas
    if (totalCliques === 500) {
        recompensa.innerText = "💎 INSANO! Você atingiu 500 cliques e liberou o Modo Diamante!";
        recompensa.style.color = "#00bfff"; 
        corpo.style.backgroundColor = "#e0ffff"; 
        botao.style.backgroundColor = "#00bfff";

        // Efeito Visual: O botão ganha uma borda dupla brilhante simulando lapidação
        botao.style.border = "4px double #ffffff";
        botao.style.boxShadow = "0 0 15px #00bfff";

        // Ativa reflexo cintilante de diamante no texto
        recompensa.classList.add("efeito-diamante");
        
        fraseNivel.innerText = "Assim como o diamante, você está sendo moldado sob extrema pressão. O que antes parecia um esforço absurdo, agora se tornou o seu ritmo natural.";
        fraseNivel.style.color = "#008b8b";
    }

    // Nível 5: 1.000 cliques (Modo Hacker) -> EFEITO: Modificação completa da interface do sistema
    if (totalCliques === 1000) {
        recompensa.innerText = "🌌 LENDÁRIO! Você alcançou 1.000 cliques e desbloqueou o Modo Infinito!";
        recompensa.style.color = "#39ff14"; 
        corpo.style.backgroundColor = "#0f172a"; 
        corpo.style.color = "#ffffff"; 
        document.getElementById("frase").style.color = "#e2e8f0";
        
        // Efeito Visual: Botão vira uma barra hacker minimalista com bordas neon puras
        botao.style.backgroundColor = "transparent";
        botao.style.color = "#39ff14";
        botao.style.border = "2px solid #39ff14";
        botao.style.fontWeight = "bold";
        botao.style.boxShadow = "0 0 20px #39ff14";
        botao.innerText = "SISTEMA INTEGRADO";

        // Ativa efeito de luz neon piscante verde
        recompensa.classList.add("efeito-hacker");
        
        fraseNivel.innerText = "Você rompeu a barreira do comum. Mil ações repetidas com foco criam maestria. Você não está apenas jogando, você está pronto para dominar qualquer área da sua vida.";
        fraseNivel.style.color = "#a7f3d0";
    }
}
