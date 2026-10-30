const gifsAnimais = {
  lobo: "animais/lobo.png",
  raposa: "animais/raposa 1.png",
  tatu: "animais/tatu.png",
  gato: "animais/Cat.png",
  abelha: "animais/abelha.png",
  coelho: "animais/coelho.png",
  coruja: "animais/coruja.png",
  calopsita: "animais/parrot grey.png",
  golfinho: "animais/golfinho.png",
  raposa1: "animais/raposa 1.png",
  morcego: "animais/bat.png",
  pinguim: "animais/pinguim.png",
  urso_polar: "animais/urso_polar.png",
  cervo: "animais/cervo.png",
  tartaruga: "animais/tartaruga.png"
};

// Frases motivacionais
const inicios = [
  "Você pode",
  "Nunca esqueça: você é capaz de",
  "Hoje é o dia para",
  "Acredite, você vai",
  "Continue, você está perto de",
  "Seu esforço vai ajudar você a"
];

const meios = [
  "conquistar seus objetivos",
  "vencer qualquer desafio",
  "chegar onde quiser",
  "superar essa fase",
  "evoluir mais um pouco",
  "mudar sua história"
];

const finais = [
  "um passo de cada vez.",
  "o sucesso é construído com persistência.",
  "confie no seu potencial.",
  "respeite seu tempo e continue.",
  "cada tentativa ensina algo.",
  "seu esforço importa."
];

// Animais em estilo voxel inspirado em Minecraft; todos os arquivos são PNG locais.
const animaisPorTema = {
  primavera: {
    manha: { nome: "Abelha Minecraft", gif: gifsAnimais.abelha },
    tarde: { nome: "Coelho Minecraft", gif: gifsAnimais.coelho },
    noite: { nome: "Raposa Minecraft", gif: gifsAnimais.raposa },
    madrugada: { nome: "Calopsita Minecraft", gif: gifsAnimais.calopsita }
  },
  verao: {
    manha: { nome: "Tatu Minecraft", gif: gifsAnimais.tatu },
    tarde: { nome: "Golfinho Minecraft", gif: gifsAnimais.golfinho },
    noite: { nome: "Tartaruga Minecraft", gif: gifsAnimais.tartaruga },
    madrugada: { nome: "Gato Minecraft", gif: gifsAnimais.gato }
  },
  outono: {
    manha: { nome: "Raposa Minecraft", gif: gifsAnimais.raposa },
    tarde: { nome: "Cervo Minecraft", gif: gifsAnimais.cervo },
    noite: { nome: "Morcego Minecraft", gif: gifsAnimais.morcego },
    madrugada: { nome: "Raposa Minecraft", gif: gifsAnimais.raposa }
  },
  inverno: {
    manha: { nome: "Lobo Minecraft", gif: gifsAnimais.lobo },
    tarde: { nome: "Urso polar Minecraft", gif: gifsAnimais.urso_polar },
    noite: { nome: "Pinguim Minecraft", gif: gifsAnimais.pinguim },
    madrugada: { nome: "Coruja Minecraft", gif: gifsAnimais.coruja }
  }
};

const fallbackAnimal = {
  nome: "Lobo Minecraft",
  gif: gifsAnimais.lobo
};

function obterAnimalAtual() {
  const periodo = document.body.dataset.periodo || obterPeriodo(new Date().getHours());
  const estacao = document.body.dataset.estacao || obterEstacao(new Date());
  return (animaisPorTema[estacao] && animaisPorTema[estacao][periodo]) || fallbackAnimal;
}

function gerarFrase() {
  const inicio = inicios[Math.floor(Math.random() * inicios.length)];
  const meio = meios[Math.floor(Math.random() * meios.length)];
  const final = finais[Math.floor(Math.random() * finais.length)];
  return `${inicio} ${meio}; ${final}`;
}

function obterPeriodo(hora) {
  if (hora >= 5 && hora < 12) return "manha";
  if (hora >= 12 && hora < 18) return "tarde";
  if (hora >= 18 && hora < 21) return "noite";
  return "madrugada";
}

// Estações meteorológicas do hemisfério sul (Brasil), aproximadas pelo calendário.
function obterEstacao(data) {
  const mes = data.getMonth() + 1;
  const dia = data.getDate();

  if ((mes === 12 && dia >= 21) || mes === 1 || mes === 2 || (mes === 3 && dia < 20)) return "verao";
  if ((mes === 3 && dia >= 20) || mes === 4 || mes === 5 || (mes === 6 && dia < 21)) return "outono";
  if ((mes === 6 && dia >= 21) || mes === 7 || mes === 8 || (mes === 9 && dia < 22)) return "inverno";
  return "primavera";
}

