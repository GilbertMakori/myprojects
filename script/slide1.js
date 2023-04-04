var images = [
    // "image/image1.png",
    // "image/image2.png",
    "image/image3.png",
    "image/image4.png"
];

var index = 0;
var intervalId;
var moveLeft = true;

function startSlideshow() {
    var img = document.getElementById("slideshow-image");
    img.src = images[index];
    intervalId = setInterval(function() {
        index = (index + 1) % images.length;
        if (moveLeft) {
            img.style.transform = "translateX(-100%)";
        } else {
            img.style.transform = "translateX(100%)";
        }
        moveLeft = !moveLeft;
        setTimeout(function() {
            img.src = images[index];
            img.style.transform = "translateX(0%)";
        }, 1000);
    }, 7000);
}



startSlideshow();