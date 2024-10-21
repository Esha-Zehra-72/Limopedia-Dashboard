// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// nav3 Buttons

var button = document.getElementsByTagName("button")
function clickedBtn(button){
button.style.backgroundColor = "red"
}


// Swiper Js
let swiperInstance = null;

function initSwiper() {
    // If the screen is 800px or less, initialize Swiper
    if (window.innerWidth <= 800) {
        swiperInstance = new Swiper('.swiper', {
            loop: true,
            grabCursor: true,
            spaceBetween: 2,
            slidesPerView: 5,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

function destroySwiper() {
    // If a swiper instance exists, destroy it
    if (swiperInstance !== null) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }
}

function handleResize() {
    if (window.innerWidth <= 800) {
        if (!swiperInstance) {
            initSwiper();
        }
    } else {
        destroySwiper(); // Destroy Swiper on larger screens
    }
}

// Initialize or destroy swiper on load
window.addEventListener('load', handleResize);

// Add resize event listener to dynamically handle screen size changes
window.addEventListener('resize', handleResize);

// Side bar 
function clickedBtn(btn) {
    console.log("Button clicked:", btn.innerText);
}
// Inter Lin

const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
    initialCountry: "us",  // Default country
    preferredCountries: ["us", "gb", "pk"],  // Preferred countries
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
});

// Hide country names and keep only the flags and dial codes
document.querySelectorAll('.iti__country-list .iti__country').forEach(country => {
    const countryName = country.querySelector('.iti__country-name');
    if (countryName) {
        countryName.style.display = 'none';  // Hide the country name
    }
});