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
        reader.onload = function (e) {
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


// Payment Gateway with edit and delete functionality

// Edit row
document.addEventListener("DOMContentLoaded", () => {
    let currentRow;
    document.querySelectorAll(".edit-link").forEach(link => {
        link.addEventListener('click', function () {
            currentRow = this.closest("tr")

            const gatewayName = currentRow.querySelector('td:nth-child(1)').textContent.trim()
            console.log(gatewayName)
            document.querySelector("#gatewayName").value = gatewayName
        })
    })

    // data redirect to row after update
    document.querySelector("#editGatewayForm").addEventListener('submit', function (e) {
        e.preventDefault()
        const updatedGatewayName = document.querySelector("#gatewayName").value

        if (currentRow) {
            currentRow.querySelector('td:nth-child(1)').textContent = updatedGatewayName
        }

        const editModel = document.querySelector('#editGatewayModal')
        const modal = bootstrap.Modal.getInstance(editModel)
        modal.hide()
    })
})


// Delete Row
document.querySelectorAll('.delete-link').forEach(link => {
    link.addEventListener('click', function () {
        const row = this.closest('tr')
        row.remove()
    })
})

// Bold Text
const boldText = document.querySelector('#bold-text')
boldText.addEventListener('click', function () {
    const selection = document.getSelection()

    if (selection.rangeCount > 0) {

        const range = selection.getRangeAt(0)
        const selectedText = range.toString()

        if (selectedText) {
            const parentElement = range.startContainer.parentElement
            if (parentElement && parentElement.tagName === 'STRONG') {
                parentElement.replaceWith(...parentElement.childNodes)
                console.log("Remove Bold ");
            } else {
                const bold = document.createElement("strong")
                bold.textContent = selectedText
                console.log("bold");
                range.deleteContents()
                range.insertNode(bold)
            }
        }
    } else {
        console.log("Please Select Text to Bold");

    }


})


// Italic Text
const italicText = document.querySelector("#italicText")
italicText.addEventListener('click', function () {
    const selection = document.getSelection()
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const selectedText = range.toString()
        console.log(selectedText);

        if (selectedText) {
            const parentElement = range.startContainer.parentElement
            console.log(parentElement);

            if (parentElement && parentElement.tagName === 'I') {
                parentElement.replaceWith(...parentElement.childNodes)
                console.log("Remove Italic")
            } else {
                const italic = document.createElement("i")
                italic.textContent = selectedText
                range.deleteContents()
                range.insertNode(italic)
            }

        }

    } else {
        console.log("Select text to italic.");

    }
})



// underline Text
const underLine = document.querySelector('#underLine')
underLine.addEventListener('click', function () {
    const selection = document.getSelection()
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const selectedText = range.toString()
        if (selectedText) {
            const parentElement = range.startContainer.parentElement
            if (parentElement && parentElement.tagName === 'U') {
                parentElement.replaceWith(...parentElement.childNodes)
                console.log("Remove UnderLine");
            } else {
                const textUnderLine = document.createElement('u')
                textUnderLine.textContent = selectedText
                range.deleteContents()
                range.insertNode(textUnderLine)
                console.log("Underline");

            }
        }
    } else {
        console.log('Select text to underline');

    }
})

// colorPicker
const colorPicker = document.querySelector("#color-picker")
const color = document.querySelector("#color")
let selectedColor = ""
color.addEventListener('input', (event) => {
    selectedColor = event.target.value
    console.log(selectedColor);
})
colorPicker.addEventListener('click', function () {
    const selection = document.getSelection()
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const selectedText = range.toString()
        console.log(selectedText);
        if (selectedText) {
            if (selectedText.style === selectedColor) {
                selectedText.style = 'none'
            } else {
                const styleSpan = document.createElement('span')
                styleSpan.style.color = selectedColor
                styleSpan.textContent = selectedText
                range.deleteContents()
                range.insertNode(styleSpan)
            }

        }
    } else {
        console.log('PLease select content to apply color');
    }

})

// Cut Paste 
const cut = document.querySelector("#cut")
let storeText = ''
cut.addEventListener('click', function () {
    const selection = document.getSelection()
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const selectedText = range.toString()
        if (selectedText) {
            storeText = selectedText
            console.log(selectedText)
            range.deleteContents()
        }
    }
})

// Copy
const copy = document.querySelector("#copy")
const paste = document.querySelector("#paste")
const undo = document.querySelector("#undo")
const textContent = document.querySelector(".text-content") 
let copyText = "";
let previousState = ''
function saveSate (){
    previousState = textContent.textContent
}
copy.addEventListener('click', function () {
    const selection = document.getSelection()
    if (selection.rangeCount > 0) {
        saveSate()
        const range = selection.getRangeAt(0)
        const selectedText = range.toString()
        if (selectedText) {
            copyText = selectedText
            console.log(copyText)
            paste.addEventListener('click', function () {
                const pasteText = document.createElement('span')
                pasteText.textContent = copyText
                range.insertNode(pasteText)
            })
        }
    }
})
// Undo Functionality
undo.addEventListener('click', function(){
    if(previousState){
        textContent.innerHTML = previousState
        console.log("Undo action performed.");
    }else {
        console.log("No previous state to restore.");
    }
})