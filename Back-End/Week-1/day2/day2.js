

// Task 1 : Factorial

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(fact);


// Task 2 : How many digits 

// let num2 = 123542;

// let sum = 0;
// sum += n3 % 10;
// while (n3 > 0) {
//     n3 = (n3 / 10) | 0;
// }

// let res = num2.toString();

// for (let i = 0; i < res.length; i++) {

//     console.log(res.length);
// }

// Task 3 :  Time to draw !

let tree = 4;

for (let i = 0; i < tree; i++) {
    let es = "";
    let st = "";
    for (let j = 0; j < tree - i - 1; j++) {
        es = es + " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        st = st + "*";
    }
    console.log(es + st);
}
console.log("   |");

// --- Functions ---

// 1- Factorial:

function factorial(n) {

    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
//console.log(factorial(6));
let result = factorial(5);
console.log(result);

// 2- nDigits
let n3 = 123542;

function nDigits(n3) {
    let sum = 0;
    sum += n3 % 10;
    while (n3 > 0) {
        n3 = (n3 / 10) | 0;
    }
}
console.log(nDigits(n3));

// 3- numberToDay:

function numberToDay(day) {
    switch (day) {
        case 1:
            return ("Monday");
        case 2:
            return ("Tuesday");
        case 3:
            return ("Wednsday");
        case 4:
            return ("Thursday");
        case 5:
            return ("Friday");
        case 6:
            return ("Saturday");
        case 7:
            return ("Sunday");
        default:
            return ("Unvalid Day");
    }
}
console.log(numberToDay(7));


// 4- Max

function max(k, l, m) {

    if (k >= l && k >= m) {
        return k;
    } else if (l >= k && l >= m) {
        return l;
    } else {
        return m;
    }
} console.log(max(15, -8, 102));

// 5- myGrade :

function myGrade(score) {
    if (score <= 100 && score > 0) {

        if (score > 85) {
            return "A";
        } else if (score > 70) {
            return "B";
        } else if (score > 55) {
            return "C";
        } else if (score > 40) {
            return "D";
        } else if (score > 15) {
            return "E";
        } else if (score <= 15) {
            return "F";
        }
    } else {
        return "Not Exist !!";
    }
}
console.log(myGrade(60));

// Task 2 : The Extended Factorial

function combinator(n, p) {
    
    return factorial(n) / factorial(p) * (factorial(n - p));
}
console.log(combinator(5, 2));


// Task 3 :  The Calculator

function calculator(n1, op, n2) {
    switch (op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 !== 0) {
                return n1 / n2;
            } else {
                return "Don\'t acc division by 0";
            }
        case "%":
            if (n2 !== 0) {
                return n1 % n2;
            } else {
                return "Don\'t acc division by 0";
            }
        case "c":
            return combinator(n1, n2);
        default:
            return "!!!!!";
    }
}
console.log(calculator(5, "+", 1));
console.log(calculator(3, "*", -4));
console.log(calculator(5, 'c', 2));