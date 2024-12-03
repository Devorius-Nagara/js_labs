function calculateResults() {
    let totalScore = 0;
    const questions = [
        { type: 'radio', name: 'question1' },
        { type: 'radio', name: 'question2' },
        { type: 'checkbox', name: 'question3', correct: 2 },
        { type: 'checkbox', name: 'question4', correct: 2 },
        { type: 'select', id: 'question5' },
        { type: 'multiselect', id: 'question6', correct: 2 },
        { type: 'text', id: 'question7', answer: 'Вашингтон' }
    ];

    let results = questions.map((q, index) => {
        let score = 0;
        let selectedAnswer;

        if (q.type === 'radio') {
            const options = document.getElementsByName(q.name);
            let selectedOption = null;
            for (let i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selectedOption = options[i];
                    score = parseInt(options[i].value);
                    break;
                }
            }
            selectedAnswer = selectedOption ? selectedOption.nextSibling.textContent.trim() : "Немає відповіді";
        } else if (q.type === 'checkbox') {
            const options = document.getElementsByName(q.name);
            const selectedOptions = [];
            let correctSelections = 0;
            for (let i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selectedOptions.push(options[i].nextSibling.textContent.trim());
                    correctSelections += parseInt(options[i].value);
                }
            }
            selectedAnswer = selectedOptions;
            score = (selectedOptions.length === q.correct) ? correctSelections : 0;
        } else if (q.type === 'select') {
            const selectElement = document.getElementById(q.id);
            selectedAnswer = selectElement.options[selectElement.selectedIndex].text;
            score = parseInt(selectElement.value);
        } else if (q.type === 'multiselect') {
            const selectElement = document.getElementById(q.id);
            const selectedOptions = Array.from(selectElement.selectedOptions);
            selectedAnswer = selectedOptions.map(option => option.text);
            score = (selectedOptions.length === q.correct) ? selectedOptions.reduce((sum, option) => sum + parseInt(option.value), 0) : 0;
        } else if (q.type === 'text') {
            const answer = document.getElementById(q.id).value.trim();
            selectedAnswer = answer;
            score = (answer.toLowerCase() === q.answer.toLowerCase()) ? 1 : 0;
        }

        totalScore += score;
        return { question: `Питання ${index + 1}`, selectedAnswer, score };
    });

    displayResults(results, totalScore);
}

function displayResults(results, totalScore) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = `
        <table>
            <tr><th>Питання</th><th>Відповідь</th><th>Бал</th></tr>
            ${results.map(r => `<tr><td>${r.question}</td><td>${r.selectedAnswer}</td><td>${r.score}</td></tr>`).join('')}
            <tr><td colspan="2">Загальний бал</td><td>${totalScore}</td></tr>
        </table>
    `;
}
