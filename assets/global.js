(function ($) {
  console.log("functions");
  $(function () {
    jQuery("#loader").fadeOut(3000);

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
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
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
      $(
        "#" + replaced + ".justdropped-box .test--product-card--grid-four"
      ).slick({
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
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
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
      $("body").toggleClass("hidden");
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
    $(this).children(".second-menu").addClass("active");
  });
  $(".menu-level-1-item.menu-level-1-item-child").on("mouseleave", function () {
    $(this).children(".second-menu").removeClass("active");
  });
  /* .cd-primary-nav .has-children */
  $(".cd-primary-nav .has-children").on("mouseenter", function () {
    $(this).children(".cd-secondary-nav").addClass("active");
  });
  $(".cd-primary-nav .has-children").on("mouseleave", function () {
    $(this).children(".cd-secondary-nav").removeClass("active");
  });

  //filter toggle
  $(".CollectionToolbar__LayoutType").click(function () {
    console.log($(this).data("count"));
    var cardDisplayCount = $(this).data("count");
    var cardDisplayView = $(".collection-list-grid");
    $(".CollectionToolbar__LayoutType").removeClass("is-active");
    $(this).addClass("is-active");
    cardDisplayView.attr("collection-list-desktop", cardDisplayCount);
  });
  //

  // product variant
  $('.product-variant-fielset input[type="radio"]').click(function () {
    var productVariant = "";
    var optionSelect = $(this).attr("id"); // radio button for and id
    var optionSelectVal = $(this).val(); // check me
    $("#productSelect option").each(function () {
      dataCircleValue = $(this).val(); // get product value id
      dataCircle = $(this).attr("data-circle"); // get product label name to match with radio for and id
      dataVariantCurrency = $(this).attr("data-variantcurrency"); // get currency code
      dataVariantPrice = $(this).attr("data-VariantPrice"); // get price

      // console.log('dataCircleValue: ' + dataCircleValue);

      console.log('dataCircle: ' + dataCircle);
      console.log('optionSelect: ' + optionSelect);

      if (dataCircle == optionSelect) {
        $(".jselecteValue").val(dataCircleValue); // pass product id to cart input
        $(".product-price").html(
          '<span><span class="money" data-currency-' +
            dataVariantCurrency +
            '="' +
            dataVariantCurrency +
            " " +
            dataVariantPrice +
            '">' +
            dataVariantCurrency +
            " " +
            dataVariantPrice +
            "</span></span>"
        );
        var cart_sizelist = [];
        var productSelectID = parseInt($(".jselecteValue").val());
        var cartContents = fetch(window.Shopify.routes.root + "cart.js")
          .then((response) => response.json())
          .then((data) => {
            $.each(data.items, function (index, cartItem) {
              cart_sizelist.push(cartItem.variant_id);
            });
            if (jQuery.inArray(productSelectID, cart_sizelist) != -1) {
              console.log("is in array");
              $(".product-form__submit").hide();
              $(".product-form__viewcart").show();
            } else {
              console.log("is NOT in array");
              $(".product-form__submit").show();
              $(".product-form__viewcart").hide();
            }
            // verification data
            console.log(data.items);
            console.log($.inArray(productSelectID, cart_sizelist));
            console.log(productSelectID);
            console.log(cart_sizelist);
          });
      }
    });
  });

  // add to cart ajax
  $(".product-form__buttons .product-form__submit")
    .unbind()
    .click(function (e) {
      e.preventDefault();
      let dataItem = $(".jselecteValue").val();

      let formData = {
        items: [
          {
            id: dataItem,
            quantity: 1,
          },
        ],
      };

      fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })


      // let addToCartform = jQuery.post(window.Shopify.routes.root + 'cart/add.js', $('form[action$="/cart/add"]').serialize());
      // console.log('addToCartform:: ' + JSON.stringify(addToCartform));

      // let addToCartForm = document.querySelector('form[action$="/cart/add"]');
      // let formData = new FormData(addToCartForm);
      // console.log(formData);
      // fetch(window.Shopify.routes.root + "cart/add.js", {
      //   method: "POST",
      //   body: formData,
      // })
        .then((response) => {
          $(".product-form__submit").hide();
          $(".product-form__viewcart").show();
          return response.json();
        })
        .then((data) => {
          update_cart();
          let cartData = JSON.stringify(data);
          let pushmyObj = JSON.parse(cartData);
          let pushDataItem = pushmyObj.items[0];
          var cart_list = [];
          cart_list.push(
            '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">' +
              '<div class="toast-body" >' +
              '<img src="' +
              pushDataItem.featured_image.url +
              '&width=48" alt="' +
              pushDataItem.featured_image.alt +
              '" width="48" height="64">' +
              "<div>" +
              "<p>" +
              pushDataItem.title +
              " is added to bag  </p>" +
              "</div>" +
              "</div>" +
              "</div>"
          );
          $(".productToaster")
            .html(cart_list.join(""))
            .delay(2000)
            .fadeOut("slow");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  document.addEventListener("DOMContentLoaded", function () {
    update_cart();
  });

  function update_cart() {
    var cartContents = fetch(window.Shopify.routes.root + "cart.js")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.item_count);
        $(".header-cart .cart-count span").html(data.item_count);
        return data;
      });
  }

  // Modal for all page

  window.setTimeout(function () {
    // First check, if localStorage is supported.
    if (window.localStorage) {

    // $(".modal-all-page video").trigger('play');
      // Get the expiration date of the previous popup.
      var nextPopup = localStorage.getItem("nextNewsletter");
      if (nextPopup > new Date()) {
        return;
      }

      // Store the expiration date of the current popup in localStorage.
      var expires = new Date();
      expires = expires.setHours(expires.getHours() + 24);

      localStorage.setItem("nextNewsletter", expires);
    }

    // $(".modal-all-page").addClass("is-visible");
    console.log('play');
  }, 3000);


  $(".modal-size-toggle").on("click", function (e) {
    e.preventDefault();
    $(".modal-size-chart").toggleClass("is-visible");
    $("body").toggleClass("modalScroll");
  });

  // all modal close
  $("button.modal-close.modal-toggle").on("click", function (e) {
    e.preventDefault();
    $(".modal-size-chart").removeClass("is-visible");
    // $(".modal-all-page").removeClass("is-visible");
    $("body").removeClass("modalScroll");
  });


  $(".product-title-secondary").click(function () {
    $(this)
      .next(".product-description,.product-description-old,.product-detail")
      .toggleClass("product-detail-description-active");
    $(this).toggleClass("product-detail-description-active");
  });

  $(".faqs .faqQuestion").click(function () {
    $(this).next(".faqAnswer").toggleClass("faqActive");
    $(this).toggleClass("faqActive");
  });

  $(".footer-main p").click(function () {
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

if (window.location.search == "?customer_posted=true") {
  let ded = document.getElementsByClassName("newsletter-form__field-wrapper");
  ded[0].style.display = "none";
  document
    .getElementById("subscription-from")
    .closest(".footer-dataaction")
    .scrollIntoView();
}
