jQuery(document).ready(function ($) {
  var sliderFinalWidth = 400,
    maxQuickWidth = 900;
  $(".quick-view").on("click", function (event) {

    // var selectedImage = $(this).parent(".cd-item").children("img"),
    // $('#pitem_1 .product__card:nth-child(2) .quick-view').parentsUntil('.product__card').find('img').attr('src');

    var selectedImage = $(this).parentsUntil(".product__card").find("img"),
      slectedImageUrl = selectedImage.attr("src"),
      selectedProductId = $(this).attr("data-handle");
    $("body").addClass("overlay-layer");
    animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, "open");
    updateQuickView(selectedProductId);
  });
  $("body").on("click", function (event) {
    if (
      $(event.target).is(".cd-close") ||
      $(event.target).is("body.overlay-layer")
    ) {
      closeQuickView(sliderFinalWidth, maxQuickWidth);
    }
  });
  $(document).keyup(function (event) {
    if (event.which == "27") {
      closeQuickView(sliderFinalWidth, maxQuickWidth);
    }
  });
  $(".cd-slider-navigation a").on("click", function () {
    updateSlider($(this));
  });
  $(window).on("resize", function () {
    if ($(".cd-quick-view").hasClass("is-visible")) {
      window.requestAnimationFrame(resizeQuickView);
    }
  });
  function updateSlider(navigation) {
    var sliderConatiner = navigation
        .parents(".cd-slider-wrapper")
        .find(".cd-slider"),
      activeSlider = sliderConatiner
        .children(".selected")
        .removeClass("selected");
    if (navigation.hasClass("cd-next")) {
      !activeSlider.is(":last-child")
        ? activeSlider.next().addClass("selected")
        : sliderConatiner.children("li").eq(0).addClass("selected");
    } else {
      !activeSlider.is(":first-child")
        ? activeSlider.prev().addClass("selected")
        : sliderConatiner.children("li").last().addClass("selected");
    }
  }
  function updateQuickView(url) {
    jQuery.getJSON("/products/" + url + ".js", function (product) {
      console.log(product);
      var title = product.title;
      var type = product.type;
      var price = 0;
      var original_price = 0;
      var desc = product.description;
      var images = product.images;
      var variants = product.variants;
      var options = product.options;
      var url = product.url;
      $(".cd-item-info h2").text(title);
      $(".cd-item-info p").html(desc);
      $(".cd-item-action li:last-child a").attr("href", url);
      var imageCount = $(images).length;
      console.log(imageCount);
      if(imageCount == 1){
        console.log('if');
        $(images).each(function (i, image) {
          var image_embed = '<li class="selected"><img src="' + image + '"></li>';
          $(".cd-slider").append(image_embed);
        });
      }else{
        console.log('else');
      $(images).each(function (i, image) {
        if (i == 0) {
          var image_embed = '<li class="selected"><img src="' + image + '"></li>';
          $(".cd-slider").append(image_embed);
        } else {
          image_embed = '<li><img src="' + image + '"></div>';
          image_embed = image_embed
            .replace(".jpg", "_800x.jpg")
            .replace(".png", "_800x.png");
          $(".cd-slider").append(image_embed);
        }
      });
    }

    });
  }
  function resizeQuickView() {
    var quickViewLeft = ($(window).width() - $(".cd-quick-view").width()) / 2,
      quickViewTop = ($(window).height() - $(".cd-quick-view").height()) / 2;
    $(".cd-quick-view").css({ top: quickViewTop, left: quickViewLeft });
  }
  function closeQuickView(finalWidth, maxQuickWidth) {
    console.log('close me');
    var close = $(".cd-close"),
      activeSliderUrl = close
        .siblings(".cd-slider-wrapper")
        .find(".selected img")
        .attr("src"),
      selectedImage = $(".empty-box").find("img");
      console.log(activeSliderUrl);
    if (
      !$(".cd-quick-view").hasClass("velocity-animating") &&
      $(".cd-quick-view").hasClass("add-content")
    ) {
      selectedImage.attr("src", activeSliderUrl);
      console.log('closeQuickView if');
      animateQuickView(selectedImage, finalWidth, maxQuickWidth, "close");
    } else {
      console.log('closeQuickView else');
      closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
    }
  }
  function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
    // var parentListItem = image.parent(".cd-item"),
    // $(this).parentsUntil(".product__card")
    var parentListItem = image.parentsUntil(".product__card"),
      topSelected = image.offset().top - $(window).scrollTop(),
      leftSelected = image.offset().left,
      widthSelected = image.width(),
      heightSelected = image.height(),
      windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      finalLeft = (windowWidth - finalWidth) / 2,
      finalHeight = (finalWidth * heightSelected) / widthSelected,
      finalTop = (windowHeight - finalHeight) / 2,
      quickViewWidth =
        windowWidth * 0.8 < maxQuickWidth ? windowWidth * 0.8 : maxQuickWidth,
      quickViewLeft = (windowWidth - quickViewWidth) / 2;

    if (animationType == "open") {
      console.log('open if');
      parentListItem.addClass("empty-box");
      $(".cd-quick-view")
        .css({ top: topSelected, left: leftSelected, width: widthSelected })
        .velocity(
          {
            top: finalTop + "px",
            left: finalLeft + "px",
            width: finalWidth + "px",
          },
          1000,
          [400, 20],
          function () {
            $(".cd-quick-view")
              .addClass("animate-width")
              .velocity(
                { left: quickViewLeft + "px", width: quickViewWidth + "px" },
                300,
                "ease",
                function () {
                  $(".cd-quick-view").addClass("add-content");
                }
              );
          }
        )
        .addClass("is-visible");
    } else {
      console.log('open else');
      $(".cd-quick-view")
        .removeClass("add-content")
        .velocity(
          {
            top: finalTop + "px",
            left: finalLeft + "px",
            width: finalWidth + "px",
          },
          300,
          "ease",
          function () {
            $("body").removeClass("overlay-layer");
            $(".cd-quick-view")
              .removeClass("animate-width")
              .velocity(
                { top: topSelected, left: leftSelected, width: widthSelected },
                500,
                "ease",
                function () {
                  $(".cd-slider li").remove();
                  $(".cd-quick-view").removeClass("is-visible");
                  parentListItem.removeClass("empty-box");
                }
              );
          }
        );
    }
  }
  function closeNoAnimation(image, finalWidth, maxQuickWidth) {
    console.log('closeNo: ' + image );
    var parentListItem = image.parent(".cd-item"),
      topSelected = image.offset().top - $(window).scrollTop(),
      leftSelected = image.offset().left,
      widthSelected = image.width();
    $("body").removeClass("overlay-layer");
    parentListItem.removeClass("empty-box");
    $(".cd-quick-view")
      .velocity("stop")
      .removeClass("add-content animate-width is-visible")
      .css({ top: topSelected, left: leftSelected, width: widthSelected });
  }
});
