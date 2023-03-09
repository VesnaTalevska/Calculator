let currentValue = '';
let currentResult = null;
let prevResult = null; // variable to store previous result

function display(val) {
    if (currentValue === '' && prevResult !== null) {
        currentValue = prevResult;
    }
    document.getElementById('result').value += val;
    currentValue += val;
    return val;
}

function solve() {
    if (currentValue !== '') {
        currentResult = eval(currentValue);
        prevResult = currentResult; // store current result as previous result
        document.getElementById('result').value = currentResult;
        currentValue = '';
    } else if (prevResult !== null) {
        currentResult = eval(prevResult + currentValue); // use previous result as starting value
        prevResult = currentResult; // update previous result
        document.getElementById('result').value = currentResult;
        currentValue = '';
    }
    return currentResult;
}

function clearScreen() {
    document.getElementById('result').value = "";
    currentValue = '';
    currentResult = null;
    location.reload(); // reload the page
}

document.addEventListener('keypress', function(event) {
    let keyCode = event.keyCode || event.which;
    let keyChar = String.fromCharCode(keyCode);
    if (/[\d+\-*/().]/.test(keyChar)) {
        display(keyChar);
    } else if (keyCode === 13) {
        solve();
    }
});

let clearButton = document.getElementById('clear');
if (clearButton) {
  clearButton.addEventListener('click', function() {
    clearScreen();
  });
}