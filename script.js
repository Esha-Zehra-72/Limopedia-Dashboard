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