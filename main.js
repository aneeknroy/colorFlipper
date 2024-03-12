function changeBackgroundColor() {
    // Generate a Random Color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Change the background color of the HTML body
    document.body.style.backgroundColor = randomColor;

    // Set h1 text content
    var colorName = getColorName(randomColor);
    document.getElementById("colorName").innerText = colorName;
}

function getColorName(color){
    var color = tinycolor(color);
    return color.toName() || "Custom Color";
}