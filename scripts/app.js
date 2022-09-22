document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("links");
  const banner = document.getElementById("mega-bta");
  //   You can get different selectors (class, id, tags...)

  // Global open/close functions
  const open = () => {
    button.classList.add("open-button");
    banner.classList.add("mega-toggle");
  };

  const close = () => {
    button.classList.remove("open-button");
    banner.classList.remove("mega-toggle");
  };

  // Check click on button
  button.addEventListener("mousedown", () => {
    if (!button.classList.contains("open-button")) {
      open();
    } else {
      close();
    }
  });

  // Close when user click outside
  document.body.addEventListener("mousedown", (e) => {
    let isClickInsideButton = button.contains(e.target);
    let isClickInsideBanner = banner.contains(e.target);

    if (!isClickInsideButton && !isClickInsideBanner) {
      close();
    }
  });
});
