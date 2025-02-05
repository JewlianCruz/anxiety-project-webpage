// Anxiety Test Logic
const anxietyQuiz = document.querySelector("#anxietyQuiz");
const resultText = document.createElement("div");
resultText.id = "result";
anxietyQuiz.appendChild(resultText);

function calculateAnxietyScore() {
  const answers = document.querySelectorAll("input[type=radio]:checked");
  let score = 0;
  answers.forEach(answer => {
    score += parseInt(answer.value);
  });

  let resultMessage = "";
  let recommendation = "";

  if (score >= 15) {
    resultMessage = "Your answers suggest high levels of anxiety.";
    recommendation = `
      <ul>
        <li>Practice deep breathing exercises to calm your mind.</li>
        <li>Try grounding techniques like the 5-4-3-2-1 method.</li>
        <li>Consider talking to a mental health professional.</li>
      </ul>
    `;
  } else if (score >= 10) {
    resultMessage = "Your anxiety levels are moderate.";
    recommendation = `
      <ul>
        <li>Use mindfulness techniques to manage stress.</li>
        <li>Engage in physical activities like walking or yoga.</li>
        <li>Journaling can help process anxious thoughts.</li>
      </ul>
    `;
  } else {
    resultMessage = "Your anxiety levels are low, but self-care is still important.";
    recommendation = `
      <ul>
        <li>Maintain healthy sleep and eating habits.</li>
        <li>Stay active and engage in relaxing activities.</li>
        <li>Remember, occasional stress is normal, but coping techniques help.</li>
      </ul>
    `;
  }

  resultText.innerHTML = `<h3>${resultMessage}</h3><p>${recommendation}</p>`;
}

// Attach to form submission
anxietyQuiz.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateAnxietyScore();
});
