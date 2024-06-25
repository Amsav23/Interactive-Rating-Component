document.addEventListener("DOMContentLoaded", () => {
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
  