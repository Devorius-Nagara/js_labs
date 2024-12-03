const box = document.getElementById('box');

// Interval Animation (Move Right)
document.getElementById('interval-animation').addEventListener('click', () => {
    let start = Date.now();
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;
        if (timePassed >= 2000) {
            clearInterval(timer);
            return;
        }
        drawIntervalAnimation(timePassed);
    }, 20);

    function drawIntervalAnimation(timePassed) {
        box.style.left = timePassed / 5 + 'px';
    }
});

// requestAnimationFrame Animation (Move Down)
document.getElementById('raf-animation').addEventListener('click', () => {
    let start = performance.now();

    function animate(time) {
        let timeFraction = (time - start) / 2000;
        if (timeFraction > 1) timeFraction = 1;
        drawRAFAnimation(timeFraction);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    }

    function drawRAFAnimation(progress) {
        box.style.top = progress * 100 + 'px';
    }

    requestAnimationFrame(animate);
});

// Bounce Animation
document.getElementById('bounce-animation').addEventListener('click', () => {
    animate({
        duration: 1000,
        timing: bounce,
        draw(progress) {
            box.style.top = (1 - progress) * 100 + 'px';
        }
    });
});

// Elastic Animation
document.getElementById('elastic-animation').addEventListener('click', () => {
    animate({
        duration: 1000,
        timing: elastic(1.5),
        draw(progress) {
            box.style.top = (1 - progress) * 100 + 'px';
        }
    });
});

// EaseInOut Animation
document.getElementById('easeInOut-animation').addEventListener('click', () => {
    animate({
        duration: 1000,
        timing: makeEaseInOut(bounce),
        draw(progress) {
            box.style.left = progress * 200 + 'px';
        }
    });
});

// Animation helper function
function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
const textcolor = document.getElementsByClassName('text-container')
// Timing functions
function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {

            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}

function elastic(x) {
    return function(timeFraction) {
        return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
    };
}

function makeEaseInOut(timing) {
    return function(timeFraction) {
        if (timeFraction < .5)
            return timing(2 * timeFraction) / 2;
        else
            return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.getElementById("logo-container");
    const textContainer = document.getElementById("text-container");
    const animateButton = document.getElementById("animate-button");

    function toggleAnimation() {
        logoContainer.classList.toggle("active");
        textContainer.classList.toggle("active");
    }

    // Активація анімації при натисканні кнопки
    animateButton.addEventListener("click", toggleAnimation);

    // Автоматична активація та зупинка анімації через певний час
    setInterval(toggleAnimation, 5000); // 5 секунд
});