// Değişkenler
let countdown;
let remainingTime = 0;
const timerDisplay = document.getElementById('timerDisplay');
const alarmSound = new Audio('sounds/alarm.mp3');

// Zamanlayıcıyı Başlatma
function startTimer(minutes) {
    clearInterval(countdown);
    remainingTime = minutes * 60;

    updateDisplay();

    countdown = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(countdown);
            alarmSound.play();
            alert('🔔 Yumurtanız pişti! Afiyet olsun! 🍳');
        } else {
            remainingTime--;
            updateDisplay();
        }
    }, 1000);
}

// Sayaç Ekranını Güncelle
function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Zamanlayıcıyı Sıfırla
function resetTimer() {
    clearInterval(countdown);
    remainingTime = 0;
    updateDisplay();
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

