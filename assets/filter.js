// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

$("#filterButton, #filterClose").click(function () {
  $(".meFilter").toggle();
  $(".meFilter").toggleClass("is-visible");
  $("body").toggleClass("hidden");
});
