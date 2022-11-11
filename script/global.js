(function ($) {
  console.log("functions");
  $(function () {
    console.log("document ready");
    //document.ready
    //DOM READY code here
    let mes = $(".pick_currency.mldesk");
    let mes1 = $(".header-currency-price-list");
    // console.log(mes);
    mes1.html(mes);
    $(".slider.single-item").slick({});

    $("#pitem_1 .test--product-card--grid-four").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        draggable: true,
        centerMode: false,
        variableWidth: false,
        arrows: true,
        infinite: false,
        mobileFirst: true,
        focusOnSelect: true,
        touchMove: true,
        swipeToSlide: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });

    $(".tab-buttton .tab").click(function () {
      console.log(this.id);
      var str = this.id;
      var char = str[0];
      var replaced = str.replace(char, "p");
      console.log(replaced);
      // $('.justdropped-box  .test--product-card--grid-four').not('.slick-initialized').slick({
      //   settings: "unslick"
      // });
      $('#'+replaced + '.justdropped-box .test--product-card--grid-four').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          draggable: true,
          centerMode: false,
          variableWidth: false,
          arrows: true,
          infinite: false,
          mobileFirst: true,
          focusOnSelect: true,
          touchMove: true,
          swipeToSlide: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 300,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
    });

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
    // $("body").addClass("header-menuActive");
    // $("body").css("padding-right", "15px");
    $(this).children(".second-menu").addClass("active");
    // $(this).children('.menu-level-2').addClass("active");
  });
  $(".menu-level-1-item.menu-level-1-item-child").on("mouseleave", function () {
    console.log("leave");
    // $("body").removeClass("header-menuActive");
    // $("body").css("padding-right", "0");
    $(this).children(".second-menu").removeClass("active");
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

  //
  if ($(window).width() > 764) {
    // var fixmeTop = $(".meFitlerMobile").offset().top; // get initial position of the element
    var fixmeTop = 164; // get initial position of the element

    $(window).scroll(function () {
      // assign scroll event listener

      var currentScroll = $(window).scrollTop(); // get current position
      // console.log(fixmeTop);
      if (currentScroll >= fixmeTop) {
        // apply position: fixed if you
        $(".meFitlerMobile").css({
          // scroll to that element or below it
          position: "fixed",
          top: "151px",
        });
        $(".fixedElement").css({
          "padding-top": "97px",
        });
      } else {
        // apply position: static
        $(".meFitlerMobile").css({
          // if you scroll above it
          position: "static",
        });
        $(".fixedElement").css({
          "padding-top": "40px",
        });
      }
    });
  } else {
    $(".meFitlerMobile").css({
      // scroll to that element or below it
      position: "fixed",
      bottom: "0",
    });
  }

  //
  $(".CollectionToolbar__LayoutType").click(function () {
    console.log($(this).data("count"));
    let cardDisplayCount = $(this).data("count");
    let cardDisplayView = $(".collection-list-grid");
    $(".CollectionToolbar__LayoutType").removeClass("is-active");
    $(this).addClass("is-active");
    cardDisplayView.attr("collection-list-desktop", cardDisplayCount);
  });
  //

  //

  $('.product-variant-fielset input[type="radio"]').click(function () {
    var productVariant = "";
    var optionSelect = $(this).attr("id");
    var optionSelectVal = $(this).val();

    $("#productSelect option").each(function () {
      dataCircleValue = $(this).val();
      dataCircle = $(this).attr("data-circle");
      if (dataCircle == optionSelect) {
        $(".jselecteValue").val(dataCircleValue);

        $.getJSON("/cart.js", function (cart) {
          $.each(cart.items, function (index, cartItem) {
            if (cartItem.variant_id == dataCircleValue) {
              console.log(cartItem.variant_title);
              console.log(optionSelectVal);
              if (cartItem.variant_title == optionSelectVal) {
                $(
                  ".product-form__viewcart.product-form__viewcart-default"
                ).attr("hidden", true);
                $(
                  ".product-form__viewcart.product-form__viewcart-secondary"
                ).attr("hidden", false);
                $(".special__product-form__submit").attr("hidden", true);
                console.log("yes");
              } else {
                console.log("no");
                $(
                  ".product-form__viewcart.product-form__viewcart-default"
                ).attr("hidden", true);
                $(".product-form__viewcart").attr("hidden", true);
                $(".special__product-form__submit").attr("hidden", false);
              }
            }
          });
        });
      }
    });
  });
  //

  $("#productSelect").on("change", function () {
    productPrice = $("#productSelect option:selected").val();
    console.log(productPrice);
    // productVariant = '{{product.selected_or_first_available_variant.title}}';
  });

  $(".product-form__buttons .product-form__submit")
    .unbind()
    .click(function (e) {
      e.preventDefault();

      // let addToCartForms = jQuery.post(window.Shopify.routes.root + 'cart/add.js', $('form[action$="/cart/add"]').serialize());
      let addToCartForm = document.querySelector('form[action$="/cart/add"]');
      let formData = new FormData(addToCartForm);
      fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let pushData = data;
          console.log("data 2 " + pushData);
          var cart_list = [];
          cart_list.push(
            '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">' +
              '<div class="toast-body" >' +
              '<img src="' +
              pushData.featured_image.url +
              '&width=48" alt="' +
              pushData.featured_image.alt +
              '" width="48" height="64">' +
              "<div>" +
              "<p>" +
              pushData.title +
              " is added to bag  </p>" +
              "</div>" +
              "</div>" +
              "</div>"
          );
          $(".productToaster")
            .html(cart_list.join(""))
            .delay(2000)
            .fadeOut("slow");


          update_cart();
          // $.getJSON("/cart.js", function (cart) {
          // alert("There are now " + cart.item_count + " items in the cart.");
          // console.log("data 1: " + JSON.stringify(cart));
          // });
          var cartItemCounter = document.querySelector(".cart-count");
          $.ajax({
            url: "/cart.js",
            dataType: "json",
          }).done(function (data) {
            var newCount = data.item_count;
            if (newCount > 0) {
              $(".cart-count").removeAttr("hidden");
            }
            cartItemCounter.innerText = newCount;
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

  document.addEventListener("DOMContentLoaded", function () {
    update_cart();
  });

  function update_cart() {
    fetch("/cart.js")
      .then((resp) => resp.json())
      .then(
        (data) =>
          (document.getElementsByClassName("cart-count span").innerHTML =
            data.items.length)
      )
      .catch((err) => console.error(err));
    console.log(err);
  }

  // Modal for product detail page
  // Quick & dirty toggle to demonstrate modal toggle behavior

  $(".modal-size-toggle").on("click", function (e) {
    e.preventDefault();
    $(".modal-size-chart").toggleClass("is-visible");
    $("body").toggleClass("modalScroll");
  });
  $("button.modal-close.modal-toggle").on("click", function (e) {
    e.preventDefault();
    console.log("closemoda");
    $(".modal-size-chart").toggleClass("is-visible");
    $("body").toggleClass("modalScroll");
  });

  $(".footer-main h4").click(function () {
    $(this).next("ul").toggleClass("footerActive");
  });

  //Functions, Plugins, Etc.. Here
  //(does not wait for DOM READY STATE)
})(jQuery);

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
