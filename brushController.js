window.brushStrength = 0.1;
const settingsContainer = document.getElementById("brush-settings");
const buttons = [];

function buildSettings() {
    settingsContainer.innerHTML = '';
    let brushStrength = 0.1;

    for (let i = 0; i < 10; i++) {
        const button = document.createElement("button");
        button.className = 'brush-opacity-button';
        button.title = brushStrength;
        brushStrength = Math.round((brushStrength + 0.1) * 10) / 10;

        settingsContainer.appendChild(button);

        const buttonFill = document.createElement("div");
        buttonFill.className = 'brush-button-fill';
        buttonFill.style.opacity = brushStrength;
        button.appendChild(buttonFill);

        button.onclick = () => {
            window.brushStrength = parseFloat(button.title);
            button.appendChild(buttonFill);
            setActive(button);
        }

        buttons.push(button);

                // Set the first button as active
                if (i === 0) {
                    setActive(button);
                }
    }

    console.table(buttons);
}

function setActive(clickedButton) {
    // Remove active class from all buttons
    buttons.forEach((button) => {
        button.className = 'brush-opacity-button';
    });
    
    // Add active class to clicked button
    clickedButton.className = 'brush-opacity-button active';
    console.log("Activated button with strength:", clickedButton.title);
}

buildSettings();