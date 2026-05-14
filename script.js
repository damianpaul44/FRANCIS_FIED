
// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


// PAGE LOADER
window.addEventListener('load', () => {

const loader = document.querySelector('.loader');

setTimeout(() => {
loader.style.display = 'none';
}, 2000);

});


// SCROLL ANIMATION
const cards = document.querySelectorAll('.fashion-card');

window.addEventListener('scroll', () => {

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){
card.style.opacity = '1';
card.style.transform = 'translateY(0px)';
}

});



});
let count = 1;
let target = 10;

let counter = document.getElementById("counter");

let speed = setInterval(() => {

counter.innerHTML = count;

count++;

if(count > target){
clearInterval(speed);
}

}, 100);

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 300px from the top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This makes the scroll nice and fluid
  });
}


document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;

    // Close other open items (Optional)
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) item.classList.remove('active');
    });

    // Toggle the clicked item
    faqItem.classList.toggle('active');
  });
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});