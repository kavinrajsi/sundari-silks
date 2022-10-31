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
    $("body").addClass("header-menuActive");
    $("body").css("padding-right", "15px");
    $(this).children(".second-menu").addClass("active");
    // $(this).children('.menu-level-2').addClass("active");
  });
  $(".menu-level-1-item").on("mouseleave", function () {
    console.log("leave");
    $("body").removeClass("header-menuActive");
    $("body").css("padding-right", "0");
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
          let pushData = (data);
          console.log('data 2 ' + pushData);
          var cart_list = [];
          cart_list.push(
          '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">'+
          '<div class="toast-body" >'+
          '<img src="'+pushData.featured_image.url+'&width=48&height=64" alt="'+ pushData.featured_image.alt+'" width="48" height="64">'+
           '<div>'+
            '<p>'+pushData.title+' is added to bag  </p>'+
          '</div>'+
            '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">'+
              '<svg width="24" height="24" class="closeMenu">'+
                '<use href="#close" />'+
              '</svg>'+
            '</button>'+
          '</div>'+
        '</div>');
        $('.productToaster').html(cart_list.join(''));
$('.product-form__buttons .product-form__viewcart').removeAttr('hidden');
$('.product-form__buttons button').attr("hidden",true);

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

  // var productVariantId = $(".shappify_add_to_cart_form select[name='id']").val();
  // var plaqueSize = $('#plaque-size option:selected').val();
  // var customisationPackage = $('#customisation-package option:selected').val();

  // $(document).on("change", ".product-options .selector-wrapper select", function () {
  //     var productVariantId = $(".shappify_add_to_cart_form select[name='id']").val();
  // });

  // $('.add-to-cart').on('click', function () {

  //     productVariantId = $(".shappify_add_to_cart_form select[name='id']").val();
  //     plaqueSize = $('#plaque-size option:selected').val();
  //     customisationPackage = $('#customisation-package option:selected').val();
  //     stcLink = productVariantId + ':1,' + plaqueSize + ':1,' + customisationPackage + ':1'
  //     window.location = 'https://www.blackartgraphics.com/cart/' + stcLink;
  // })

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
