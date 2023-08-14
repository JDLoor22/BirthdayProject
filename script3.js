// Import the anime.js library (make sure to include it in your HTML)
// <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

function calculateTimeUntilBirthday() {
  // Calculate time until the next birthday (replace this logic with your own)
  const now = new Date();
  const nextBirthday = new Date(now.getFullYear(), 7, 22);
  if (nextBirthday < now) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const timeDiff = nextBirthday - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (timeDiff <= 0) {
    // Show the birthday message and confetti animation
    const message = document.createElement('div');
    message.className = 'birthday-message';
    message.textContent = '¡Feliz Cumpleaños!';
    document.body.appendChild(message);

    anime({
      targets: message,
      translateY: -50,
      opacity: 0,
      easing: 'easeInOutExpo',
      duration: 2000,
      complete: () => {
        document.body.removeChild(message);
      }
    });

    // You can use libraries like Confetti.js for the confetti animation
    // Example: https://github.com/mathusummut/confetti.js
  }
}

calculateTimeUntilBirthday();
setInterval(calculateTimeUntilBirthday, 1000);

