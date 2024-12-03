// Завдання 1: Об'єкт часу
const time = { hours: 20, minutes: 30, seconds: 45 };

function updateDisplay() {
    const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
    document.getElementById("currentTime").textContent = "Поточний час: " + formattedTime;
}

function addSeconds() {
    const seconds = parseInt(document.getElementById("secondsInput").value) || 0;
    time.seconds += seconds;
    if (time.seconds >= 60) {
        time.minutes += Math.floor(time.seconds / 60);
        time.seconds %= 60;
    }
    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes %= 60;
    }
    if (time.hours >= 24) {
        time.hours %= 24;
    }
    updateDisplay();
}

function addMinutes() {
    const minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    time.minutes += minutes;
    if (time.minutes >= 60) {
        time.hours += Math.floor(time.minutes / 60);
        time.minutes %= 60;
    }
    if (time.hours >= 24) {
        time.hours %= 24;
    }
    updateDisplay();
}

function addHours() {
    const hours = parseInt(document.getElementById("hoursInput").value) || 0;
    time.hours += hours;
    if (time.hours >= 24) {
        time.hours %= 24;
    }
    updateDisplay();
}

updateDisplay();

// Завдання 2.1: Виведення поточної дати, дня тижня і часу
function displayCurrentDate() {
    const now = new Date();
    const daysOfWeek = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"];
    const months = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
    const formattedDate = `Дата: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} року`;
    const formattedDay = `День тижня: ${daysOfWeek[now.getDay()]}`;
    const formattedTime = `Час: ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    document.getElementById("dateOutput").innerHTML = `${formattedDate}<br>${formattedDay}<br>${formattedTime}`;
}

// Завдання 2.2: Інформація про день тижня
function displayDayInfo() {
    const now = new Date();
    const dayInfo = getDayInfo(now);
    document.getElementById("dayInfoOutput").innerHTML = `Номер тижня: ${dayInfo.dayNumber}<br>Назва дня тижня: ${dayInfo.dayName}`;
}

function getDayInfo(date) {
    const daysOfWeek = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"];
    const dayNumber = date.getDay() === 0 ? 7 : date.getDay();
    const dayName = daysOfWeek[date.getDay()];
    return { dayNumber, dayName };
}