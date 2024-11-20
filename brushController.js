window.brushStrength = 0.1;
const settingsContainer = document.getElementById("brush-settings");

function buildSettings() {
    settingsContainer.innerHTML = '';
    let brushStrength = 0.1;

    for (let i = 0; i < 10; i++) {
        const button = document.createElement("button");
        button.className = 'brush-opacity-button';
        button.title = brushStrength;
        button.style.opacity = brushStrength;
        brushStrength = Math.round((brushStrength + 0.1) * 10) / 10;

        settingsContainer.appendChild(button);

        button.onclick = () => {
            window.brushStrength = button.title;
        }
    }
}

buildSettings();