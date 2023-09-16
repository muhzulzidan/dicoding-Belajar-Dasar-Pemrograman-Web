// Contoh: Membuat dropdown
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function toggleDropdown() {
  const dropdown = document.getElementById("activityDropdown");
  dropdown.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        "https://source.unsplash.com/random/?architecture",
        "https://source.unsplash.com/random/?resort",
        "https://source.unsplash.com/random/?house"
    ];
    let currentImageIndex = 0;
    const heroImage = document.querySelector(".hero img");

    document.querySelector(".prev-btn").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
        heroImage.src = imageUrls[currentImageIndex];
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        heroImage.src = imageUrls[currentImageIndex];
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const resortCarousel = document.getElementById("resort-carousel");
    const resort = document.querySelector(".resort");
    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");

    nextButton.addEventListener("click", () => {
        const resortWidth = resort.clientWidth;
        resortCarousel.scrollLeft += resortWidth;
    });

    prevButton.addEventListener("click", () => {
        const resortWidth = resort.clientWidth;
        resortCarousel.scrollLeft -= resortWidth;
    });
});

// Add this to your existing JavaScript or create a new script.js file
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("header nav nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

