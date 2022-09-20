(function ($) {
  console.log("functions");

  $(function () {
    console.log("document ready");
    //document.ready
    //DOM READY code here
    $(".header-search, .input__close-icon").click(function () {
      $(".header-search-area-wrapper").toggle().toggleClass("active");
    });
  });

  jQuery(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    items: 1,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    smartSpeed: 550,
  });

  // active/current tab function
  var pages = document.getElementsByClassName("page");
  var tabs = document.getElementsByClassName("tab");

  for (j = 0; j < tabs.length; j++) {
    // attach event listener to all tabs
    tabs[j].addEventListener("click", clickTab);
  }

  // event listener function
  function clickTab(e) {
    var tabID = e.currentTarget.id;
    var pageID = tabID.replace("titem_", "pitem_");

    for (i = 0; i < pages.length; i++) {
      // deactivate all tabs
      tabs[i].classList.remove("active");
      // hide all pages
      pages[i].classList.remove("active");
    }

    // activate current tab
    e.currentTarget.classList.add("active");

    // show current page
    var currentPage = document.querySelector("#" + pageID);
    currentPage.classList.add("active");
  }

  //Functions, Plugins, Etc.. Here
  //(does not wait for DOM READY STATE)
})(jQuery);
