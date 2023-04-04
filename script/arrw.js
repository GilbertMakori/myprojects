let lastScrollPosition = window.scrollY;
    let scrollTimeoutId = null;
    let scrollIndicatorVisible = false;
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const body = document.querySelector('body');

    const toggleScrollIndicatorVisibility = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        if (!scrollIndicatorVisible && currentScrollPosition !== 0) {
          scrollIndicator.classList.add('visible');
          scrollIndicatorVisible = true;
          body.style.marginBottom = '25px';
        }
      } else {
        // Scrolling up
        if (scrollIndicatorVisible || currentScrollPosition === 0) {
          scrollIndicator.classList.remove('visible');
          scrollIndicatorVisible = false;
          body.style.marginBottom = '0';
        }
      }
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeoutId);
      scrollTimeoutId = setTimeout(toggleScrollIndicatorVisibility, 250);
    });

    window.addEventListener('load', () => {
      toggleScrollIndicatorVisibility();
    });


let to_top = document.querySelector(".arrow");
to_top.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

