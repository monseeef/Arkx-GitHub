let firstName = "Monsif";
let lastName = "El Ouarat";
const PI = 3.14;
let radius = 10;
let favoriteSuperhero = "Killua";
let favoriteQuote = "Noth";

// 1- Tell Your name.
let fullName = firstName + " " + lastName;

// 2- Math.
let aera = PI * (radius ** 2);
let perimeter = 2 * PI * radius;

// 3- Motivation.
let motivation = "A wise man named " + favoriteSuperhero + ": " + favoriteQuote;

// Calling.
console.log(fullName);
console.log(aera);
console.log(perimeter);
console.log(motivation);

//--- Task 3 :

let a = 3;
let b = 10;

a = a + b;// 13
b = a - b;// 3
a = a - b;// 10
console.log("After swapping: a = ", a, " and b = ", b);

//---Conditional Statements


// Task 01
let n = 2;

if (n % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// Task 02

let day = 9;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Unvalid Day");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

//-- Task 3 : Maximum

let k = -15;
let l = 6;
let m = 2.6;

if (k >= l && k >= m) {
    console.log(k);
} else if (l >= k && l >= m) {
    console.log(l);
} else {
    console.log(m);;
}

// Task 4 : The Teacher
let score = 170;
if (score <= 100 && score > 0) {

    if (score > 85) {
        console.log("A");
    } else if (score > 70) {
        console.log("B");
    } else if (score > 55) {
        console.log("C");
    } else if (score > 40) {
        console.log("D");
    } else if (score > 15) {
        console.log("E");
    } else if (score <= 15) {
        console.log("F");
    }
} else {
    console.log("Not Exist !!");
}