// Anxiety Test Logic
const anxietyQuiz = document.querySelector("#anxietyQuiz");
const resultText = document.createElement("div");
resultText.id = "result";
anxietyQuiz.appendChild(resultText);

// Handle form submission and always redirect to video
document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  // Redirect to the desired YouTube video (it will work regardless of answers)
  window.location.href = 'https://www.youtube.com/watch?v=lIor2GRveXI&t=96s';
});

// (Optional) If you want to calculate the anxiety score and display the result:
function calculateAnxietyScore(event) {
  event.preventDefault(); // Prevent form submission (page reload)

  const answers = document.querySelectorAll("input[type=radio]:checked");
  let score = 0;
  answers.forEach(answer => {
    score += parseInt(answer.value);
  });

  let resultMessage = "";
  let recommendation = "";
  let videoUrl = "";

  // Determine message and video based on score
  if (score >= 15) {
    resultMessage = "Your answers suggest high levels of anxiety.";
    recommendation = `
      <ul>
        <li>Practice deep breathing exercises to calm your mind.</li>
        <li>Try grounding techniques like the 5-4-3-2-1 method.</li>
        <li>Consider talking to a mental health professional.</li>
      </ul>
    `;
    videoUrl = "https://www.youtube.com/watch?v=lIor2GRveXI&t=96s"; // Video for high anxiety
  } else if (score >= 10) {
    resultMessage = "Your anxiety levels are moderate.";
    recommendation = `
      <ul>
        <li>Use mindfulness techniques to manage stress.</li>
        <li>Engage in physical activities like walking or yoga.</li>
        <li>Journaling can help process anxious thoughts.</li>
      </ul>
    `;
    videoUrl = "https://www.youtube.com/watch?v=s9zZr2KRvzs"; // Video for moderate anxiety
  } else {
    resultMessage = "Your anxiety levels are low, but self-care is still important.";
    recommendation = `
      <ul>
        <li>Maintain healthy sleep and eating habits.</li>
        <li>Stay active and engage in relaxing activities.</li>
        <li>Remember, occasional stress is normal, but coping techniques help.</li>
      </ul>
    `;
    videoUrl = "https://www.youtube.com/watch?v=_m1LjcNg-QI"; // Video for low anxiety
  }

  // Display results and recommendations
  resultText.innerHTML = `<h3>${resultMessage}</h3><p>${recommendation}</p>`;

  // Delay the redirection to give the user time to read the result
  setTimeout(() => {
    window.location.href = videoUrl; // Redirect to the appropriate video
  }, 3000); // Redirects after 3 seconds
}

// Attach to form submission
anxietyQuiz.addEventListener("submit", (e) => calculateAnxietyScore(e));
