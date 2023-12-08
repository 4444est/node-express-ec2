// set constants
const boxes = document.querySelectorAll(".box");
const clear = document.getElementById('clear');
const randomize = document.getElementById('randomize');

// initialize variables
let randomNums = []
const rightSide = 0;
const leftSide = 4;

// setup boxes
boxes.forEach((e) => {
    e.style.backgroundColor = "grey";
})
boxes.forEach((e) => {
    e.addEventListener('click', function(){
        changeState(e);
        winState(boxes);
    })
})
randomizeGrid(boxes);
// setBlack(); // for testing

function changeState(box) {
    // initialize variables
    let upperLim = 25;
    let lowerLim = 0;
    let rowDiff = 5;
    let placement = box.dataset.id % 5;
    let right = parseInt(box.dataset.id) + 1;
    let left = parseInt(box.dataset.id) - 1;
    let bottom = parseInt(box.dataset.id) - 5;
    let top = parseInt(box.dataset.id) + 5;
    let leftside = 4;
    let rightside = 1;

    console.log(box);
    switchColor(box)
    // if bottom box is in bounds, switch its color
    if( bottom >= 0 ) {
        switchColor(boxes[bottom]);
    }
    // if top box is in bounds, switch its color
    if( top <= 24 ) {
        switchColor(boxes[top]);
    }
    // if left box is in bounds, switch its colofr
    if( placement % 5 != rightSide ) {
        switchColor(boxes[left]); 
    }
    // if right box is in bounds, switch its color
    if( placement % 5 != leftSide ) {
        switchColor(boxes[right]); 
    }
}

function switchColor(box) {
    // switch box color to be opposite of its current state
    if( box.style.backgroundColor === "black" ) {
        box.style.backgroundColor="grey";
    } else if (box.style.backgroundColor === "grey" ) {
        box.style.backgroundColor="black"
    } else {
        console.log("Error");
    }
}

function resetGrid() {
    boxes.forEach((e) => {
        e.style.backgroundColor = "grey";
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomizeGrid(boxes) {
    // initialize variables
    let randNum = 0;
    let click = 0;
    for( click; click < 50; click++) {
        randNum = getRandomInt(25);
        changeState(boxes[randNum]);
    }
}

function winState(boxes) {
    let isWon = true;
    boxes.forEach((e) => {
        if( e.style.backgroundColor != "black" ) {
            isWon = false;
        }
    })
    if( isWon == true ) {
        alert("You win!");
    }
}

function setBlack() {
    boxes.forEach((e) => {
        e.style.backgroundColor = "black";
    })
}

// if reset button is clicked reset grid
clear.addEventListener("click", resetGrid);
randomize.addEventListener("click", function() {
    randomizeGrid(boxes);
    }, false);