const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach((item) => {
    item.style.visibility = "hidden";
    item.style.display = "none";
    item.style.transition = "display linear 2s 2s";
  });
  // Show the slide at the specified index
  carouselItems[index].style.visibility = "visible";
  carouselItems[index].style.display = "block";
  carouselItems[index].style.transition = "display linear 2s 2s";
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}
function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}
// Show the first slide initially
showSlide(currentIndex);
// Set up event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);
