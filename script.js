console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector ("#helloButton")
console.log(button)

// Select the empty p tag under that button
let tag = 
  document.querySelector("#helloText")
console.log(tag)

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click", function(event){
  tag.textContent = "Hello"
})


// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let capsButton = document.querySelector("#capsButton");
console.log(capsButton)


// Select the p tag under that button (says there's no need to shout)

let pTag = document.querySelector("#capsText");
console.log(capsText);

// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"

capsButton.addEventListener("click", function(event){
  capsText.textContent = "THERE'S NO NEED TO SHOUT";
})

// Task 3: Dog image flow
// Select the dog image

let dogImage = document.querySelector(".dogImage");
console.log(dogImage);

// Add an event listener to the dog image such that when it is clicked, the image src becomes happy-dog.jpeg

dogImage.addEventListener("click", function(event){
  dogImage.src = "happy-dog.jpeg";
});





