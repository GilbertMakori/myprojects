var cookieBanner = document.getElementById('cookie-banner');
var acceptButton = document.getElementById('accept-cookies');
var rejectButton = document.getElementById('reject-cookies');

function hideBanner() {
  cookieBanner.classList.add('hidden');
  setTimeout(function() {
    cookieBanner.remove();
  }, 500);
}

function setCookie() {
  document.cookie = 'my_cookie=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}

acceptButton.addEventListener('click', function() {
  setCookie();
  hideBanner();
});

rejectButton.addEventListener('click', function() {
  hideBanner();
});