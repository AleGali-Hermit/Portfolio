document.addEventListener("DOMContentLoaded", () => {
  const carosello = document.querySelector(".carosello");
  const immagini = carosello.querySelectorAll("img");
  let indiceCorrente = 0;

  carosello.addEventListener("click", () => {
    immagini[indiceCorrente].classList.remove("active");
    indiceCorrente = (indiceCorrente + 1) % immagini.length;
    immagini[indiceCorrente].classList.add("active");
  });
});

//const Bottone1 = document.querySelector(".PrimoBottone");
