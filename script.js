// Obtener elementos del DOM
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const shareButton = document.getElementById("shareButton");

// Lógica para calcular el tiempo restante
function calculateTimeLeft(targetDate) {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
}

// Actualizar el contador regresivo en el DOM
function updateCountdown(targetDate) {
    const timeLeft = calculateTimeLeft(targetDate);
    
    daysElement.textContent = timeLeft.days;
    hoursElement.textContent = timeLeft.hours;
    minutesElement.textContent = timeLeft.minutes;
    secondsElement.textContent = timeLeft.seconds;
}

let countdownInterval;
const currentUrl = window.location.href; // Obtiene la URL actual de la página.

// Acción del botón de compartir
shareButton.addEventListener("click", () => {
    // Aquí puedes agregar la lógica para compartir en redes sociales
    // Por ejemplo, abrir una ventana emergente con un enlace a la página
    // o implementar la integración con APIs de redes sociales.
    const shareText = "¡Mira mi tarjeta de cumpleaños!"; // Puedes cambiar este mensaje.

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&t=${shareText}`;
    const instagramUrl = `https://www.instagram.com/share?text=${shareText}&url=${currentUrl}`; // Nota: Instagram no soporta directamente compartir URLs a través de la web.
    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText} ${currentUrl}`;

    // Abre las URLs en ventanas emergentes:
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    window.open(instagramUrl, '_blank', 'width=600,height=400');
    window.open(whatsappUrl, '_blank', 'width=600,height=400');
    
});


// Get the date of the next birthday from the user
const birthdayForm = document.getElementById("birthdayForm");
const birthdayDateInput = document.getElementById("birthdayDate");

birthdayForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputDate = new Date(birthdayDateInput.value);
    updateCountdown(inputDate);

    // Stop the current interval, if any.
    clearInterval(countdownInterval);

    // Set the counter to update every second.
    countdownInterval = setInterval(() => {
        updateCountdown(inputDate);
    }, 1000);
});
