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

  $(".cd-nav-trigger").click(function () {
    $(".header-mobile-navigation-list").toggle().toggleClass("active");
    $(".burgerMenu").toggle().toggleClass("active");
    $(".closeMenu").toggle().toggleClass("active");
    $("body").toggleClass("header-menuActive");
  });
  /**
   * Menu
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

  function init() {
    cacheSelectors();
    $(selectors.siteNavHasDropdown).on("mouseenter", function () {
      var $el = $(this);
      showDropdown($el);
    });
    $(".site-nav__dropdown").on("mouseenter", function () {
      $(this).show();
      $(this).parent().addClass(config.activeClass);
    });
    $(selectors.siteNavHasDropdown).on("mouseleave", function () {
      hideDropdown(cache.$activeDropdown);
    });
    $(".site-nav__dropdown").on("mouseleave", function () {
      hideDropdown(cache.$activeDropdown);
      $(this).hide();
    });
    cache.$subMenuLinks.on("click.siteNav", function (evt) {
      // Prevent click on body from firing instead of link
      evt.stopImmediatePropagation();
    });
  }
  function showDropdown($el) {
    $el.addClass(config.activeClass);
    var headerHeight = $("#shopify-section-header").outerHeight(),
      headerNav = $el.find(".site-nav__dropdown").outerHeight();
    $el.find(".site-nav__dropdown").css({ top: +headerHeight + "px" });
    cache.$activeDropdown = $el;
  }
  function hideDropdown($el) {
    // remove aria on open dropdown
    $el.removeClass(config.activeClass);
    // reset active dropdown
    cache.$activeDropdown = $(selectors.siteNavActiveDropdown);
    $(selectors.body).off("click.siteNav");
    $(window).off("keyup.siteNav");
  }

  /**
   * Home page owl slider
   */
  jQuery(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    center: true,
    items: 1,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    smartSpeed: 550,
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
  $(".prpdocutSlider").slick();

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
