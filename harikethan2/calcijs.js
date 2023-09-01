var openbracket = 0, concatenatedInput = '', prevCharacter = '', operator = 0;

//Handling Parenthesis in calci
function togglepara() {
    openbracket = 1 - openbracket;
    return openbracket === 1 ? '(' : ')';

}

//Validating according to eval function
function validate(seq) {
    try {
        concatenatedInput = eval(concatenatedInput).toString();
    } catch (error) {
        console.log("Invalid Expression for eval function");
        concatenatedInput = "ERROR";
    }
    return concatenatedInput;
}

//Updating the size of display on calci
function updateDisplay() {
    var inputLength = concatenatedInput.length;
    var displayElement = document.getElementById("demo");
    if (inputLength <= 10) {
        displayElement.style.fontSize = "3rem";
    } else if (inputLength <= 20) {
        displayElement.style.fontSize = "2rem";
    } else {
        displayElement.style.fontSize = "1.5rem";
    }

    displayElement.innerHTML = concatenatedInput;
}


//Main functionality of calci
function ans(inp) {
    if (inp === 'ac') {
        concatenatedInput = '';
    }
    else if (inp === 'back') {
        if (concatenatedInput.length > 0) {
            concatenatedInput = concatenatedInput.slice(0, -1);
        }
    }
    else if (inp === '+/-') {
        concatenatedInput += togglepara();
    }
    else if (inp === '=') {
        concatenatedInput = validate(concatenatedInput);
    }
    else {
        if (inp === '-' || inp === '*' || inp === '/' || inp === '+') {
            console.log(inp);
            console.log(concatenatedInput);
            if (operator === 1) {
                concatenatedInput = concatenatedInput.slice(0, -1);
                concatenatedInput += inp;
            }
            else {
                concatenatedInput += inp;
                operator = 1
            }
        }
        else {
            concatenatedInput += inp;
            operator = 0
        }

    }
    updateDisplay(concatenatedInput)
    console.log(concatenatedInput);
    document.getElementById("demo").innerHTML = concatenatedInput;
    if (inp == 'ac' || concatenatedInput.length === 0 ||concatenatedInput==='ERROR') {
        document.getElementById("result").innerHTML = ''
    }
    else {
        document.getElementById("result").innerHTML = eval(concatenatedInput)

    }
}