function sumTwoNumbers() {
    let numberA = prompt("Enter number A:");
    const resultBox = document.getElementById("result1");

    if (numberA === null || numberA.trim() === "" || isNaN(numberA)) {
        alert("Number A is formatted incorrectly!");
        resultBox.className = "result-box error";
        resultBox.innerHTML = "❌ Number A is formatted incorrectly!";
        return;
    }

    let numberB = prompt("Enter number B:");

    if (numberB === null || numberB.trim() === "" || isNaN(numberB)) {
        alert("Number B is formatted incorrectly!");
        resultBox.className = "result-box error";
        resultBox.innerHTML = "❌ Number B is formatted incorrectly!";
        return;
    }

    let result = parseFloat(numberA) + parseFloat(numberB);

    alert(`Result:\n${numberA} + ${numberB} = ${result}`);

    resultBox.className = "result-box success";
    resultBox.innerHTML = `✅ Result: ${numberA} + ${numberB} = ${result}`;
}

function checkEvenOdd() {
    let number = prompt("Enter any integer:");
    const resultBox = document.getElementById("result2");

    if (number === null || number.trim() === "" || isNaN(number)) {
        resultBox.className = "result-box error";
        resultBox.innerHTML = "❌ You must enter a valid number!";
        return;
    }

    number = parseInt(number);

    if (number % 2 === 0) {
        resultBox.className = "result-box success";
        resultBox.innerHTML = `<b>✅ ${number} is an even number.</b>`;
    } else {
        resultBox.className = "result-box info";
        resultBox.innerHTML = `<i>🔵 ${number} is an odd number.</i>`;
    }
}