let myicon = document.querySelector('.menu_icon');
let myElement = document.querySelector('.nav1_menu');
let move = document.querySelector('.container1');
let menu_icon = document.querySelector('.cross_image')

myicon.addEventListener('click', function() {
    if (myElement.style.display === 'none') {
        myElement.style.display = 'block';
        move.style.marginTop = '400px';
        myicon.style.display = 'none';
        menu_icon.style.display = 'block';



      } else {
        myElement.style.display = 'none';
        move.style.marginTop = '64px';
        myicon.style.display = 'block';
        menu_icon.style.display = 'none';
      }
});

menu_icon.addEventListener('click', function() {
  if (myElement.style.display === 'none') {
      myElement.style.display = 'block';
      move.style.marginTop = '400px';
      myicon.style.display = 'block';
      menu_icon.style.display = 'none';



    } else {
      myElement.style.display = 'none';
      move.style.marginTop = '64px';
      myicon.style.display = 'block';
      menu_icon.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
  if (window.innerWidth <= 768 && !myElement.contains(event.target) && event.target !== myicon) {
     myElement.style.display = 'none';
     move.style.marginTop = '64px';
     myicon.style.display = 'block';
     menu_icon.style.display = 'none';
  } else {
    window.onresize = function() {
      location.reload();
  }; 
  }
});