/* Create references to elements that I will use */
// I created `ratingState` and `thankYouState` so that I can hide or show
//   these elements based on user actions
const ratingState = document.getElementById("rating-state-id");
const thankYouState = document.getElementById("thank-you-state");

// `ratingButtons` is a NodeList (similar to an array) of all elements with the class `rating-btn`
const ratingButtons = document.querySelectorAll(".rating-btn");
// The console helps with debugging by showing all the elements that were selected
console.log(ratingButtons)

// This variable will be used to handle what happens when a user clicks the submit button
const submitButton = document.getElementById("submit-btn");

// Used to reference and update a specific HTML element
const ratingValueSpan = document.getElementById("rating-value");

// Used to STORE and UPDATE the selected rating value
let selectedRating = "";


submitButton.addEventListener("click", () => {
    console.log("submit");
    if (selectedRating !="") {
      // I want to SHOW the thank-you-state div
      // That means REMOVE the hidden class
      thankYouState.classList.toggle("hidden");
      // I need the rating-state div to be hidden (add the hidden class)
      ratingState.classList.add("hidden");
      // I want to create an alert message if a user submits without selecting a number
    } else {
      alert("Please select a rating before submitting.");
    }
});

ratingButtons.forEach(button => {
    button.addEventListener("click", () => {
      console.log("click");
      // This SAVES the TEXT CONTENT of the clicked BUTTON to the `selectedRating` variable
      selectedRating = button.textContent;
      console.log("option", selectedRating);

      // I want to submit the number rating when I click options 1-5
      // I need to use the `selectedRating` variable I created
      // This sets the TEXT CONTENT of the `ratingValueSpan` element to the value
      //    stored in `selectedRating`
      // These two variables work together to capture user input (selected rating)
      //    and display it in the HTML.
      // This updates the span text content with the selected rating
      ratingValueSpan.textContent = selectedRating;
      console.log("You've selected", selectedRating);
    });
});


// QUESTIONS I thought of:
// Wondering what the difference is between using `selectedRating` vs `ratingValueSpan`??
// Answer: `selectedRating` is a VARIABLE that temporarily holds the text content of the clicked button.
        // `ratingValueSpan.textContent` is an ASSIGNMENT that sets the text content of the 
        // `ratingValueSpan` HTML element to the VALUE of `selectedRating`.

// Wondering if the placement matters, here in `ratingButtons` or in the `submitButton` function??
// Answer: If you plan to submit the rating immediately after a button is clicked, 
        // the current placement inside the click event listener is appropriate.

// Do I need to keep `selectedRating = button.textContent;` or is it redundant since I have 
        // `ratingValueSpan.textContent = selectedRating;`??
// Answer: `selectedRating`: Acts as a temporary storage for the selected rating value. 
        // It is necessary to STORE THIS VALUE to USE IT in different parts of your script.
        // `ratingValueSpan.textContent`: DISPLAYS the stored rating value in the HTML.
// "Without `selectedRating`":
        // If you remove `selectedRating = button.textContent;`, YOU WON'T HAVE A VARIABLE 
        // holding the selected rating value, and you'll only be able to update the HTML element directly. 
        // This LIMITS YOUR ABILITY to use the selected rating value for other purposes in your script. 






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