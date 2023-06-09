let slideIdx = 1;
let autoplay;


function showSlides(num){
    slideIdx = num
    let slides = document.getElementsByClassName('slide');

    if(slideIdx < 1){
        slideIdx = slides.length;
    }else if(slideIdx> slides.length){
        slideIdx = 1;
    }
    for(let i = 0; i<slides.length ;i++){
        slides[i].className = slides[i].className.replace(" show","");    
    }
    slides[slideIdx-1].className = slides[slideIdx -1].className + ' show';

    setAutoplay();

}   

function changeSlide(ctrl){
    showSlides(slideIdx + ctrl)
}

function setautoplay(){
    if(autoplay != undefined){
        clearInterval(autoplay)
    }
}
    setInterval(function(){
        changeSlide(1)
    },2500);

window.onload = function(){
    showSlides(1);
}
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
