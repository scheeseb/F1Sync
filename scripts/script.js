let pageTitle = document.querySelector("head > title");
let titleString = pageTitle.innerHTML;
let titleIsQualifying = titleString.includes("Qualifying");
let titleIsHighlights = titleString.includes("Highlights");

console.log(pageTitle)
console.log(titleString)
console.log(titleIsQualifying)
console.log(titleIsHighlights)

function clickForward() {};
function clickBackward() {}