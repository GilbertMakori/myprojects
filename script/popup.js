const messageBox = document.querySelector('.message-box');
const message = document.querySelector('.message');
const messages = [
  'Free Hosting plan',
  'Get Your Website Up and Running at Affordable Prices',
  'Modern Responsive website and Domain',
  'Done in a Matter of hours'
];


let messageIndex = 0;

function displayMessage() {
  message.textContent = messages[messageIndex];
  messageBox.style.display = 'block';
  messageIndex++;
  if (messageIndex >= messages.length) {
    messageIndex = 0;
  }
}

setInterval(displayMessage, 4000);