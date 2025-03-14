// Breathing exercise logic
const startButton = document.getElementById('startButton');
const breathingCircle = document.getElementById('breathing-circle');
const breathingInstruction = document.getElementById('breathing-instruction');

// Event listener for start button
startButton.addEventListener('click', () => {
    // Activate breathing animation and change text
    breathingCircle.classList.add('start');
    startButton.disabled = true;
    startButton.textContent = 'Breathing Exercise In Progress...';
    breathingInstruction.textContent = "Breathe in... and out. Focus on the circle's movements.";

    // Stop animation after 20 seconds and reset everything
    setTimeout(() => {
        breathingCircle.classList.remove('start'); // Stop breathing animation
        startButton.disabled = false; // Enable button again
        startButton.textContent = 'Start Breathing Exercise'; // Reset button text
        breathingInstruction.textContent = "Breathing exercise complete. Feel relaxed!"; // Update instruction
    }, 20000); // 20 seconds duration for the breathing exercise
});