const temas = {
  manha: {
    saudacao: "UM NOVO DIA, UMA NOVA CHANCE",
    texto: "A manhã chegou: comece no seu ritmo e acredite no que você pode construir."
  },
  tarde: {
    saudacao: "CONTINUE AVANÇANDO",
    texto: "Faça uma pausa, recarregue as energias e siga em frente."
  },
  noite: {
    saudacao: "VOCÊ CHEGOU ATÉ AQUI",
    texto: "Reconheça seu esforço de hoje. Amanhã é outra oportunidade."
  },
  madrugada: {
    saudacao: "VÁ COM CALMA",
    texto: "Mesmo nos momentos silenciosos, você pode recomeçar no seu tempo."
  }
};

const nomesEstacoes = {
  verao: "Verão",
  outono: "Outono",
  inverno: "Inverno",
  primavera: "Primavera"
};

let estacaoForcada = null;
let periodoForcado = null;

function atualizarTema() {
  const agora = new Date();
  const hora = agora.getHours();
  const periodo = periodoForcado || obterPeriodo(hora);
  const estacao = estacaoForcada || obterEstacao(agora);

  // A prévia aplica a paleta correspondente ao período escolhido.
  const temaVisual = periodoForcado
    ? (periodoForcado === "manha" ? "claro" : periodoForcado === "tarde" ? "tarde" : "escuro")
    : (hora >= 6 && hora < 17 ? "claro" : hora >= 17 && hora < 19 ? "tarde" : "escuro");

  document.body.dataset.periodo = periodo;
  document.body.dataset.estacao = estacao;
  document.body.dataset.tema = temaVisual;
  document.body.dataset.mes = String(agora.getMonth() + 1).padStart(2, "0");
  document.documentElement.style.colorScheme = temaVisual === "claro" ? "light" : "dark";
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      temaVisual === "claro" ? "#f5a044" : temaVisual === "tarde" ? "#71331f" : "#080808"
    );
  }

  // O GIF representa a estação do mês; a paleta muda mês a mês e também
  // recebe o tratamento de luz correspondente ao horário.
  const gifsEstacao = {
    primavera: "https://media1.tenor.com/m/Nerb6mLfQsMAAAAd/spring.gif",
    verao: "https://media1.tenor.com/m/fK-bWSH_hdUAAAAd/sun-sunset.gif",
    outono: "https://media1.tenor.com/m/iuBOwuUcFukAAAAd/autumn-fall.gif",
    inverno: "https://media1.tenor.com/m/p16IesNuZ5gAAAAd/winter-snow.gif"
  };
  const gifFundo = document.getElementById("gifFundo");
  const gifEscolhido = gifsEstacao[estacao];
  if (gifFundo.dataset.gifAtual !== gifEscolhido) {
    gifFundo.style.backgroundImage = `url("${gifEscolhido}")`;
    gifFundo.dataset.gifAtual = gifEscolhido;
  }

  const tema = temas[periodo];
  document.getElementById("saudacao").textContent = tema.saudacao;
  document.getElementById("contexto").textContent =
    `${agora.toLocaleDateString("pt-BR", { day: "numeric", month: "long" })} · ${nomesEstacoes[estacao]} · ${temaVisual === "claro" ? "Dia" : temaVisual === "tarde" ? "Fim de tarde" : "Noite"}`;
  document.getElementById("notaTema").textContent =
    `${tema.texto} Visual automático para ${temaVisual === "claro" ? "o dia" : temaVisual === "tarde" ? "o fim de tarde" : "a noite"}. Estação: ${nomesEstacoes[estacao]}.`;
}

