/* ЗАВДАННЯ 1 */

document.getElementById("length").addEventListener("input", calculateArea);
document.getElementById("width").addEventListener("input", calculateArea);

function calculateArea() {
    const length = parseFloat(document.getElementById("length").value) || 0;
    const width = parseFloat(document.getElementById("width").value) || 0;
    const area = length * width;
    document.getElementById("area").value = area;
}


/* ЗАВДАННЯ 2 ТА 3 */

let ukraineLayout = ['а','б','в','г','д','е','є','и','і','ї'];
let englishLayout = ['a','b','c','d','e','f','g','h','i','j'];
let currentLayout = ukraineLayout;

function loadKeyboard() {
    const keyboardDiv = document.getElementById("keyboard");
    keyboardDiv.innerHTML = "";
    ['0','1','2','3','4','5','6','7','8','9'].forEach(char => addButton(char));
    currentLayout.forEach(char => addButton(char));
}

function addButton(char) {
    const button = document.createElement("button");
    button.textContent = char;
    button.onclick = () => document.getElementById("display").value += char;
    document.getElementById("keyboard").appendChild(button);
}

function toggleLayout() {
    currentLayout = currentLayout === ukraineLayout ? englishLayout : ukraineLayout;
    loadKeyboard();
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

loadKeyboard();


/* ЗАВДАННЯ 4 */

let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let currentImageIndex = 0;

function updateImage() {
    document.getElementById("image").src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

updateImage();


/* ЗАВДАННЯ 5 */
let score = 0, totalQuestions = 5, currentQuestion = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    document.getElementById("question").textContent = `${num1} ${operator} ${num2} = `;
    return eval(`${num1} ${operator} ${num2}`);
}

let correctAnswer = generateQuestion();

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        score++;
        feedback.textContent = "Правильно";
    } else {
        feedback.textContent = `Помилка, правильна відповідь ${correctAnswer}`;
    }
    document.getElementById("score").textContent = `Загальний рахунок: ${(score / (currentQuestion + 1)) * 100}% (${score} правильних відповідей з ${totalQuestions})`;
}

function nextQuestion() {
    if (++currentQuestion < totalQuestions) {
        correctAnswer = generateQuestion();
        document.getElementById("answer").value = '';
        document.getElementById("feedback").textContent = '';
    }
}


/* ЗАВДАННЯ 6 */

function toggleList(id) {
    const list = document.getElementById(id);
    list.style.display = list.style.display === "none" ? "block" : "none";
}
