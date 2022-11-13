document.onload = generatorColour();

document.getElementById("gen-color").addEventListener("click", generatorColour);

function generatorColour() {
    // Create color
    let randColor = Math.floor(Math.random() * 16777215).toString(16)
    // set text and background to color
    document.getElementById("main-page").style.backgroundColor = "#" + randColor;
    document.getElementById("colour").innerHTML = "#" + randColor.toUpperCase();
}