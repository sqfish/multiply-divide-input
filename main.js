// Exercise: Write a basic HTML / JavaScript program that does the following

// - In HTML, have a single text input field
// - In HTML , have a button
// - In JavaScript, have a function divides a number by 10
// - In JavaScript, have a function that multiplies a number by 5
// - When the button is clicked, call a JavaScript function that checks if the user has entered in a value in the input field
// - If there is no value, put an appropriate message in an alert box telling the user to enter something
// - If there is a value, and its numeric value is greater than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that divides by 10.
// -If there is a value, and its numeric value is less than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5. Write the result of the calculation into the HTML document


function divideBy10 (number) {
  var quotient = number / 10;
  return quotient;
}

function multiplyBy5 (number) {
  var product = number * 5;
  return product;
}

function checkInputField () {
  var calculationResultHTML = document.getElementById("calculation-result");
  var inputField = document.getElementsByName("inputNumber");
  inputField = inputField[0].value;
  var testInput = parseInt(inputField);
  if (isNaN(testInput)) {
    alert("Please enter a numeric value.")
  } else if (inputField > 10000) {
    var output = divideBy10(inputField);
    calculationResultHTML.innerHTML = "<p>Your number was divided by 10</p><p>the result was:</p>" + output;
  } else if (inputField < 10000) {
    var output = multiplyBy5(inputField);
    calculationResultHTML.innerHTML = "<p>Your number was multiplied by 5</p><p>the result was:</p>" + output;
  } else {
    calculationResultHTML.innerHTML = "Your number was 10000";
  }
}

var button = document.getElementsByName("calculate").item(0);
button.onclick = checkInputField;