document.addEventListener("DOMContentLoaded", () => {
  const animalImg = document.getElementById("dragao");
  const mensagem = document.getElementById("mensagem");
  const select = document.getElementById("selectDragao");
  const auto = document.getElementById("autoTroca");
  const botao = document.getElementById("botaoMotivar");
  const efeitosClima = document.getElementById("efeitosClima");
  const selectMusica = document.getElementById("selectMusica");
  const spotifyPlayer = document.getElementById("spotifyPlayer");
  const abrirSpotify = document.getElementById("abrirSpotify");
  const musicaAnterior = document.getElementById("musicaAnterior");
  const proximaMusica = document.getElementById("proximaMusica");
  const musicasSpotify = [
    "5ocaSy7KaqSUyMshAGtDoQ", "2EBATHfPA3vgHpXidlUHwj",
    "45DdNOqLCNfdgOCUJEsypo", "3qwGp87KBOa6S3eDLsm224",
    "3gmn76fCtpDazGMnN0QMHX", "3clPsjTbx4UOPMeQn7FZkV"
  ];
  let indiceMusica = 0;
  let cliquesClima = 0;

  function trocarMusica(indice) {
    indiceMusica = (indice + musicasSpotify.length) % musicasSpotify.length;
    const id = musicasSpotify[indiceMusica];
    selectMusica.value = String(indiceMusica);
    spotifyPlayer.src = `https://open.spotify.com/embed/track/${id}?utm_source=generator`;
    abrirSpotify.href = `https://open.spotify.com/track/${id}`;
  }
  selectMusica.addEventListener("change", () => trocarMusica(Number(selectMusica.value)));
  musicaAnterior.addEventListener("click", () => trocarMusica(indiceMusica - 1));
  proximaMusica.addEventListener("click", () => trocarMusica(indiceMusica + 1));

  // Cada clique real em "Me motiva!" dispara um clima animado, variando com a estação.
  const climasPorEstacao = {
    primavera: ["petalas", "chuva", "sol"],
    verao: ["sol", "chuva", "sol"],
    outono: ["folhas", "chuva", "vento"],
    inverno: ["neve", "chuva", "vento"]
  };
  const simbolosClima = {
    chuva: ["💧", "💧", "💧", "💧"], sol: ["☀️", "✨", "☀️"],
    folhas: ["🍂", "🍁", "🍂", "🍃"], neve: ["❄️", "❄️", "❅", "❄️"],
    petalas: ["🌸", "🌷", "🌸", "🌼"], vento: ["🍃", "﹏", "🍃"]
  };
  function ativarClimaDoClique() {
    const estacao = document.body.dataset.estacao || obterEstacao(new Date());
    const opcoes = climasPorEstacao[estacao] || climasPorEstacao.primavera;
    const clima = opcoes[cliquesClima % opcoes.length];
    cliquesClima++;
    efeitosClima.dataset.clima = clima;
    efeitosClima.replaceChildren();
    const simbolos = simbolosClima[clima];
    const total = clima === "chuva" ? 34 : 18;
    for (let i = 0; i < total; i++) {
      const particula = document.createElement("span");
      particula.className = `particula particula-${clima}`;
      particula.textContent = simbolos[i % simbolos.length];
      particula.style.left = `${Math.random() * 100}%`;
      particula.style.animationDelay = `${Math.random() * 1.2}s`;
      particula.style.animationDuration = `${2.2 + Math.random() * 2.5}s`;
      particula.style.setProperty("--deslocamento", `${Math.round(Math.random() * 160 - 80)}px`);
      efeitosClima.appendChild(particula);
    }
    window.setTimeout(() => efeitosClima.replaceChildren(), 6000);
  }

  let animalEscolhidoManualmente = false;

  // Easter egg: cinco cliques no "o" do logo liberam a troca manual de estação.
  const easterEggO = document.getElementById("easterEggO");
  const painelEstacoes = document.getElementById("painelEstacoes");
  const selectEstacao = document.getElementById("selectEstacao");
  const fecharEstacoes = document.getElementById("fecharEstacoes");
  let cliquesNoO = 0;
  let easterEggLiberado = false;

  easterEggO.setAttribute("role", "button");
  easterEggO.setAttribute("tabindex", "0");
  easterEggO.setAttribute("aria-label", 'Clique cinco vezes para liberar a troca de estação');

  function contarCliqueNoO() {
    if (easterEggLiberado) {
      painelHorarios.hidden = true;
      painelEstacoes.hidden = false;
      return;
    }
    cliquesNoO += 1;
    easterEggO.style.transform = `scale(${1 + cliquesNoO * 0.04})`;
    if (cliquesNoO >= 5) {
      easterEggLiberado = true;
      painelHorarios.hidden = true;
      painelEstacoes.hidden = false;
      selectEstacao.value = document.body.dataset.estacao || "primavera";
      mensagem.textContent = "✨ Easter egg desbloqueado! Agora você pode trocar a estação do ano.";
      painelEstacoes.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  easterEggO.addEventListener("click", contarCliqueNoO);
  easterEggO.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      contarCliqueNoO();
    }
  });

  // Segundo easter egg: cinco cliques no indicador do topo liberam a prévia de horários.
  const contexto = document.getElementById("contexto");
  const painelHorarios = document.getElementById("painelHorarios");
  const selectHorario = document.getElementById("selectHorario");
  const fecharHorarios = document.getElementById("fecharHorarios");
  const horarioAutomatico = document.getElementById("horarioAutomatico");
  let cliquesNoContexto = 0;
  let horarioEggLiberado = false;

  contexto.setAttribute("role", "button");
  contexto.setAttribute("tabindex", "0");
  contexto.setAttribute("title", "Um detalhe escondido...");
  contexto.setAttribute("aria-label", "Clique cinco vezes para testar as cores de outros horários");

  function contarCliqueNoContexto() {
    if (horarioEggLiberado) {
      painelEstacoes.hidden = true;
      painelHorarios.hidden = false;
      return;
    }
    cliquesNoContexto += 1;
    contexto.style.transform = `scale(${1 + cliquesNoContexto * 0.025})`;
    if (cliquesNoContexto >= 5) {
      horarioEggLiberado = true;
      painelEstacoes.hidden = true;
      painelHorarios.hidden = false;
      selectHorario.value = periodoForcado || obterPeriodo(new Date().getHours());
      mensagem.textContent = "🕰️ Easter egg desbloqueado! Experimente as cores de cada horário.";
      painelHorarios.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  contexto.addEventListener("click", contarCliqueNoContexto);
  contexto.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      contarCliqueNoContexto();
    }
  });

  selectHorario.addEventListener("change", () => {
    periodoForcado = selectHorario.value;
    atualizarTema();
    atualizarAnimal(true);
    mensagem.textContent = `Prévia ativada: ${selectHorario.options[selectHorario.selectedIndex].textContent}.`;
  });

  horarioAutomatico.addEventListener("click", () => {
    periodoForcado = null;
    selectHorario.value = obterPeriodo(new Date().getHours());
    atualizarTema();
    atualizarAnimal(true);
    mensagem.textContent = "Relógio automático restaurado. O site voltou a acompanhar seu horário.";
  });

  fecharHorarios.addEventListener("click", () => {
    painelHorarios.hidden = true;
  });

  selectEstacao.addEventListener("change", () => {
    estacaoForcada = selectEstacao.value;
    atualizarTema();
    atualizarAnimal(true);
  });

  fecharEstacoes.addEventListener("click", () => {
    painelEstacoes.hidden = true;
  });

  animalImg.addEventListener("error", () => {
    if (animalImg.src !== gifsAnimais.gato) {
      animalImg.src = gifsAnimais.lobo;
      animalImg.alt = "Lobo Minecraft";
    }
  });
  let chaveTemaAnterior = "";

  function atualizarAnimal(force = false) {
    const periodo = document.body.dataset.periodo || obterPeriodo(new Date().getHours());
    const estacao = document.body.dataset.estacao || obterEstacao(new Date());
    const chaveTema = `${estacao}-${periodo}`;

    if (!force && chaveTema === chaveTemaAnterior) return;
    chaveTemaAnterior = chaveTema;

    const animal = obterAnimalAtual();
    if (!animalEscolhidoManualmente || force) {
      animalImg.src = animal.gif;
      animalImg.alt = animal.nome;
      select.value = animal.gif;
    }

    // Lista todos os animais do tema para permitir escolher outro manualmente.
    select.replaceChildren();
    Object.entries(animaisPorTema[estacao] || {}).forEach(([periodoAnimal, dados]) => {
      const option = document.createElement("option");
      option.value = dados.gif;
      option.textContent = `${dados.nome} (${periodoAnimal})`;
      select.appendChild(option);
    });

    const animalAtual = obterAnimalAtual();
    const optionAtual = [...select.options].find(option => option.value === animalAtual.gif);
    if (optionAtual && !animalEscolhidoManualmente) select.value = animalAtual.gif;
  }

  if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("pointermove", (evento) => {
      animalImg.style.left = `${evento.clientX}px`;
      animalImg.style.top = `${evento.clientY}px`;
    });
  } else {
    animalImg.classList.add("dragao-mobile");
  }

  botao.addEventListener("click", () => {
    mensagem.textContent = gerarFrase();
    ativarClimaDoClique();

    if (auto.checked) {
      animalEscolhidoManualmente = false;
      const estacao = document.body.dataset.estacao || obterEstacao(new Date());
      const lista = Object.values(animaisPorTema[estacao] || {});
      if (lista.length > 0) {
        // Cicla para o próximo animal da estação atual
        const valorAtual = select.value || animalImg.getAttribute("src") || "";
        let indice = lista.findIndex(a => a.gif === valorAtual);
        if (indice < 0) indice = 0;
        const proximo = lista[(indice + 1) % lista.length];
        animalImg.src = proximo.gif;
        animalImg.alt = proximo.nome;

        select.replaceChildren();
        Object.entries(animaisPorTema[estacao] || {}).forEach(([periodoAnimal, dados]) => {
          const option = document.createElement("option");
          option.value = dados.gif;
          option.textContent = `${dados.nome} (${periodoAnimal})`;
          select.appendChild(option);
        });
        select.value = proximo.gif;
      } else {
        atualizarAnimal(true);
      }
    }
  });

  select.addEventListener("change", () => {
    animalEscolhidoManualmente = true;
    animalImg.src = select.value;
    const selectedOption = select.options[select.selectedIndex];
    animalImg.alt = selectedOption ? selectedOption.textContent : "Animal animado";
  });

  // Chama a atualização de tema original e depois atualiza o animal correspondente.
  const atualizarTemaOriginal = atualizarTema;
  atualizarTema = function() {
    atualizarTemaOriginal();
    atualizarAnimal();
  };

  atualizarTema();
  window.setInterval(atualizarTema, 60 * 1000);
});
