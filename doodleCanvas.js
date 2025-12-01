let selectedColor = '#000000';
let brushThickness = 8

function setup() {
    pixelDensity(4);

    // Wait for DOM elements to be available
    let canvasContainerWidth = document.getElementById('canvasContainer');
    let mainContainerHeight = document.getElementById('mainContainerHeight');

    // If elements don't exist yet, wait and try again
    if (!canvasContainerWidth || !mainContainerHeight) {
        setTimeout(setup, 100);
        return;
    }

    let canvasWidth = canvasContainerWidth.offsetWidth - 112; // Get the width of the container
    let canvasHeight = mainContainerHeight.offsetHeight / 1.9; // Get the height of the container

    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('p5Sketch');


    // Set up button event listeners with safety checks
    redButton = select('#red');
    if (redButton) redButton.mousePressed(changeRed);

    orangeButton = select('#orange')
    if (orangeButton) orangeButton.mousePressed(changeOrange)

    yellowButton = select('#yellow')
    if (yellowButton) yellowButton.mousePressed(changeYellow)

    greenButton = select('#green')
    if (greenButton) greenButton.mousePressed(changeGreen)

    whiteButton = select('#white')
    if (whiteButton) whiteButton.mousePressed(changeWhite)

    blueButton = select('#blue')
    if (blueButton) blueButton.mousePressed(changeBlue)

    purpleButton = select('#purple')
    if (purpleButton) purpleButton.mousePressed(changePurple)

    blackButton = select('#black')
    if (blackButton) blackButton.mousePressed(changeBlack)

    saveButton = select('#saveButton')
    if (saveButton) saveButton.mousePressed(saveImage);

    clearButton = select('#clearButton')
    if (clearButton) clearButton.mousePressed(clearCanvas)

    smallBrushButton = select('#small')
    if (smallBrushButton) smallBrushButton.mousePressed(changeSmall)

    mediumBrushButton = select('#medium')
    if (mediumBrushButton) mediumBrushButton.mousePressed(changeMedium)

    BigBrushButton = select('#big')
    if (BigBrushButton) BigBrushButton.mousePressed(changeBig)

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