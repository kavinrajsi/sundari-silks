
(function ($) {
  console.log("functions");
  $(function () {
    jQuery('#loader').fadeOut(3000);

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
    $(this).children(".second-menu").addClass("active");
  });
  $(".menu-level-1-item.menu-level-1-item-child").on("mouseleave", function () {
    $(this).children(".second-menu").removeClass("active");
  });
  /* Header user icon */
  $(".icon-customer-name").on("click", function () {
    $(this).next(".header-account-submenu").toggleClass("active");
  });
 
  $(document).click(function(){
    $(".header-account-submenu").toggleClass("active");
});
  /* .cd-primary-nav .has-children */
  $(".cd-primary-nav .has-children").on("mouseenter", function () {
    $(this).children(".cd-secondary-nav").addClass("active");
  });
  $(".cd-primary-nav .has-children").on("mouseleave", function () {
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
          top: "109px",
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
    var optionSelect = $(this).attr("id");
    var optionSelectVal = $(this).val();

    $("#productSelect option").each(function () {
      dataCircleValue = $(this).val();
      dataCircle = $(this).attr("data-circle");
      dataVariantPrice = $(this).attr("data-VariantPrice");

      if (dataCircle == optionSelect) {
        $(".jselecteValue").val(dataCircleValue);
        console.log(dataVariantPrice);
        $('.product-price').html('<span class="money" data-currency-inr="'+ dataVariantPrice +'">'+ dataVariantPrice +'</span>');

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
          update_cart();
           
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
          
          $('.drawer').toggleClass('is-active is-visible');
          fetch("/cart.js")
          .then((resp) => resp.json())
          .then((data) => {
            let daad = "";
            console.log(data);
            if (data.items.length > 0) {
              $('.cart-item-no').attr('hidden', true);
              data.items.forEach(function (product, index) {
                daad +=
                  '<div class="cart__item cartpopup-item"><div class="card__item-image"><img src="' +
                  product.featured_image.url +
                  '" alt="' +
                  product.featured_image.alt +
                  '"></div><div class="card__item-content"><h5>' +
                  product.title +
                  '</h5><p class="productPrice">' +
                  product.quantity +
                  " x " +
                  '<span class="money"  data-currency-inr="' +
                  data.currency +
                  "." +
                  Shopify.formatMoney(product.price) +
                  '">' +
                  Shopify.formatMoney(product.price) +
                  '</span></p><p class="delete"><a class="remove removeCta" data-variant="'+product.variant_id+'" href="/cart/change?line=' +
                  index +
                  1 +
                  '&amp;quantity=1"><svg width="16" height="16"> <use href="#trash-mini" /> </svg> Remove</a></p></div></div>';
              });
              document.getElementById("cart__drawer_items").innerHTML = daad;
            }
  
            document.getElementById('cart__total_price').innerHTML = '<p><span class="money" data-currency-inr="'+data.currency+'.'+Shopify.formatMoney(data.original_total_price)+'">'+ data.currency +'. '+ Shopify.formatMoney(data.original_total_price) + '</span></p>';
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

  // $(".cookieModal").on("click", function (e) {
  //   e.preventDefault();
  //   console.log("closemoda");
  //   $(".cookieActive").toggleClass("is-visible");
  //   $("body").toggleClass("modalScroll");
  // });


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

  $(".product-title-secondary").click(function () {
    $(this).next(".product-description,.product-description-old,.product-detail").toggleClass("product-detail-description-active");
    $(this).toggleClass("product-detail-description-active");
  });

  $(".faqs .faqQuestion").click(function () {
    $(this).next(".faqAnswer").toggleClass("faqActive");
    $(this).toggleClass("faqActive");
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
