function debounce(func, wait, immediate) {
  let timeout;
  return function() {
      const context = this,
          args = arguments;
      const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
}

const slideElements = document.querySelectorAll('.slide-in');

function checkSlide() {
  slideElements.forEach(slideElement => {
      const slideInAt = (window.scrollY + window.innerHeight) - slideElement.getBoundingClientRect().height / 2;
      const elementBottom = slideElement.offsetTop + slideElement.getBoundingClientRect().height;
      const isHalfShown = slideInAt > slideElement.offsetTop;
      const isNotScrolledPast = window.scrollY < elementBottom;
      var message = "Hello, world!";
      console.log(message);
      if (isHalfShown && isNotScrolledPast) {
          slideElement.classList.add('active');
      } else {
          slideElement.classList.remove('active');
      }
  });
}

console.log("Entering checkSlide function");
window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('resize', debounce(checkSlide)); // Add this line to handle resize events
console.log("Entering checkSlide function 2");
checkSlide(); // Initial check for elements in view on page load




  