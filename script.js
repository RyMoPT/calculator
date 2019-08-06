    function add(a,b) {
        return a+b;
    }
    function subtract(a,b) {
        return a-b;
    }
    function multiply(a,b) {
        return a*b;
    }
    function divide(a,b) {
        return a/b;
    }

    
    function operate(operator,a,b) {
        switch (operator) {
            case '+':
            return add(a,b);
            break;
            
            case '-':
            return subtract(a,b)
            break;

            case '*':
            return multiply(a,b)
            break;

            case '/':
            return divide(a,b)

            default:
            return currentNumber;
        }}
//     function operate(operator,a,b) {
//         if (operator === '+') {
//             return add(a,b);
//         }
//         else if (operator === '-') {
//             return subtract(a,b);
//         }
//         else if (operator ==='*' && b===0) {
//         return multiply(a,1);
//         }
//         else if (operator === '/') {
//             return divide(a,b);
//         }
//         else if (operator === '*') {
//             return multiply(a,b);
//         }
        

//    }

    const button = document.querySelectorAll('.item');
    const display = document.querySelector(".theDisplay");
    const equal = document.querySelector(".equal");
    const clear = document.querySelector(".clear");
    const mathFunctions = document.querySelectorAll(".func");
    const decimal = document.querySelector(".decimal");
    const back = document.querySelector(".back");
    


    let currentNumber= "";
    let storedNumber= 0;
    let result='';
    let lastOperand=0;
    let randomOperator='';

//listening for numbers and calculates on the go
    for (i=0; button.length > i; i++) {
    button[i].addEventListener('click', function(e) {
        currentNumber = (currentNumber + this.id);
        storedNumber= operate(randomOperator,Number(storedNumber),Number(currentNumber));
        console.log(storedNumber);
        display.innerHTML = (currentNumber);
        console.log(this.id);
    })};

    //adding decimal to currentNumber on display. Also removes decimal button on click
    decimal.addEventListener('click', function(e) {
        if (currentNumber==='') {
            currentNumber=0 + this.id;
            display.innerHTML = currentNumber;
            console.log(currentNumber);
        } else{
        currentNumber = parseFloat(currentNumber) + this.id;
        display.innerHTML = (currentNumber);
        decimal.style.display = 'none';
        console.log(this.id);}
    });
    
    //Displays operator used. Resets current number to 0. Also brings back decimal button.
    for (i=0; mathFunctions.length > i; i++) {
    mathFunctions[i].addEventListener('click', function(e) {
        randomOperator = this.id;
        currentNumber='';
        display.innerHTML = this.id;
        decimal.style.display = 'inline';
        console.log(this.id);
    })};

    // Displays final answer. If user tries to divide by 0, gets error msg.
    equal.addEventListener('click', function(e) {
        console.log(randomOperator,storedNumber,currentNumber);
        if (randomOperator==='/' && currentNumber==='0') {
            display.innerHTML= 'Nice try.';
        }else {
            if (storedNumber.toString().length >= 8) {
                display.innerHTML = storedNumber.toFixed(4);
            }else { display.innerHTML = storedNumber;}
            currentNumber='';
            
            }});
    
    //Clear button to reset everything to 0.
    clear.addEventListener('click', function(e) {
        result=0;
        storedNumber=0;
        currentNumber='';
        randomOperator=0;
        decimal.style.display = 'inline';
        display.innerHTML = result;

    });
    
    //Back button converting to string then removing last character before converting back into a number
    back.addEventListener('click', function(e) {
        //convert to string
        currentNumber = currentNumber.toString();
        //remove last character from string
        currentNumber = currentNumber.substring(0, currentNumber.length -1);
        display.innerHTML = currentNumber;
        //convert back to number
        currentNumber = Number(currentNumber);
    });   