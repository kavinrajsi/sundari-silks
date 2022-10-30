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
      $(".header-mobile-navigation-list").hide().removeClass("active");
      $(".closeMenu").hide().removeClass("active");
      $(".burgerMenu").show().addClass("active");
      $("body").toggleClass("header-seachActive");
    });
  });

  $(document).on("click", ".ad_to_cart", function (e) {
    var ID = $(this).find(".ad_to_cart_id").attr("var_id");
    $.ajax({
      type: "POST",
      url: "/cart/add.js",
      data: {
        quantity: 1,
        id: $(this).find(".ad_to_cart_id").attr("var_id"),
      },
      dataType: "json",
      success: function (data) {
        $("#CartCount span:first").text(data.quantity);
        console.log(data.quantity);
      },
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

  $(".menu-level-1-item.menu-level-1-item-child").on("mouseenter", function () {
    console.log("enter");
    $("body").addClass("header-menuActive");
    $("body").css("padding-right","15px");
    $(this).children(".second-menu").addClass("active");
    // $(this).children('.menu-level-2').addClass("active");
  });
  $(".menu-level-1-item").on("mouseleave", function () {
    console.log("leave");
    $("body").removeClass("header-menuActive");
    $("body").css("padding-right","0");
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


  // scroll
  // Scroll to specific values
  // scrollTo is the same
  window.scroll({
    top: 2500,
    left: 0,
    behavior: "smooth",
  });

  // Scroll certain amounts from current position
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: "smooth",
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Modal for product detail page
  // Quick & dirty toggle to demonstrate modal toggle behavior
  $(".modal-toggle").on("click", function (e) {
    e.preventDefault();
    $(".modal").toggleClass("is-visible");
    $("body").toggleClass("modalScroll");
  });

  $(".modal-size-toggle").on("click", function (e) {
    e.preventDefault();
    $(".modal-size").toggleClass("is-visible");
    $("body").toggleClass("modalScroll");
  });

  //Functions, Plugins, Etc.. Here
  //(does not wait for DOM READY STATE)
})(jQuery);

if (document.getElementById("recover") != null) {
  document.getElementById("recover").addEventListener("click", function (e) {
    console.log("recover password");
    document
      .getElementById("recover-form")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("login-froms")
      .classList.replace("d-block", "d-none");
  });
}

if (document.getElementById("login") != null) {
  document.getElementById("login").addEventListener("click", function (e) {
    console.log("login action");
    document
      .getElementById("login-froms")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("recover-form")
      .classList.replace("d-block", "d-none");
  });
}

$(window).scroll(function () {
  var sticky = $("#wrap"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});
