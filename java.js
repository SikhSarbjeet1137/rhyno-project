// JavaScript for changing the headline text
const words = ["Elegance", "Minimalism", "Comfort"];
let index = 0;
const changingWord = document.getElementById("changing-word");

function changeWord() {
    changingWord.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeWord, 3000); // Change every 3 seconds
// JavaScript for rotating USP carousel
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNextItem() {
    carouselItems[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add("active");
}

setInterval(showNextItem, 4000); // Change every 5 seconds