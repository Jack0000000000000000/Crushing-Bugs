console.log("JavaScript File is linked");

// Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
const resetBtn = document.querySelector(".reset-btn");
const labelBox = document.getElementById("label-box");

// Functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
}

function dragOver(event) {
    event.preventDefault(); // Allows drop
}

function drop(event) {
    event.preventDefault();

    // Prevent dropping if already a label inside
    if (this.children.length > 0) {
        return;
    }

    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

function resetGame() {
    console.log("Reset Game called");

    // Move labels back to labelBox
    targetZones.forEach(zone => {
        if (zone.children.length > 0) {
            const label = zone.firstElementChild;
            labelBox.appendChild(label);
        }
    });
}

// Event listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
});

resetBtn.addEventListener("click", resetGame);