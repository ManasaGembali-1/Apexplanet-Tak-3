const carouselImages = ["eye.jpg", "fish.jpg", "girl.jpg"];
let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  carouselImage.src = carouselImages[currentIndex];
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImage.src = carouselImages[currentIndex];
});

document.getElementById("get-joke").addEventListener("click", async () => {
  const setupEl = document.getElementById("joke-setup");
  const punchlineEl = document.getElementById("joke-punchline");

  setupEl.textContent = "Loading joke...";
  punchlineEl.textContent = "";

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await response.json();
    setupEl.textContent = joke.setup;
    punchlineEl.textContent = joke.punchline;
  } catch (error) {
    setupEl.textContent = "Oops! Couldn't fetch a joke.";
  }
});
