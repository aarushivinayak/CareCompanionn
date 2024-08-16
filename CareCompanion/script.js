document.addEventListener("DOMContentLoaded", function() {
    // Find all links
    const links = document.querySelectorAll('a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Add class to body to trigger transition
            document.body.classList.add('transitioning');

            // After a short delay, navigate to the link's href
            setTimeout(() => {
                window.location.href = link.href;
            }, 1000); // Adjust the delay as needed to match the transition duration
        });
    });
});
