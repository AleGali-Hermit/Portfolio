document.querySelectorAll(".CaroselloRifò").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carosello__Item");
  const buttons = carousel.querySelectorAll(".BottoneCarosello");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const selectedItem = items[index];
      if (!selectedItem) return;

      items.forEach((item) =>
        item.classList.remove("carosello__ItemSSelected")
      );
      buttons.forEach((navButton) =>
        navButton.classList.remove("BottoneCarosello_Selected")
      );

      selectedItem.classList.add("carosello__ItemSSelected");
      button.classList.add("BottoneCarosello_Selected");
    });
  });
});