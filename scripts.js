const submitFeedback = document.querySelector(".submit-feedback")
const feedbackForm = document.querySelector(".feedback-form")

const submitFeedbackbtn = document.querySelector("#exp-feedback")


submitFeedback.addEventListener("submit",(e) => {
        e.preventDefault();
        alert("Your Feddback Has Been Recorded")
      feedbackForm.style.display="none"
       
})