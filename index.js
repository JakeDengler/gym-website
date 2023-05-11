const container = document.querySelector(".contactContainer");
const signUpBtn = document.querySelector(".greenBackground button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

const observer = new IntersectionObserver((enttries)) => {
  entries.forEach((entry)) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('boxsection');
hiddenElements.forEach((el)) => observer.observe((el));