let selectedColor = '#000000';
let brushThickness = 8

function setup() {
    pixelDensity(4);

    let canvasContainerWidth = document.getElementById('canvasContainer');
    let mainContainerHeight = document.getElementById('mainContainerHeight');

    let canvasWidth = canvasContainerWidth.offsetWidth - 112; // Get the width of the container
    let canvasHeight = mainContainerHeight.offsetHeight / 1.9; // Get the height of the container

    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');


    redButton = select('#red');
    redButton.mousePressed(changeRed);

    orangeButton = select('#orange')
    orangeButton.mousePressed(changeOrange)

    yellowButton = select('#yellow')
    yellowButton.mousePressed(changeYellow)

    greenButton = select('#green')
    greenButton.mousePressed(changeGreen)

    whiteButton = select('#white')
    whiteButton.mousePressed(changeWhite)

    blueButton = select('#blue')
    blueButton.mousePressed(changeBlue)

    purpleButton = select('#purple')
    purpleButton.mousePressed(changePurple)

    blackButton = select('#black')
    blackButton.mousePressed(changeBlack)

    saveButton = select('#saveButton')
    saveButton.mousePressed(saveImage);

    clearButton = select('#clearButton')
    clearButton.mousePressed(clearCanvas)

    smallBrushButton = select('#small')
    smallBrushButton.mousePressed(changeSmall)

    mediumBrushButton = select('#medium')
    mediumBrushButton.mousePressed(changeMedium)

    BigBrushButton = select('#big')
    BigBrushButton.mousePressed(changeBig)

    background('#FFFFFF');

}

function draw() {

    if (mouseIsPressed) {
        stroke(selectedColor);
        smooth();

        strokeWeight(brushThickness);
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}


function changeRed() {
    selectedColor = '#E64E4E';
    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', selectedColor);
    }
}

function changeOrange() {
    selectedColor = '#FF9922';

    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', selectedColor);
    }
}

function changeYellow() {
    selectedColor = '#FFD12E';

    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', '#EBB803');
    }
}

function changeGreen() {
    selectedColor = '#72F170';

    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', '#01C62C');
    }
}

function changeWhite() {
    selectedColor = '#FFFFFF';

    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', '#ACACAC');
    }
}

function changeBlue() {
    selectedColor = '#2E75FF';
    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', selectedColor);
    }
}

function changePurple() {
    selectedColor = '#C92EFF';
    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', selectedColor);
    }
}

function changeBlack() {
    selectedColor = '#000000';
    let brushButtons = selectAll('.brush-thickness');

    for (var i = 0; i < brushButtons.length; i++) {
        brushButtons[i].style('color', selectedColor);
    }
}

function changeSmall() {
    brushThickness = 4
}

function changeMedium() {
    brushThickness = 8
}

function changeBig() {
    brushThickness = 16
}

function saveImage() {
    save("duck.png")
}

function clearCanvas() {
    clear()
}