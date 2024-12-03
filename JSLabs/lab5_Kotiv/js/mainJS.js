document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.getElementsByClassName('tab-button');
    const contents = {
        archives: document.getElementById('archives'),
        topics: document.getElementById('topics'),
        pages: document.getElementById('pages')
    };

    // Перебираємо всі кнопки вкладок
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function() {
            for (let j = 0; j < tabButtons.length; j++) {
                tabButtons[j].classList.remove('active');
            }
            for (let key in contents) {
                contents[key].style.display = 'none';
            }

            // Додаємо 'active' клас до натиснутої кнопки та показуємо відповідний контент
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            contents[tabId].style.display = 'block';
        });
    }
});