// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    var filterWrapper = $(".filter--content").height();
    // var filterContent = $('.filter--content').height();
    console.log(filterWrapper);
    $(".filter-group-display").css("max-height", filterWrapper);

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
