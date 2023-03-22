const btn = document.querySelector('#submitbtn');
let thanks = document.querySelector('#thanks');
const yourRating = document.querySelector('#selected');  
const radioButtons = document.querySelectorAll('input[name="rating"]');
btn.addEventListener("click", () => {
  thanks.classList.add('show');

  let selectedRating;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRating = radioButton.value;
      break;
    }
  }
  yourRating.innerText = `You selected ${selectedRating} out of 5`;
});