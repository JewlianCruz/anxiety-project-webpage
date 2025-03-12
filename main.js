document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startBreathingButton');
  const stopButton = document.getElementById('stopBreathingButton');
  const countdownText = document.getElementById('breathing-countdown');
  const breathingOverlay = document.getElementById('breathing-overlay');
  const breathingInstruction = document.getElementById('breathing-instruction');
  
  let countdownTimer;
  let breathingIn = true; // Track whether it's inhale or exhale
  let timeLeft = 4; // Seconds for inhale/exhale

  // Countdown function
  function startCountdown() {
    countdownText.textContent = timeLeft + "s";
    countdownTimer = setInterval(function() {
      timeLeft--;
      countdownText.textContent = timeLeft + "s";
      if (timeLeft === 0) {
        clearInterval(countdownTimer);
        startBreathing();
      }
    }, 1000);
  }

  // Start breathing exercise
  function startBreathing() {
    startButton.style.display = 'none'; // Hide start button
    stopButton.style.display = 'inline-block'; // Show stop button
    breathingOverlay.classList.add('active'); // Show the overlay
    breathingInstruction.textContent = "Breathe In...";

    setTimeout(function() {
      breathingInstruction.textContent = "Breathe Out...";
      timeLeft = 4; // Reset countdown for exhale
      startCountdown();
    }, 4000); // After inhale, switch to exhale after 4 seconds
  }

  // Stop breathing exercise
  function stopBreathing() {
    clearInterval(countdownTimer);
    breathingOverlay.classList.remove('active'); // Hide the overlay
    countdownText.textContent = "Get ready..."; // Reset the countdown text
    startButton.style.display = 'inline-block'; // Show start button
    stopButton.style.display = 'none'; // Hide stop button
  }

  // Event listeners for start and stop buttons
  startButton.addEventListener('click', function() {
    startCountdown();
  });

  stopButton.addEventListener('click', function() {
    stopBreathing();
  });
});
