const questions = [
  {
    question: "Когда Казахстан стал независимым государством?",
    options: ["1990 год", "1991 год", "1992 год"],
    answer: "1991 год"
  },
  {
    question: "Какой город был первой столицей независимого Казахстана?",
    options: ["Алматы", "Астана", "Шымкент"],
    answer: "Алматы"
  },
  {
    question: "Кто был первым президентом Республики Казахстан?",
    options: ["Нурсултан Назарбаев", "Касым-Жомарт Токаев", "Динмухамед Кунаев"],
    answer: "Нурсултан Назарбаев"
  },
  {
    question: "В каком году была принята Конституция Республики Казахстан?",
    options: ["1991 год", "1993 год", "1995 год"],
    answer: "1995 год"
  },
  {
    question: "Как назывался Казахстан в составе Советского Союза?",
    options: ["Казахская Социалистическая Республика", "Казахская Автономная Республика", "Казахская Советская Социалистическая Республика"],
    answer: "Казахская Советская Социалистическая Республика"
  }
];

const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score");
const submitButton = document.getElementById("submit");
let isSubmitted = false;

function loadQuiz() {
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <p>${q.question}</p>
      ${q.options.map(option => `
        <label>
          <input type="radio" name="question${index}" value="${option}">
          ${option}
        </label>
      `).join("")}
    `;
    questionContainer.appendChild(questionDiv);
  });
}

function checkAnswers() {
  if (isSubmitted) {
    alert("Так нельзя, друг мой! Это мухлеж.");
    return;
  }

  let score = 0;
  questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    const correctAnswer = q.answer;
    const options = document.getElementsByName(`question${index}`);

    options.forEach(option => {
      const label = option.parentElement;
      if (option.value === correctAnswer) {
        label.style.backgroundColor = "#d4edda"; // Зеленый фон для правильного ответа
      }
      if (selectedAnswer && option === selectedAnswer && option.value !== correctAnswer) {
        label.style.backgroundColor = "#f8d7da"; // Красный фон для неправильного ответа
      }
    });

    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
      score++;
    }
  });
  scoreContainer.innerText = `Вы ответили правильно на ${score} из ${questions.length} вопросов!`;
  isSubmitted = true;
}

loadQuiz();
submitButton.addEventListener("click", checkAnswers);
