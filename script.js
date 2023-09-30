// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll and check if elements are in the viewport
function handleScroll() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains('in-viewport')) {
            // Add the 'in-viewport' class only if it doesn't have it already
            element.classList.add('in-viewport');
        }
    });
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScroll);

