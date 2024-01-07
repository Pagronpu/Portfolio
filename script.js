document.addEventListener("DOMContentLoaded", function() {
    // Get the toolbar element
    var toolbar = document.getElementById("fixed-toolbar");

    // Get the offset position of the toolbar
    var offsetTop = toolbar.offsetTop + 100;

    // Add a scroll event listener
    window.addEventListener("scroll", function() {
        // Add the 'fixed' class when the user scrolls past the offset
        if (window.scrollY >= offsetTop) {
            toolbar.classList.add("fixed");
        } else {
            // Remove the 'fixed' class when scrolling back up
            toolbar.classList.remove("fixed");
        }
    });
});


// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
        }
    });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Target the specific element to be observed
    const animatedDiv = document.querySelector('.grid > div');

    // Start observing the target element
    if (animatedDiv) {
    observer.observe(animatedDiv);
    }
  