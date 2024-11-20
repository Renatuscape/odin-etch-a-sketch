const container = document.getElementById("container");
const eraseButton = document.getElementById("erase")
const resetButton = document.getElementById("reset");

let erasing = false;

eraseButton.value = "Toggle Erase";
eraseButton.onclick = toggleErase;

resetButton.value = "Reset Grid";
resetButton.onclick = resetGrid;

function toggleErase() {
  erasing = !erasing;
  eraseButton.textContent = erasing ? "Erase Mode" : "Drawing Mode";
}

function resetGrid() {
  let validInput = false;
  let gridSize;

  while (!validInput) {
    gridSize = prompt("Please enter grid resolution (1-100)", 64);

    // Handle cancel button
    if (gridSize === null) {
      return;  // Exit function if user cancels
    }

    gridSize = parseInt(gridSize);

    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
      validInput = true;
    } else {
      alert("Please enter a valid number between 1 and 100");
    }
  }

  makeRows(gridSize, gridSize);
}

function makeRows(rows, cols) {
  // Clear existing grid items
  container.innerHTML = '';
  let cellWidth = 800 / cols;
  let cellHeight = 800 / rows;

  // Create new grid items
  for (let i = 0; i < (rows * cols); i++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    cell.style.opacity = "0";
    cell.style.width = cellWidth + "px";
    cell.style.height = cellHeight + "px";

    // Add click event listener
    cell.addEventListener('mouseover', function () {
      let currentOpacity = parseFloat(cell.style.opacity);

      if (!erasing) {
        // Drawing mode - increase opacity, but only if not fully opaque
        if (currentOpacity < 1) {
          currentOpacity = Math.min(1, currentOpacity + 0.1);
          cell.style.opacity = currentOpacity.toFixed(1);
        }
      } else {
        // Erase mode - decrease opacity
        if (currentOpacity > 0) {
          currentOpacity = Math.max(0, currentOpacity - 0.1);
          cell.style.opacity = currentOpacity.toFixed(1);
        }
      }
    });

    container.appendChild(cell);
  }
}

makeRows(64, 64);