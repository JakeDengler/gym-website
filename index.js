
const container = document.querySelector(".contactContainer");
const signUpBtn = document.querySelector(".greenBackground button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});