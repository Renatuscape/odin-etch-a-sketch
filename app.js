const container = document.getElementById("container");
const eraseButton = document.getElementById("erase")
let erasing = false;

eraseButton.value = "Toggle Erase";
eraseButton.onclick = toggleErase;

function toggleErase() {
  erasing = !erasing;
  eraseButton.textContent = erasing ? "Erase Mode" : "Drawing Mode";
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