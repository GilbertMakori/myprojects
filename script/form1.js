const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (validateEmail(emailInput.value) && messageInput.value !== "") {
    showSuccessMessage();
    form.reset();
    setTimeout(() => {
      location.reload();
    }, 2000);
    
  } else {
    showError();

    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showSuccessMessage() {
  const successMessage = document.createElement("p");
  successMessage.innerText = "Thank you for your message!";
  successMessage.style.color = "green";
  successMessage.style.alignSelf = 'center'
  form.appendChild(successMessage);
}

function showError() {
  const errorMessage = document.createElement("p");
  if (!validateEmail(emailInput.value)) {
    errorMessage.innerText = "Please enter a valid email address.";
    errorMessage.style.alignSelf = 'center';
  } else {
    errorMessage.innerText = "Please enter a message.";
    errorMessage.style.alignSelf = 'center';
  }
  errorMessage.style.color = "red";
  form.appendChild(errorMessage);
}