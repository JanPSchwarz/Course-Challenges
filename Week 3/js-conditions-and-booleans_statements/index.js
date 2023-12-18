console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337" === SUPER_SECRET_PASSWORD;
// const receivedPassword = "falsches passwort" === SUPER_SECRET_PASSWORD;

if (receivedPassword) {
    console.log("Welcome! You are logged in as Brunhilde1984.")
}
else {
    console.log("Acces denied!")
}

// Part 2: Even / Odd
const number = 6;

const newNumer = number % 2 === 0;

if (newNumer) {
    console.log("even Number")
}
else {
    console.log("odd number")
}


// Part 3: Hotdogs
const numberOfHotdogs = 1;

if (numberOfHotdogs < 5) {
    console.log(numberOfHotdogs * 2 + "€");
}
else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    console.log("Preis für die Hotdogs:" + (numberOfHotdogs * 1.5) + "€");
}
else if (numberOfHotdogs >= 100 || numberOfHotdogs === 1000000) {
    console.log(numberOfHotdogs * 1 + "€");
}
else if (numberOfHotdogs > 1000000) {
    console.log(numberOfHotdogs * 0.1 + "€");
}
else {
    console.log("Error");
}


// Part 4: Daytime
const currentHour = 16;

const statement = currentHour <= 17 ? console.log("Still learning") : console.log("Party time");

// Part 5: Greeting
const name = "Feline";

const greeting = name === "Feline" ? console.log("Hello Coach " + name + "!") : console.log("Hello " + name +"!");

// const greeting = name === "Feline" ? "Hello Coach" : "Hello " + name;

// console.log(greeting);