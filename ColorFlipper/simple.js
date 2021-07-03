//Set of colors
const colors = ["Red", "Green", "black", "Purple", "Gray", "Blue", "Yellow", "DarkBlue", "White", "Alice Blue", "Antique White", "Aqua", "Aquamarine", "Bisque", "Blue Violet", "Brown", "Indian Red", "Orange"]

//Targetting elements
const clickBtn = document.getElementById('click-btn');
const colorFormat = document.getElementById('color-format');

clickBtn.addEventListener('click', () => {
    randomColor = colors[RandomNumber()];
    document.body.style.backgroundColor = randomColor;
    colorFormat.innerHTML = randomColor;
})

function RandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

