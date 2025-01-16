const display = document.getElementById('display');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check the saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.checked = true;
} else {
    body.classList.remove('dark');
    themeToggle.checked = false;
}

// Add event listener to the theme toggle switch
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

function appendToDisplay(value) {
    // Append the value directly to the display.
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace '×' with '*' in the display value before evaluating.
        const result = eval(display.value.replace(/×/g, '*'));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value.replace(/×/g, '*')));
    } catch (error) {
        display.value = 'Error';
    }
}

function power() {
    display.value += '**';
}