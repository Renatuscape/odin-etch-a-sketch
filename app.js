const container = document.getElementById("container");
const eraseButton = document.getElementById("erase")
let erasing = false;

eraseButton.value = "Toggle Erase";
eraseButton.onclick = toggleErase;

function toggleErase() {
  erasing = !erasing;
  eraseButton.textContent = erasing ?  "Erase Mode" : "Drawing Mode";
}

function makeRows(rows, cols) {
  // Clear existing grid items
  container.innerHTML = '';

  // Create new grid items
  for (let i = 0; i < (rows * cols); i++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";

    // Add click event listener
    cell.addEventListener('mouseover', function () {
      if (!erasing) {
        this.classList.add('active');
      }
      else {
        this.classList.remove('active');
      }
    });

    container.appendChild(cell);
  }
}

makeRows(16, 16);