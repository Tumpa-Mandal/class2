//Mandatory Tasks 01:
    
    var a = 5;
    var b = 15;
    if (a > b) { 
        console.log('a is greater than b');
    } 
    else {
        console.log('a is not greater than b'); //Output:a is not greater than b
    }
    

    //multiply:

    function multiply(x, y){
        return x * y; 
    }

    console.log(multiply(3, 7)); // Output:21

    //Comparison Operators:

    var c = 8;
    var d = 8;
    if (c === d) {
        console.log('c is equal to d'); // Output: c is equal to d
    } 
    else { 
        console.log('c is not equal to d'); 
    }

    //subtract:

    function subtract(m, n) {
        return m - n;
    }
    console.log(subtract(10, 4)); // Output: 6

    //Comparison Operators:

    var e = 12;
    var f = 6;
    if (e % f === 0) {
    console.log('e is divisible by f'); // Output: e is divisible by f
    } else {
    console.log('e is not divisible by f');
    }

    //divide:

    function divide(p, q){
        return p / q;
    }
    console.log(divide(20, 5)); // Output: 4

    //Mandatory Tasks 02:

    // Arithmetic Operations

    let a = 10;
    let b = 5;
    console.log(a + b); // 15
    console.log(a - b); // 5
    console.log(a * b); // 50
    console.log(a / b); // 2
    console.log(a % b); // 0

    //Comparison Operations

    console.log(a > b); // true
    console.log(a < b); // false
    console.log(a == 10); // true
    console.log(b != 5); // false

    //Logical Operations
    let isAdult = true;
    let hasPermission = false;
    console.log(isAdult && hasPermission); // false
    console.log(isAdult || hasPermission); // true
    console.log(!isAdult); // false

    //Ternary Operation

    let age = 20;
    let access = (age >= 18) ? 'Granted' : 'Denied';
    console.log(access); // Outputs: 'Granted'

    //Mandatory Tasks 03:

    //01.Addition Function:

    function add(x,y){
        return x + y;
    }

    console.log(add(5,10)); //15

    //02.Subtraction Function:

    function subtract(x,y){
        return x - y;
    }

    console.log(subtract(10, 4)); //6

    //03.Multiplication Function:

    function multiply(x,y){
        return x * y;
    }

    console.log(multiply(3, 7)); //21

    //04.Division Function:

    function divide(x,y){
        return x / y;
    }

    console.log(divide(20, 5)); //21

    //Optional Tasks:

    //For Loop:

    function printNumbers() {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }
    
    printNumbers();

    //While Loop:

    function printEvenNumbers() {
        let i = 2;
        while (i <= 20) {
            console.log(i);
            i += 2;
        }
    }
    
    printEvenNumbers();

    //Do-While Loop:

    function printOddNumbers() {
        let i = 1;
        do {
            console.log(i);
            i += 2;
        } while (i < 20);
    }
    
    
    printOddNumbers();

    // Task 2: Switch Statements

    function getDayName(dayNumber) {
        let dayName;
        switch (dayNumber) {
            case 1:
                dayName = 'Sunday';
                break;
            case 2:
                dayName = 'Monday';
                break;
            case 3:
                dayName = 'Tuesday';
                break;
            case 4:
                dayName = 'Wednesday';
                break;
            case 5:
                dayName = 'Thursday';
                break;
            case 6:
                dayName = 'Friday';
                break;
            case 7:
                dayName = 'Saturday';
                break;
            default:
                dayName = 'Invalid day number';
        }
        return dayName;
    }
    
    
    console.log(getDayName(3)); // Outputs: 'Tuesday'
    console.log(getDayName(7)); // Outputs: 'Saturday'
    








