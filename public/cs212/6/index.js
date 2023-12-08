const BUTTON = document.getElementById("button");
const RESULT = document.querySelector("#result");
let inputA;
let inputB;
let hypotenuse;
let paragraph;
let c;

function findHypotenuse() {
    inputA = document.querySelector("#inputA").value;
    inputB = document.querySelector("#inputB").value;

    hypotenuse = Math.sqrt(inputA * inputA + inputB * inputB);
    paragraph = "The hypotenuse is " + hypotenuse;
    RESULT.textContent = paragraph;
    return hypotenuse;
}

BUTTON.addEventListener("click", findHypotenuse);