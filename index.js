const container = document.querySelector(".contactcontainer");
const signUpBtn = document.querySelector(".logoBackground button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});