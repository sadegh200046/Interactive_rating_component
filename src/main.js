const scoreContainer = document.querySelector(".rating-score");
const scoreNumbers = document.querySelectorAll(".rating-score-number");
const ratingBtn = document.querySelector(".rating-button");
const ratingContainer = document.querySelector(".rating");
const thankyouConatiner = document.querySelector(".thankyou");
const thankyouScore = document.querySelector(".thankyou-rating_score");
let score;

scoreContainer.addEventListener("click", function (e) {
  const scoreEl = e.target.closest(".rating-score-number");
  if (!scoreEl) return;
  score = +scoreEl.dataset.score;
  scoreNumbers.forEach((scr) =>
    scr.classList.remove("rating-score-number-active")
  );
  scoreEl.classList.add("rating-score-number-active");
});
ratingBtn.addEventListener("click", function (e) {
  if (!score) return;
  ratingContainer.classList.add("hidden");
  thankyouConatiner.classList.remove("hidden");
  thankyouScore.textContent = `${score}`;
});
