document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "Qual dessas situações te deixa mais animado?",
      answers: [
        { text: "Subir montanhas ou trilhas", class: "sobrevivente" },
        { text: "Resolver um quebra-cabeça", class: "mago" },
        { text: "Testar sua velocidade", class: "rogue" },
        { text: "Superar um desafio físico", class: "tank" },
      ],
    },
    {
      question: "Você está em um grupo de aventura. Qual é o seu papel ideal?",
      answers: [
        { text: "O estrategista que orienta o grupo", class: "mago" },
        { text: "O ágil que abre caminho", class: "rogue" },
        { text: "O que protege todos", class: "tank" },
        { text: "O que vai na frente explorando", class: "sobrevivente" },
      ],
    },
    {
      question: "Seu ambiente de treino ideal é:",
      answers: [
        { text: "Ar livre e com obstáculos", class: "sobrevivente" },
        { text: "Silencioso e focado", class: "mago" },
        { text: "Com equipamentos de impacto", class: "tank" },
        { text: "Com desafios rápidos e dinâmicos", class: "rogue" },
      ],
    },
    {
      question: "Como você reage a um desafio difícil?",
      answers: [
        { text: "Com análise e estratégia", class: "mago" },
        { text: "Com força e determinação", class: "tank" },
        { text: "Com velocidade e adaptação", class: "rogue" },
        { text: "Com fôlego e persistência", class: "sobrevivente" },
      ],
    },
    {
      question: "Seu maior trunfo é:",
      answers: [
        { text: "Sua resistência", class: "sobrevivente" },
        { text: "Sua inteligência corporal", class: "mago" },
        { text: "Sua força física", class: "tank" },
        { text: "Sua agilidade", class: "rogue" },
      ],
    },
    {
      question: "O que mais te motiva em uma rotina?",
      answers: [
        { text: "Sentir progresso físico", class: "tank" },
        { text: "Manter o ritmo sem parar", class: "sobrevivente" },
        { text: "A busca pelo equilíbrio", class: "mago" },
        { text: "A emoção da velocidade", class: "rogue" },
      ],
    },
    {
      question: "Você prefere:",
      answers: [
        { text: "Treinos intensos e longos", class: "sobrevivente" },
        { text: "Posturas e movimentos conscientes", class: "mago" },
        { text: "Explosão de força", class: "tank" },
        { text: "Circuitos curtos e ágeis", class: "rogue" },
      ],
    },
    {
      question: "Qual dessas frases mais combina com você?",
      answers: [
        { text: "Não paro até alcançar meu objetivo", class: "sobrevivente" },
        { text: "Conhecimento é poder", class: "mago" },
        { text: "Mais peso, mais foco", class: "tank" },
        { text: "Rápido e preciso", class: "rogue" },
      ],
    },
    {
      question: "Você encara obstáculos como:",
      answers: [
        { text: "Algo a ser calculado", class: "mago" },
        { text: "Algo a ser superado com força", class: "tank" },
        { text: "Algo a ser contornado com agilidade", class: "rogue" },
        { text: "Algo a ser vencido com fôlego", class: "sobrevivente" },
      ],
    },
    {
      question: "Você se sente mais realizado quando:",
      answers: [
        { text: "Completa uma maratona", class: "sobrevivente" },
        { text: "Sente-se mentalmente equilibrado", class: "mago" },
        { text: "Supera um limite de peso", class: "tank" },
        { text: "Finaliza um treino em tempo recorde", class: "rogue" },
      ],
    },
  ];

  let currentQuestion = 0;
  let score = {
    tank: 0,
    rogue: 0,
    mago: 0,
    sobrevivente: 0,
  };

  const container = document.getElementById("quiz-container");

  // tela inicial com botão de começar
  function showStartScreen() {
    container.innerHTML = `
      <div class="text-center bg-dark-purple text-white">
        <h2 class="mb-4">Ainda não sabe <br> a que classe pertence?</h2>
        <p class="mb-4 text-green">Responda 10 perguntas <br> e descubra qual tipo de treino combina com sua essência!</p>
        <button class="btn btn-lg btn-success" id="startQuiz">Start</button>
      </div>
    `;

    document
      .getElementById("startQuiz")
      .addEventListener("click", renderQuestion);
  }

  function renderQuestion() {
    const q = quizData[currentQuestion];
    container.innerHTML = `
      <div class="bg-dark-purple text-white shadow p-4">
        <h3 class="mb-4">${q.question}</h3>
        <div class="list-group">
          ${q.answers
            .map(
              (a, i) => `
            <button class="list-group-item list-group-item-action mb-2" data-class="${a.class}">
              ${a.text}
            </button>`
            )
            .join("")}
        </div>
      </div>
    `;

    document.querySelectorAll("button[data-class]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosenClass = btn.getAttribute("data-class");
        score[chosenClass]++;
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          renderQuestion();
        } else {
          showResult();
        }
      });
    });
  }

  function showResult() {
    const winner = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
    const resultText = {
      tank: {
        title: "TANK",
        subtitle: "a Muralha imparável",
        emoji: "🛡️",
        body: "Você é o tipo de jogador que encara tudo de frente. Treino leve? Isso nem te aquece. Você precisa sentir o chão tremer e o peso desafiar seus limites. Na Game-Up, sua arena é o espaço de força bruta: barras, anilhas e gritos internos. Sua jornada é sobre superação, disciplina e músculo. Quando o mundo recua… você avança.",
        build:
          "Área de Exercícios Pesados + Desafio de Carga Extrema + Respira e repete",
      },
      rogue: {
        title: "ROGUE",
        subtitle: "a lâmina silenciosa",
        emoji: "🗡️ ",
        body: "Agilidade, precisão e astúcia. Você não treina — você executa missões. Treinos rápidos, circuitos intensos e aquela adrenalina de saber que cada segundo conta. Você se move sem esforço, sempre dois passos à frente. O suor é invisível, mas o impacto? Mortal.",
        build:
          "Circuito Ninja + Funcional Stealth + 30 segundos de fuga e glória",
      },
      mago: {
        title: "MAGO",
        subtitle: "o sábio do equilíbrio",
        emoji: "🧙‍♂️",
        body: "Seu treino vai além do físico. Cada movimento tem propósito, cada pausa é cálculo. Você domina corpo e mente como quem conjura feitiços — seja no yoga, no alongamento ou nas práticas de controle corporal. O mundo corre, você contempla. E, ainda assim, evolui mais rápido que todos.",
        build: "Yoga Arcana + Respiração Tática + Meditação de Buff diário",
      },
      sobrevivente: {
        title: "SOBREVIVENTE",
        subtitle: "a lenda incansável",
        emoji: "🏃‍♀️",
        body: "Você é energia pura, sem botão de pausa. O treino ideal pra você é aquele que parece missão de resistência — e você sempre vai até o fim. Correr, pular, escalar… o que for. Seu fôlego é lendário, sua determinação, contagiante. Enquanto outros descansam, você está na próxima volta.",
        build:
          "Corrida Infinita + Desafio Cardio + Água e respira, que lá vem mais",
      },
    };

    const res = resultText[winner];

    container.innerHTML = `
      <div class="card shadow p-4 text-center bg-dark-purple text-white">
        <h2>Você é um <span class="text-green">${res.title}</span>, ${res.subtitle}</h2>
        <p class="display-1">${res.emoji}</p>
        <p class="mt-3">${res.body}</p>
        <small class="text-blue">Build recomendada: ${res.build}</small>
        <p class="mt-3">Use o cupom <span class="text-green">${res.title}20%OFF</span> para começar a sua jornada!</p>
        <div class="text-center">
          <button class="btn btn-primary mt-4" onclick="location.reload()">Responder novamente</button>
        </div>      
      </div>
    `;
  }

  // inicializa com a tela de início
  showStartScreen();
});
