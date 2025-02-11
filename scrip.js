let slideIndex = 0;
const slides = document.querySelectorAll(".header-img");
const totalSlides = slides.length;
const prevButton = document.querySelector(".control_prev");
const nextButton = document.querySelector(".control_next");

// Function to show slides
function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
}

// Auto-slide function
function autoSlide() {
    showSlide(slideIndex + 1);
}

// Event listeners for buttons
prevButton.addEventListener("click", () => showSlide(slideIndex - 1));
nextButton.addEventListener("click", () => showSlide(slideIndex + 1));

// Initialize the slideshow
showSlide(slideIndex);

// Auto-slide every 3 seconds
setInterval(autoSlide, 3000);

