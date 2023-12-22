console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting(Time) {
  if (Time >= 6 && Time <= 12) {
    return "Hey, Good Morning!";
  } else if (Time >= 13 && Time <= 18) {
    return "Good Afternoon";
  } else if (Time >= 19 && Time <= 22) {
    return "Good Evening";
  } else {
    return "Sleep well";
  }
}

function getDayColor(day) {
  if ((day = 1)) {
    return "darkgrey";
  } else if (day === 2 || day === 3 || day === 4 || day === 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting(new Date().getHours());
document.body.style.backgroundColor = getDayColor();
