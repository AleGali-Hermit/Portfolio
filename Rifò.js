document.querySelectorAll(".carousel").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".carousel__slide");
  const dots = carousel.querySelectorAll(".carousel__dot");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const selectedSlide = slides[index];
      if (!selectedSlide) return;

      slides.forEach((slide) => slide.classList.remove("is-active"));
      dots.forEach((navDot) => {
        navDot.classList.remove("is-active");
        navDot.removeAttribute("aria-current");
      });

      selectedSlide.classList.add("is-active");
      dot.classList.add("is-active");
      dot.setAttribute("aria-current", "true");
    });
  });
});