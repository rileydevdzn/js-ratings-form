const btn = document.querySelector('#submit-btn');
let thanks = document.querySelector('#thanks');
const yourRating = document.querySelector('#selected');  
const radioButtons = document.querySelectorAll('input[name="rating"]');

function findChecked() {
  let selectedRating;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRating = radioButton.value;
      break;
    }
  }
  yourRating.innerText = `You selected ${selectedRating} out of 5`;
}

btn.addEventListener("click", () => {
  thanks.classList.add('show');
  findChecked();  
});