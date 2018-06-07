// bind to html elements
const espresso = document.getElementById("espresso");
const milk = document.getElementById("milk");
const sugar = document.getElementById("sugar");
let clickNum = 0
// generic handler
const clicked = function(event) {
  if (event.target === event.currentTarget) {
    console.log(`Clicked ${this.id}`);
    clickNum++
  } else {
    console.log('Nothing to do')
    console.log(`Event target is ${event.target.id} and current node is ${event.currentTarget.id}`)
  }
};

// event listeners
espresso.addEventListener("click", clicked);
milk.addEventListener("click", clicked);
sugar.addEventListener("click", clicked);
//document.body.addEventListener('click',function() {console.log(clickNum)})
