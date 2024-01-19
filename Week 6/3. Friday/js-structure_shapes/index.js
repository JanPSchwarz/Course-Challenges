console.clear();

import getRandomColor from "./utils/randomColor.js";
import Circle from "./components/Circle/circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

// From Circle Component

const circleElement = Circle();

// From Square Component

const squareElement = Square();

// From Pentagon Component

const pentagonElement = Pentagon();

//Added to Main

root.append(circleElement, squareElement, pentagonElement);
