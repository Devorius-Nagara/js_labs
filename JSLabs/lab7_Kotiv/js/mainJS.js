// Завдання 1
function reverseNumbers() {
    const input = document.getElementById('reverseInput').value.split(' ').map(Number);
    const reversed = input.reverse();
    document.getElementById('reverseOutput').innerText = `Обернений порядок: ${reversed.join(' ')}`;
}

function removeZeros() {
    const input = document.getElementById('noZeroInput').value.split(' ').map(Number);
    const noZeros = input.filter(num => num !== 0);
    document.getElementById('noZeroOutput').innerText = `Без нулів: ${noZeros.join(' ')}`;
}

// Завдання 2
function compareStrings() {
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;
    const result = string1.length > string2.length ? 1 : string1.length < string2.length ? -1 : 0;
    document.getElementById('stringCompareOutput').innerText = `Результат порівняння: ${result}`;
}

// Завдання 3
function toCamelCase() {
    const input = document.getElementById('camelInput').value.split(', ');
    const camelCase = input.map(snake =>
        snake.replace(/_./g, match => match.charAt(1).toUpperCase())
    );
    document.getElementById('camelOutput').innerText = `Camel Case: ${camelCase.join(', ')}`;
}

function replaceDates() {
    const input = document.getElementById('dateInput').value;
    const replaced = input.replace(/\b(\d{4})\/(\d{2})\/(\d{2})\b/g, '$3.$2.$1');
    document.getElementById('dateOutput').innerText = `Замінено: ${replaced}`;
}