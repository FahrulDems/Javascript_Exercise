// Tugas 1
let umur = prompt ("Enter your age: ");
umur = parseInt(umur);
if (umur > 30){
    alert("You are old enough to drive")
} else if (umur < 18){
    let left = 18 - umur;
    alert("You are left with " + left + " years to drive" );
}else {
    alert("You are can drive now");
}

// Tugas 2
let age = prompt ("Enter your age: ");
age = parseInt(age);
if (age > 25){
    let left = age - 25;
    alert("You are "+ left +" years older than me")
} else {
    let left = 25 - age;
    alert("You are "+ left +" years younger than me")
}

// Tugas 3
const a = 4;
const b = 3;

const output = a > b ? "a is greater than b" : "a is not greater than b";
alert(output);

// Tugas 4
let number = prompt("Enter a number: ")
number = parseInt(number)
if (number % 2 == 0){
    alert("Number is even");
} else {
    alert("Number is odd");
}

// Tugas 5
let score = prompt("Enter your score: ");
score = parseInt(score);
if (score >= 90){
    alert("Grade A");    
} else if (score >= 80){
    alert("Grade B");
} else if (score >= 70){
    alert("Grade C");
} else if (score >= 60){
    alert("Grade D");
} else {
    alert("Grade E");
}

// Tugas 6
let month = prompt("Enter a month: ");
month = month.toLowerCase();
if (month == "september" || month == "october" || month == "november"){
    alert("The season is autumn");
} else if(month == "december" || month == "january" || month == "february"){
    alert("The season is winter");
} else if(month == "march" || month == "april" || month == "may"){
    alert("The season is spring");
} else if(month == "june" || month == "july" || month == "august"){
    alert("The season is summer");
} else {
    alert("Enter a valid month");
}

// Tugas 7
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let moon = prompt("Enter a month: ");
moon = toTitleCase(moon);
let days;
switch (moon){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        days = 31;
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        days = 30;
        break
    case 'February':
        days = "28 or 29";
        break;
    default:
        days = "Invalid";                 
}

alert(`${moon} has ${days} days`);