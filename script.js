const speedControl = document.getElementById('speedControl');
const heightControl = document.getElementById('heightControl');
const toggleBtn = document.getElementById('toggleAnimation');
const toggleDirection = document.getElementById('toggleDirection');
const toggleMode = document.getElementById('toggleMode');
const rainbow = document.querySelector('.line_contain');
const root = document.documentElement;

// Speed control
speedControl.addEventListener('input', () => {
    root.style.setProperty('--rainbow-speed', `${speedControl.value}s`);
});

// Height control
heightControl.addEventListener('input', () => {
    rainbow.style.height = `${heightControl.value}px`;
});

// Pause / Play toggle
let isPaused = false;
toggleBtn.addEventListener('click', () => {
    rainbow.style.animationPlayState = isPaused ? 'running' : 'paused';
    toggleBtn.textContent = isPaused ? 'Pause' : 'Play';
    isPaused = !isPaused;
});

// Reverse direction toggle
let isReversed = false;
toggleDirection.addEventListener('click', () => {
    root.style.setProperty('--rainbow-direction', isReversed ? 'normal' : 'reverse');
    toggleDirection.textContent = isReversed ? 'Reverse Direction' : 'Normal Direction';
    isReversed = !isReversed;
});

// Dark / Light mode toggle
let darkMode = false;
toggleMode.addEventListener('click', () => {
    if (!darkMode) {
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
        toggleMode.textContent = 'Light Mode';
    } else {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        toggleMode.textContent = 'Dark Mode';
    }
    darkMode = !darkMode;
});
