const anglesInput = document.querySelectorAll(".angle-input");
const triangleValidateBtn = document.querySelector("#is-triangle-quiz-button");
const isTriangleOutput = document.querySelector(".is-triangle-output");

function calculateSumOfTheAngles(angle1, angle2, angle3) {
    const sumofangles = angle1 + angle2 + angle3;
    return sumofangles;
}

function isTriangle() {
    const firstAngle = anglesInput[0].value;
    const secondAngle = anglesInput[1].value;
    const thirdAngle = anglesInput[2].value;
    if (firstAngle === "" || secondAngle === "" || thirdAngle === "") {
        isTriangleOutput.innerText = "Enter all three angle values";
        isTriangleOutput.style.backgroundColor = "#888888";
        isTriangleOutput.style.border = "1px solid yellowgreen";
    } else {
        if (firstAngle <= 0 || secondAngle <= 0 || thirdAngle <= 0) {
            isTriangleOutput.innerText = "All the angles should be positive and must be greater than 0";
            isTriangleOutput.style.backgroundColor = "#888888";
            isTriangleOutput.style.border = "1px solid yellowgreen";
        } else {
            const sumOfTheAngles = calculateSumOfTheAngles(
                Number(firstAngle),
                Number(secondAngle),
                Number(thirdAngle)
            );
            if (sumOfTheAngles === 180) {
                isTriangleOutput.innerText = "Yes, it can form a triangle";
                isTriangleOutput.style.backgroundColor = "#888888";
                isTriangleOutput.style.border = "1px solid yellowgreen";
            } else {
                isTriangleOutput.innerText = "Sorry, it cannot form a triangle";
                isTriangleOutput.style.backgroundColor = "#888888";
                isTriangleOutput.style.border = "1px solid yellowgreen";
            }
        }
    }
}
triangleValidateBtn.addEventListener("click", isTriangle);

const triangleQuizForm = document.querySelector(".triangle-quiz-form");
const quizSubmitAnsBtn = document.querySelector("#submit-answer");
const triangleQuizResult = document.querySelector("#triangle-quiz-result");

const correctAnswers = ["triangle", "180", "90", "180 and 270", "90"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(triangleQuizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score++;
        }
        index++;
    }
    triangleQuizResult.innerText = "Yay, Your score is " + score + "!";
}

quizSubmitAnsBtn.addEventListener("click", calculateScore);

const sideInputs = document.querySelectorAll(".side-input");
const calcHypoteneuse = document.querySelector("#calculate-hypoteneuse-button");
const calculatedHyptoteneuse = document.querySelector(".hypoteneuse-output");

function calSquareOfSides(a, b) {
    const sumOfSquareOfSides = a * a + b * b;
    const formattedValue = sumOfSquareOfSides.toFixed(2);
    return formattedValue;
}

function calculateHyptoteneuse() {
    if (Number(sideInputs[0].value) > 0 && Number(sideInputs[1].value) > 0) {
        const sumOfSquares = calSquareOfSides(
            Number(sideInputs[0].value),
            Number(sideInputs[1].value)
        );
        const lengthOfHypoteneuse = Math.sqrt(sumOfSquares).toFixed(2);

        calculatedHyptoteneuse.innerText =
            "The length of the hypoteneuse is " + lengthOfHypoteneuse + " (units)";
    } else {
        calculatedHyptoteneuse.innerText =
            "Enter a valid value to both fields. (Make sure it's a positive value)";
    }
}

calcHypoteneuse.addEventListener("click", calculateHyptoteneuse);

const baseHeightInput = document.querySelectorAll(".side-length-input");
const calcAreaOfTriangle = document.querySelector(
    "#calculate-areaTriangle-button"
);
const calculatedAreaOfTriangle = document.querySelector(
    ".Area-of-triangle-output"
);

function calAreaOfTriangle(a, b) {
    const totalVal = a * b;
    const areaOfTriangle = totalVal / 2;
    const formatedValue = areaOfTriangle.toFixed(2);
    return formatedValue;
}

function AreaOfTriangle() {
    if (
        Number(baseHeightInput[0].value) > 0 &&
        Number(baseHeightInput[1].value) > 0
    ) {
        const triangleArea = calAreaOfTriangle(
            Number(baseHeightInput[0].value),
            Number(baseHeightInput[1].value)
        );
        calculatedAreaOfTriangle.innerText =
            "The area of the triangle is " + triangleArea + " (square units)";
    } else {
        calculatedAreaOfTriangle.innerText =
            "Enter a valid value to both the base and height fields. (Make sure it's a positive value)";
    }
}

calcAreaOfTriangle.addEventListener("click", AreaOfTriangle);