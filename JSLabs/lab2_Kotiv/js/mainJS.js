let dateStr;
function clock() {
    now= new Date();
    hours= now.getHours();
    minutes= now.getMinutes();
    seconds= now.getSeconds();
    date= now.getDate();
    month= now.getMonth()+1;
    year= now.getYear();
    dateStr= "" + year + "#" + month + "#" + date + "-" + hours + "#" + minutes + "#" + seconds;
    document.clock.date.value = dateStr;
    Timer= setTimeout("clock()",1000);
}


let currentValue = ""; // Store the current value in the display
let previousValue = ""; // Store the previous value for calculation
let operator = ""; // Store the operator for the calculation
let resultDisplayed = false; // To check if the result was just displayed

// Function to add values or operations to the input field
function addValueToCalculate(value) {
    const display = document.querySelector(".display");

    // If result was just displayed, clear the display for the next operation
    if (resultDisplayed) {
        display.value = "";
        currentValue = "";
        resultDisplayed = false;
    }

    // Handle operator input
    if (["+", "-", "*", "/"].includes(value)) {
        operator = value;
        previousValue = currentValue;
        currentValue = ""; // Prepare to capture the next number
    }
    // Handle other inputs (numbers, decimal point, etc.)
    else if (value === "plusMinus") {
        // Toggle between positive and negative numbers
        currentValue = String(-parseFloat(currentValue));
        display.value = currentValue;
    }
    else if (value === "deleteAll") {
        // Clear everything
        currentValue = "";
        previousValue = "";
        operator = "";
        display.value = "";
    }
    else if (value === "deleteCurrent") {
        // Clear only the current input (CE functionality)
        currentValue = "";
        display.value = "";
    }
    else if (value === "deleteOneSymb") {
        // Delete the last character (backspace functionality)
        currentValue = currentValue.slice(0, -1);
        display.value = currentValue;
    }
    else {
        // For regular numbers and decimal points
        currentValue += value;
        display.value = currentValue;
    }
}

// Function to calculate the result
function calculateResult() {
    const display = document.querySelector(".display");

    if (previousValue !== "" && currentValue !== "") {
        let calculationResult = 0;

        // Convert values to numbers for calculation
        const num1 = parseFloat(previousValue);
        const num2 = parseFloat(currentValue);

        // Perform the calculation based on the operator
        switch (operator) {
            case "+":
                calculationResult = num1 + num2;
                break;
            case "-":
                calculationResult = num1 - num2;
                break;
            case "*":
                calculationResult = num1 * num2;
                break;
            case "/":
                calculationResult = num1 / num2;
                break;
        }

        // Display the result and reset values
        display.value = calculationResult;
        previousValue = "";
        currentValue = calculationResult;
        operator = "";
        resultDisplayed = true; // Flag that result has been displayed
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let str, stb;

    // Функція для побудови таблиці
    function generateTable() {
        // Отримання кількості рядків і стовпців
        str = parseInt(document.getElementById("t_str").value);
        stb = parseInt(document.getElementById("t_stb").value);

        // Перевірка наявності контейнера для таблиці
        let tableDiv = document.getElementById("table_div");
        if (!tableDiv) {
            console.error("Елемент table_div не знайдено!");
            return;
        }

        // Генерація таблиці
        let res_str = "<table border='1' cellpadding='5'>\n";
        for (let i = 1; i <= str; i++) {
            res_str += "<tr>\n";
            for (let j = 1; j <= stb; j++) {
                let value = (2 * j) - i;  // Формула Aij = 2j - i
                res_str += "<td>";
                res_str += "<input type='text' id='cell_" + i + "_" + j + "' value='" + value + "' readonly>";
                res_str += "</td>\n";
            }
            res_str += "</tr>\n";
        }
        res_str += "</table>";

        // Виведення таблиці
        tableDiv.innerHTML = res_str;
    }

    // Функція для підрахунку суми елементів
    function calculateSum() {
        let totalSum = 0;
        for (let i = 1; i <= str; i++) {
            for (let j = 1; j <= stb; j++) {
                let cell = document.getElementById("cell_" + i + "_" + j);
                if (cell) {
                    let value = parseInt(cell.value);
                    totalSum += value;
                } else {
                    console.error("Елемент cell_" + i + "_" + j + " не знайдено!");
                }
            }
        }
        alert("Загальна сума елементів матриці: " + totalSum);
    }

    // Робимо ці функції глобальними, щоб їх можна було викликати з HTML
    window.generateTable = generateTable;
    window.calculateSum = calculateSum;
});


// Завдання 4

let num1 = 15;
let num2 = 4;
let remainder = num1 % num2;

console.log("Остача від ділення", num1, "на", num2, "=", remainder);  // Вивід: Остача від ділення 15 на 4 = 3

let isDivisible = (num1 % num2 === 0);

console.log("Чи", num1, "ділиться на", num2, "без остачі?", isDivisible);  // Вивід: Чи 15 ділиться на 4 без остачі? false

let arr = [10, 20, 30];
console.log("Елементи масиву: %d, %d, %d", arr[0], arr[1], arr[2]);  // Вивід: Елементи масиву: 10, 20, 30
console.log("Текст і значення масиву: %s", arr);  // Вивід: Текст і значення масиву: 10,20,30
console.log("Масив починаючи з другого елементу: %o", arr.slice(1));  // Вивід: Масив починаючи з другого елементу: [20, 30]

// Завдання 5

console.info("Це інформаційне повідомлення");
console.warn("Це попередження!");
console.error("Помилка! Щось пішло не так.");
let obj = {name: "John", age: 30};
console.dir(obj);
console.dirxml(document.body);
console.time("Таймер");
// Виконуємо певні операції
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Таймер");  // Виведе час, витрачений на цикл
console.profile("Моє профілювання");
// Виконуємо код, який потрібно профілювати
for (let i = 0; i < 1000000; i++) {}
console.profileEnd("Моє профілювання");
let x = 5;
console.assert(x === 10, "Помилка: x не дорівнює 10");  // Виведе помилку, оскільки x не дорівнює 10


