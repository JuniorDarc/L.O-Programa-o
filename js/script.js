const questions = [
  {
    question: "Qual desse componenetes não é de colisão",
    answers: ["A) box Collider", "B) TileMap Collider", "C) Transform", "D) RigidBody"],
    correct: 2
  },
  {
    question: "Em um script Unity Qual dos Métedos abaixo é chamado apenas uma vez quando o script é iniciado?",
    answers: ["A) void Update()", "B) public void Chamada()", "C) private Bool isTrue()", "D) void Start()"],
    correct: 3
  },
  {
    question: "Os Objetos na cena tipo: (Camera, Player, Backgorund, Square) ficam em qual Aba ?",
    answers: ["A) Hierarchy", "B) Animator", "C) Inspector", "D) Scene"],
    correct: 0
  },
  {
    question: "Para fazer a movimentação do player, eu tenho que fazer em um método que é chamado a cada frame do jogo, qual é esse método?",
    answers: ["A) void Start()", "B) void Update()", "C) void OnTriggerEnter2D()", "D) void Chamar_a_cada_Frame_1000Grau()"],
    correct: 1
  },
  {
    question: "Qual o unico componente que sempre vem em todo Objeto independente de qual for ?",
    answers: ["A) Sprite Renderer", "B) Transform", "C) Animator", "D) Mesh Filter"],
    correct: 1
  },
  {
    question: "Como eu Consigo Puxar um Componente de Física Rigidbody2D pelo script ? (o script e o componente de Fisica estão no mesmo objeto)",
    answers: ["A) private Rigidbody2D rb ", "B) private Rigidbody rb", "C) private Rigidbody3D rb", "D) private RigidbodyRenderer renderer"],
    correct: 0
  },
  {
    question: "Como eu consigo acessar o Componente de Física Rigidbody2D pelo script? (o script e o componente de Fisica estão no mesmo objeto) ",
    answers: ["A) rb = SetComponent<Rigidbody2D>();", "B) rb = GetComponent<Rigidbody>();", "C) rb = GetComponent<Rigidbody2D>();", "D) rb = SetComponent<Rigidbody>();"],
    correct: 2
  },
  {
    question: "Qual comando eu uso quando eu quero acessar um Componente do objeto via script?",
    answers: ["A) Set", "B) Debug.Log()", "C) Quaternion()", "D) Get"],
    correct: 3
  },
  {
    question: "Qual comando eu uso para me retornar uma menssagem no Console por exemplo: (se o player esta colidindo com uma parede)",
    answers: ["A) Debug.Log(O player esta colidindo)", "B) Debug(O player esta colidindo)", "C) void Start(O player esta colidindo)", "D) void Collision(O player esta colidindo)"],
    correct: 0
  },
  {
    question: "Quando você está programando um jogo o certo é você pensar:",
    answers: ["A) Não posso errar se não vou ter que fazer tudo de novo", "B) Usar o Gpt e ficar usando ele de moleta", "C) Tenho que fazer um passo a passo igual uma receita de bolo", "D) só fazer tudo de qualquer jeito, funcionando é o que vale"],
    correct: 2
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => selectAnswer(index);
    li.appendChild(btn);
    answersEl.appendChild(li);
  });
}

function selectAnswer(index) {
  const isCorrect = index === questions[currentQuestion].correct;
  if (isCorrect) score++;
  nextBtn.disabled = false;
  document.querySelectorAll(".answer-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === questions[currentQuestion].correct) {
      btn.style.background = "#90ee90"; // verde claro
    } else if (i === index) {
      btn.style.background = "#f08080"; // vermelho claro
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("question-container").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

showQuestion();
nextBtn.disabled = true;
