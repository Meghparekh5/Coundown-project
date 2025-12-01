// Countdown variables
const targetDate = new Date('January 1, 2026 00:00:00').getTime();
const countdownEl = document.getElementById('countdown');

let countdownInterval = null;
let isRunning = false;

function formatTime(unit) {
    return unit.toString().padStart(2, '0');
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownEl.textContent = "Happy New Year 2026! 🎉";
        clearInterval(countdownInterval);
        isRunning = false;
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `${formatTime(days)} Days ${formatTime(hours)} Hours ${formatTime(seconds)} Seconds`;
}

function startCountdown() {
    if (!isRunning) {
        countdownInterval = setInterval(updateCountdown, 1000);
        isRunning = true;
    }
}

function stopCountdown() {
    if (isRunning) {
        clearInterval(countdownInterval);
        isRunning = false;
    }
}

function restartCountdown() {
    clearInterval(countdownInterval);
    isRunning = false;
    updateCountdown();
}

// Quotes Slider
const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You miss 100% of the shots you don't take.",
    "Keep going, everything you need will come to you at the perfect time."
];

const quoteEl = document.getElementById('quote');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentQuoteIndex = 0;
let quoteInterval;

function showQuote(index) {
    quoteEl.textContent = quotes[index];
}

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    showQuote(currentQuoteIndex);
}

function prevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentQuoteIndex);
}

nextBtn.addEventListener('click', nextQuote);
prevBtn.addEventListener('click', prevQuote);

quoteInterval = setInterval(nextQuote, 4000);
showQuote(currentQuoteIndex);
