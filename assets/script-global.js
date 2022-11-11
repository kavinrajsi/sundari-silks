!function(e){if(console.log("functions"),e(function(){console.log("document ready");let t=e(".pick_currency.mldesk");e(".header-currency-price-list").html(t),e(".slider.single-item").slick({}),e("#pitem_1 .test--product-card--grid-four").slick({slidesToShow:4,slidesToScroll:1,dots:!0,draggable:!0,centerMode:!1,variableWidth:!1,arrows:!0,infinite:!1,mobileFirst:!0,focusOnSelect:!0,touchMove:!0,swipeToSlide:!0,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:300,settings:{slidesToShow:2,slidesToScroll:2}}]}),e(".tab-buttton .tab").click(function(){console.log(this.id);var t=this.id,o=t[0],i=t.replace(o,"p");console.log(i),e("#"+i+".justdropped-box .test--product-card--grid-four").slick({slidesToShow:4,slidesToScroll:1,dots:!0,draggable:!0,centerMode:!1,variableWidth:!1,arrows:!0,infinite:!1,mobileFirst:!0,focusOnSelect:!0,touchMove:!0,swipeToSlide:!0,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:300,settings:{slidesToShow:2,slidesToScroll:2}}]})}),e(".header-search, .input__close-icon").click(function(){e(".header-search-area-wrapper").toggle().toggleClass("active"),e(".header-mobile-navigation-list").hide().removeClass("active"),e(".closeMenu").hide().removeClass("active"),e(".burgerMenu").show().addClass("active"),e("body").toggleClass("header-seachActive")})}),e(".cd-nav-trigger").click(function(){e(".header-mobile-navigation-list").toggle().toggleClass("active"),e(".burgerMenu").toggle().toggleClass("active"),e(".closeMenu").toggle().toggleClass("active"),e("body").toggleClass("header-menuActive")}),e(".menu-level-1-item.menu-level-1-item-child").on("mouseenter",function(){e(this).children(".second-menu").addClass("active")}),e(".menu-level-1-item.menu-level-1-item-child").on("mouseleave",function(){e(this).children(".second-menu").removeClass("active")}),e(".cd-primary-nav .has-children").on("mouseenter",function(){e(this).children(".cd-secondary-nav").addClass("active")}),e(".cd-primary-nav .has-children").on("mouseleave",function(){e(this).children(".cd-secondary-nav").removeClass("active")}),e(window).width()>764){e(window).scroll(function(){e(window).scrollTop()>=164?(e(".meFitlerMobile").css({position:"fixed",top:"151px"}),e(".fixedElement").css({"padding-top":"97px"})):(e(".meFitlerMobile").css({position:"static"}),e(".fixedElement").css({"padding-top":"40px"}))})}else e(".meFitlerMobile").css({position:"fixed",bottom:"0"});function t(){fetch("/cart.js").then(e=>e.json()).then(e=>document.getElementsByClassName("cart-count span").innerHTML=e.items.length).catch(e=>console.error(e)),console.log(err)}e(".CollectionToolbar__LayoutType").click(function(){console.log(e(this).data("count"));let t=e(this).data("count"),o=e(".collection-list-grid");e(".CollectionToolbar__LayoutType").removeClass("is-active"),e(this).addClass("is-active"),o.attr("collection-list-desktop",t)}),e('.product-variant-fielset input[type="radio"]').click(function(){var t=e(this).attr("id"),o=e(this).val();e("#productSelect option").each(function(){dataCircleValue=e(this).val(),dataCircle=e(this).attr("data-circle"),dataCircle==t&&(e(".jselecteValue").val(dataCircleValue),e.getJSON("/cart.js",function(t){e.each(t.items,function(t,i){i.variant_id==dataCircleValue&&(console.log(i.variant_title),console.log(o),i.variant_title==o?(e(".product-form__viewcart.product-form__viewcart-default").attr("hidden",!0),e(".product-form__viewcart.product-form__viewcart-secondary").attr("hidden",!1),e(".special__product-form__submit").attr("hidden",!0),console.log("yes")):(console.log("no"),e(".product-form__viewcart.product-form__viewcart-default").attr("hidden",!0),e(".product-form__viewcart").attr("hidden",!0),e(".special__product-form__submit").attr("hidden",!1)))})}))})}),e("#productSelect").on("change",function(){productPrice=e("#productSelect option:selected").val(),console.log(productPrice)}),e(".product-form__buttons .product-form__submit").unbind().click(function(o){o.preventDefault();let i=document.querySelector('form[action$="/cart/add"]'),l=new FormData(i);fetch(window.Shopify.routes.root+"cart/add.js",{method:"POST",body:l}).then(e=>e.json()).then(o=>{let i=o;console.log("data 2 "+i);var l=[];l.push('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-body" ><img src="'+i.featured_image.url+'&width=48" alt="'+i.featured_image.alt+'" width="48" height="64"><div><p>'+i.title+" is added to bag  </p></div></div></div>"),e(".productToaster").html(l.join("")).delay(2e3).fadeOut("slow"),t();var c=document.querySelector(".cart-count");e.ajax({url:"/cart.js",dataType:"json"}).done(function(t){var o=t.item_count;o>0&&e(".cart-count").removeAttr("hidden"),c.innerText=o})}).catch(e=>{console.error("Error:",e)})}),document.addEventListener("DOMContentLoaded",function(){t()}),e(".modal-size-toggle").on("click",function(t){t.preventDefault(),e(".modal-size-chart").toggleClass("is-visible"),e("body").toggleClass("modalScroll")}),e("button.modal-close.modal-toggle").on("click",function(t){t.preventDefault(),console.log("closemoda"),e(".modal-size-chart").toggleClass("is-visible"),e("body").toggleClass("modalScroll")}),e(".footer-main h4").click(function(){e(this).next("ul").toggleClass("footerActive")})}(jQuery);var tabs=document.getElementsByClassName("tab"),pages=document.getElementsByClassName("justdropped-box");for(j=0;j<tabs.length;j++)tabs[j].addEventListener("click",clickTab);function clickTab(e){var t=e.currentTarget.id.replace("titem_","pitem_");for(i=0;i<pages.length;i++)tabs[i].classList.remove("active"),pages[i].classList.remove("active");e.currentTarget.classList.add("active"),document.querySelector("#"+t).classList.add("active")}null!=document.getElementById("recover")&&document.getElementById("recover").addEventListener("click",function(e){console.log("recover password"),document.getElementById("recover-form").classList.replace("d-none","d-block"),document.getElementById("login-froms").classList.replace("d-block","d-none")}),null!=document.getElementById("login")&&document.getElementById("login").addEventListener("click",function(e){console.log("login action"),document.getElementById("login-froms").classList.replace("d-none","d-block"),document.getElementById("recover-form").classList.replace("d-block","d-none")});
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
    // console.log("enter");
    // $("body").addClass("header-menuActive");
    // $("body").css("padding-right", "15px");
    $(this).children(".second-menu").addClass("active");
    // $(this).children('.menu-level-2').addClass("active");
  });
  $(".menu-level-1-item.menu-level-1-item-child").on("mouseleave", function () {
    // console.log("leave");
    // $("body").removeClass("header-menuActive");
    // $("body").css("padding-right", "0");
    $(this).children(".second-menu").removeClass("active");
  });
  /* .cd-primary-nav .has-children */
  $(".cd-primary-nav .has-children").on("mouseenter", function () {
    // console.log("enter");
    $(this).children(".cd-secondary-nav").addClass("active");
  });
  $(".cd-primary-nav .has-children").on("mouseleave", function () {
    // console.log("leave");
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
