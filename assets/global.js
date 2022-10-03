(function ($) {
  console.log("functions");

  $(function () {
    console.log("document ready");
    //document.ready
    //DOM READY code here

    /**
     *  Header bar search
     */
    $(".header-search, .input__close-icon").click(function () {
      $(".header-search-area-wrapper").toggle().toggleClass("active");
      $("body").toggleClass("header-seachActive");
    });
  });

  /**
   * Burger menu trigger
   */
  $(".cd-nav-trigger").click(function () {
    $(".header-mobile-navigation-list").toggle().toggleClass("active");
    $(".burgerMenu").toggle().toggleClass("active");
    $(".closeMenu").toggle().toggleClass("active");
    $("body").toggleClass("header-menuActive");
  });

  /**
   * Desktop and mobile menu active
   */

  $(".menu-level-1-item").on("mouseenter", function () {
    console.log("enter");
    $(this).children(".second-menu").addClass("active");
    // $(this).children('.menu-level-2').addClass("active");
  });
  $(".menu-level-1-item").on("mouseleave", function () {
    console.log("leave");
    $(this).children(".second-menu").removeClass("active");
    // $(this).children('.menu-level-2').removeClass("active");
  });

  /* .cd-primary-nav .has-children */

  $(".cd-primary-nav .has-children").on("mouseenter", function () {
    console.log("enter");
    $(this).children(".cd-secondary-nav").addClass("active");
  });
  $(".cd-primary-nav .has-children").on("mouseleave", function () {
    console.log("leave");
    $(this).children(".cd-secondary-nav").removeClass("active");
  });


  /**
   * Home page owl slider
   */
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
    smartSpeed: 200,
  });

  /**
   * Home page tab section
   */

  var tabs = document.getElementsByClassName("tab");
  var pages = document.getElementsByClassName("justdropped-box");

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

  /**
   * Product hover slider
   */
  $(".prpdocutSlider").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });

  function slickPause() {
    $(".prpdocutSlider").slick("slickPause");
  }

  slickPause();

  $(".prpdocutSlider").mouseover(function () {
    $(this).slick("slickPlay");
  });
  $(".prpdocutSlider").mouseout(function () {
    slickPause();
  });



  //Functions, Plugins, Etc.. Here
  //(does not wait for DOM READY STATE)
})(jQuery);

