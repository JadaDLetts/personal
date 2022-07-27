<!--            calculating factorial based on Integer input-->
function calculateFactorial(input) {
    //default result of 1
    let result = 1;

    //checking if the input parameter is greater than 0
    if (input > 0) {
        //for loop counting down to 1
        for (let i = input; i > 0; i--) {
            //multiply the result defined above for each i generated till reaching 1.
            //does not have to reach 1 as anything multiplied by 1 is itself
            result *= i;
        }
    }
        //checking if the input parameter is less than 0
    //if less than 0 the input is taken in as -(num!)
    else if (input < 0) {
        //for loop counting up to 1
        for (let i = input; i < 0; i++) {
            //multiply the result defined above for each i generated till reaching 1.
            //does not have to reach 1 as anything multiplied by 1 is itself
            result *= i;
        }
        //checking if the result is greater than 0
        //if greater than 0 multiply by -1 to ensure negative result
        if (result > 0) {
            result *= (-1);
        }
    }
    //returns the factorial result
    return result;
}

//This method parses the String, given by the input field
//returns an array of characters
function calculateHelp(s) {
    // --- Parse a calculation string into an array of numbers and operators
    let calculation = [],
        current = '';
    let ch;
    for (let i = 0; i < s.length; i++) {
        ch = s.charAt(i);
        if ('^*/+-'.indexOf(ch) > -1) {
            if (current === '' && ch === '-') {
                current = '-';
                console.log('\n1: ' + current);
            } else {
                calculation.push(parseFloat(current), ch);
                console.log('\n2: ' + current);
                current = '';
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current !== '') {
        calculation.push(parseFloat(current));
        console.log('\n3: ' + current);
    }
    return calculation;
}

//calculates the result of the array of characters given by calculateHelp(String s)
function calculate(chars) {
    //parsing through input string
    let calc = calculateHelp(chars);
    // --- Perform a calculation expressed as an array of operators and numbers
    let ops = [{'^': (a, b) => Math.pow(a, b)},
            {'*': (a, b) => a * b, '/': (a, b) => a / b},
            {'+': (a, b) => a + b, '-': (a, b) => a - b},
            {'!': (a) => a * a}],
        newCalc = [],
        currentOp;
    //looping through every operation in ops list
    for (let i = 0; i < ops.length; i++) {
        for (let j = 0; j < calc.length; j++) {
            if (ops[i][calc[j]]) {
                currentOp = ops[i][calc[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] =
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else {
                newCalc.push(calc[j]);
            }
            console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    //
    if (calc.length > 1) {
        console.log('Error: unable to resolve calculation');
        return calc;
    } else {
        return calc[0];
    }
}