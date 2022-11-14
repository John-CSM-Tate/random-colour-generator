// Generates colour on load and on button click.
document.onload = generatorColour();
document.getElementById("gen-color").addEventListener("click", generatorColour);
function generatorColour() {
    // Create color.
    let randColor = Math.floor(Math.random() * 16777215).toString(16)
    // set text and background to color.
    document.getElementById("main-page").style.backgroundColor = "#" + randColor;
    document.getElementById("colour").innerHTML = "#" + randColor.toUpperCase();
    document.getElementById("copy-text").value = "#" + randColor.toUpperCase();
}

// Copy colour HEX code to clipboard.
document.getElementById("clipboard").addEventListener("click", copyClipboard);
function copyClipboard() {
    let colorCode = document.getElementById("copy-text");
    colorCode.select();
    colorCode.setSelectionRange(0, 7);
    navigator.clipboard.writeText(colorCode.value)
}

// Tooltip Activation.
document.querySelector(".tooltip").addEventListener("click", copytooltip);
function copytooltip() {
    if (this.classList.contain('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}