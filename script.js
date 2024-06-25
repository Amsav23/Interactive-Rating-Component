/* Create references to elements that I will use */
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const ratingButtons = document.querySelectorAll(".rating-btn");
console.log(ratingButtons)
const submitButton = document.getElementById("submit-btn");
const ratingValueSpan = document.getElementById("rating-value");
let selectedRating = "";

submitButton.addEventListener("click", () => {
    console.log("submit")
    if (selectedRating !="") {
            // I want to show the thank-you-state div
            // That means REMOVE the hidden class
            thankYouState.classList.toggle("hidden")
            // I need the rating-state div to be hidden
            ratingState.classList.add("hidden")
}
})

ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("click")
        // save the button text
        selectedRating = button.textContent;
        console.log(selectedRating)
    })
})
//
/*
document.addEventListener("DOMContentLoaded", () => {
    console.log("page loaded")
    const ratingState = document.getElementById("rating-state");
    const thankYouState = document.getElementById("thank-you-state");
    const ratingButtons = document.querySelectorAll(".rating-btn");
    const submitButton = document.getElementById("submit-btn");
    const ratingValueSpan = document.getElementById("rating-value");
  
    let selectedRating;
  
    ratingButtons.forEach(button => {
      button.addEventListener("click", () => {
        ratingButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedRating = button.textContent;
      });
    });
  
    submitButton.addEventListener("click", () => {
      if (selectedRating) {
        ratingState.classList.add("hidden");
        thankYouState.classList.remove("hidden");
        ratingValueSpan.textContent = selectedRating;
      } else {
        alert("Please select a rating before submitting.");
      }
    });
  });
*/  