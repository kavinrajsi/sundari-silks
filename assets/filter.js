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

Shopify.queryParams = {};

// Preserve existing query parameters
if (location.search.length) {
  var params = location.search.substr(1).split("&");

  for (var i = 0; i < params.length; i++) {
    var keyValue = params[i].split("=");

    if (keyValue.length) {
      Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(
        keyValue[1]
      );
    }
  }
}

// Update sort_by query parameter on select change
document.querySelector("#sort-by").addEventListener("change", function (e) {
  var value = e.target.value;

  Shopify.queryParams.sort_by = value;
  location.search = new URLSearchParams(Shopify.queryParams).toString();
});

$("#filterButton, #filterClose").click(function () {
  $(".meFilter").toggle();
  $(".meFilter").toggleClass("is-visible");
  $("body").toggleClass("hidden");
});
