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

  