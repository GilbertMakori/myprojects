const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      boxes.forEach(box => {
        if (box === entry.target) {
          box.classList.add('active');
        } else {
          box.classList.remove('active');
        }
      });
    }
  });
}, options);

boxes.forEach(box => {
  observer.observe(box);
});

