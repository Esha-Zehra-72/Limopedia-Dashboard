// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// nav3 Buttons

var button = document.getElementsByTagName("button")
function clickedBtn(button) {
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

// Contact Information Tab 
document.querySelectorAll('.company-parent-tabs').forEach((tabs) => {
    tabs.addEventListener('click', function () {
        document.querySelectorAll('.company-parent-tabs').forEach((t) => {
            t.classList.remove('active')
        })
        this.classList.add('active')
    })
})


const imgPreviewContainer = document.getElementById('img-preview-container');
const deleteLogo = document.getElementById('dlt-logo');

// Function to toggle border and delete link
function borderShows() {
    const image = document.getElementById('imagePreview');
    if (image.style.display === 'block') {
        imgPreviewContainer.style.border = '2px solid black';
        deleteLogo.style.display = 'block';  // Show delete link
    } else {
        imgPreviewContainer.style.border = 'none';
        deleteLogo.style.display = 'none';   // Hide delete link
    }
}

// Preview Image Function
function showImagePreview(event) {
    const image = document.getElementById('imagePreview');
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
            image.style.display = 'block';  // Show the image
            borderShows(); // Update border and delete link visibility
        }
        reader.readAsDataURL(file);  // Convert file to base64 string
    } else {
        deleteImage(); // Clear preview if no file is selected
    }
}

// Delete Image Function
function deleteImage() {
    const image = document.getElementById('imagePreview');
    image.src = "#";
    image.style.display = 'none';  // Hide the image
    borderShows(); // Hide border and delete option
}