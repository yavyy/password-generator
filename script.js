const generateBtn = document.getElementById("generate-btn");
const inputEl = document.getElementById("input-el");
const rangeInput = document.querySelector("input[type='range']")
const copyBtn = document.querySelector(".fa-copy")
const notificationBox = document.querySelector(".notification")
const rangeValueBox = document.getElementById("range-value")

rangeValueBox.textContent = rangeInput.value

rangeInput.addEventListener("input", function() {
  rangeValueBox.textContent = rangeInput.value;
})

copyBtn.addEventListener('click', function () {
  if(!inputEl.value) return;

  copyPassword();
  notificationBox.classList.remove('active');

  setTimeout(() => {
    notificationBox.classList.add('active');
  }, 2000)
});

generateBtn.addEventListener('click', generatePassword)

function generatePassword() {
  const values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~@#$%^&*-_=+.";
  let password = "";
  for (let i = 0; i < rangeInput.value; i++) {
    const randomNumber = Math.floor(Math.random() * values.length);
    // password += values.substring(randomNumber, randomNumber + 1);
    password += values[randomNumber];
  }
  inputEl.value = password
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 999);
  navigator.clipboard.writeText(inputEl.value)
}
