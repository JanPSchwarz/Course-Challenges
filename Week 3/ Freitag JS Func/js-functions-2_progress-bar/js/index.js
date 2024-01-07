// console.clear();

/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

// Mit Schreibweise Funktion:

// function calculateScrollPercentage(positionY, dokumentLänge, windowGröße) {
//   let position = (positionY / (dokumentLänge - windowGröße)) * 100;
//   return position;
// }

// document.addEventListener("scroll", () => {
//   progressBar.style.width =
//     calculateScrollPercentage(
//       window.scrollY,
//       document.body.clientHeight,
//       window.innerHeight
//     ) + "%";
//     })

// Mit Schreibweise Arrow-Function:

const calculateScrollBar = (positionY, dokumentLänge, windowGröße) => (positionY / (dokumentLänge - windowGröße)) * 100;

document.addEventListener("scroll", () => {
  progressBar.style.width =
    calculateScrollBar(
      window.scrollY,
      document.body.clientHeight,
      window.innerHeight
    ) + "%";
})

// console.log(
//   calculateScrollPercentage(window.scrollY, document.body.clientHeight)
// );


//   console.log(calculateScrollPercentage(window.scrollY, document.body.clientHeight, window.innerHeight))
// });

// const position = window.scrollY;
// const windowHeight = window.innerHeight;
// const documentHeight = document.body.clientHeight;

// console.log("PoisitonY: " + position);
// console.log("window height: " + windowHeight);
// console.log("document height:" + documentHeight);
