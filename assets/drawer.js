var drawer = function () {
  if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
      var el = this;
      var ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (ancestor.matches(s)) return ancestor;
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);
      return null;
    };
  }
  var settings = {
    speedOpen: 50,
    speedClose: 350,
    activeClass: "is-active",
    visibleClass: "is-visible",
    selectorTarget: "[data-drawer-target]",
    selectorTrigger: "[data-drawer-trigger]",
    selectorClose: "[data-drawer-close]",
  };

  var toggleccessibility = function (event) {
    if (event.getAttribute("aria-expanded") === "true") {
      event.setAttribute("aria-expanded", false);
    } else {
      event.setAttribute("aria-expanded", true);
    }
  };

  var openDrawer = function (trigger) {
    var target = document.getElementById(trigger.getAttribute("aria-controls"));
    target.classList.add(settings.activeClass);
    document.documentElement.style.overflow = "hidden";
    toggleccessibility(trigger);

    setTimeout(function () {
      target.classList.add(settings.visibleClass);
    }, settings.speedOpen);
  };

  var closeDrawer = function (event) {
    var closestParent = event.closest(settings.selectorTarget),
      childrenTrigger = document.querySelector(
        '[aria-controls="' + closestParent.id + '"'
      );
    closestParent.classList.remove(settings.visibleClass);
    document.documentElement.style.overflow = "";
    toggleccessibility(childrenTrigger);
    setTimeout(function () {
      closestParent.classList.remove(settings.activeClass);
    }, settings.speedClose);
  };
  var clickHandler = function (event) {
    var toggle = event.target,
      open = toggle.closest(settings.selectorTrigger),
      close = toggle.closest(settings.selectorClose);

    if (open) {
      openDrawer(open);

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
    }
    if (close) {
      closeDrawer(close);
    }
    if (open || close) {
      event.preventDefault();
    }
  };

  var keydownHandler = function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      var drawers = document.querySelectorAll(settings.selectorTarget),
        i;
      for (i = 0; i < drawers.length; ++i) {
        if (drawers[i].classList.contains(settings.activeClass)) {
          closeDrawer(drawers[i]);
        }
      }
    }
  };

  document.addEventListener("click", clickHandler, false);
  document.addEventListener("keydown", keydownHandler, false);
};

drawer();


//
//
//

// $('.varients-item').on('click', function () {
//   var obj = $(this);
//   var variants_id = $(this).attr("data-variant");
//   $.ajax({
//     type: 'POST',
//     url: '/cart/add.js',
//     data: {
//       quantity: 1,
//       id: variants_id
//     },
//     dataType: 'json',
//     success: function (data) {
//       $.ajax({
//         type: 'GET',
//         dataType: 'jsonp',
//         url: '/cart.json',
//         success: function (cart) {

//           var item_count = cart['item_count'];
//           var total_price = cart['total_price'] / 100;

//           //If there are items in cart
//           if (item_count > 0) {
//             // cart count
//             $('.cart-item-count').text(item_count);

//             // mini cart data
//             $('.cart-popup').attr('id', 'cartPopup');
//             $('.cartpopup-total .price').text('£' + total_price.toFixed(2));


//             var cart_list = [];

//             for (var i = 0; i < item_count; i++) {
//               if (cart['items'][i]['id'] != null) {
//                 var item_id = cart['items'][i]['id'];
//                 var product_title = cart['items'][i]['product_title'];
//                 // var product_title = data['items'][i]['title'];
//                 var product_handle = cart['items'][i]['handle'];
//                 var quantity = cart['items'][i]['quantity'];
//                 var line_price = cart['items'][i]['price'] / 100;
//                 var url = cart['items'][i]['url'];
//                 var image_url = cart['items'][i]['image'];
//                 var variants = cart['items'][i]['variant_options'];

//                 if (product_title == 'Gift Wrap') {
//                   var product_url = product_title;
//                 } else {
//                   var product_url = '<a href="' + url + '">' + product_title + '</a>';
//                 }

//                 var options = [];
//                 for (var o = 0; o < variants.length; o++) {
//                   var selected = cart['items'][i]['variant_options'][o];
//                   if (selected !== 'Default Title') {
//                     options.push(selected + '<br>');
//                   }
//                 };
//                 var selected_options = options.join('');

//                 cart_list.push(
//                   '<div class="cartpopup-item ">' +
//                   '<div class="cartpopup-item-image">' +
//                   '<a href="' + url + '">' +
//                   '<img class="img-fluid d-block" src="' + image_url + '"  alt="' + product_title + '" />' +
//                   '</a>' +
//                   '</div>' +
//                   '<div class="cartpopup-item-content ">' +
//                   '<h5>' + product_url + '</h5>' +
//                   '<span class="variant">' + selected_options + '</span>' +
//                   '<span class="price">£' + total_price.toFixed(2) + '</span>' +
//                   '<div class="quantity-box ">' +
//                   '<button class="quantity-button qminus" role="button" type="button" data-variant="' + item_id + '"><i class="fal fa-minus"></i></button>' +
//                   '<input class="quantity-input" type="number" disabled name="updates[]" id="updates_' + item_id + '" value="' + quantity + '" min="1" />' +
//                   '<button class="quantity-button qplus" role="button" type="button" data-variant="' + item_id + '"><i class="fal fa-plus"></i></button>' +
//                   '</div>' +
//                   '<div class="">' +
//                   '<a class="remove" data-cart-remove-id="' + item_id + '" href="/cart/change?line=' + item_count + '&amp;quantity=0">Remove</a>' +
//                   '</div>' +
//                   '</div>' +
//                   '</div>'
//                 );
//               } //endif
//             }; // endfor

//             $('.cartpopup-body').html(cart_list.join(''));
//           }
//         }
//       });
//     }
//   });
// });

// $('.cart-popup .cartpopup-body ').on('click', '.quantity-button.qminus', function () {
//   console.log('minus');
//   if ($(this).next().val() > 1) {
//     var quantityItem = $(this).next().val(+$(this).next().val() - 1);
//   }
//   var vId = $(this).attr("data-variant");
//   var quantityVal = $(this).next().val();
//   $.ajax({
//     type: 'POST',
//     url: '/cart/change.js',
//     dataType: 'json',
//     data: {
//       quantity: quantityVal,
//       id: vId
//     },
//     success: function (data) {
//       $.ajax({
//         type: 'GET',
//         dataType: 'jsonp',
//         url: '/cart.json',
//         success: function (cart) {
//           var item_count = cart['item_count'];
//           var total_price = cart['total_price'] / 100;
//           console.log(item_count);
//           if (item_count > 0) {
//             $('.cart-item-count').text(item_count);

//             // mini cart data
//             $('.cart-popup').attr('id', 'cartPopup');
//             $('.cartpopup-total .price').html('<span class="price"><span class="money" data-currency-inr="' + total_price.toFixed(2) + '">' + total_price.toFixed(2) + '</span></span> ');
//           }
//         }
//       });
//     }
//   });
// });

// $('.cart-popup .cartpopup-body').on('click', '.quantity-button.qplus', function () {
//   console.log('olus');
//   $(this).prev().val(+$(this).prev().val() + 1);
//   var vId = $(this).attr("data-variant");
//   var quantityVal = $(this).prev().val();
//   $.ajax({
//     type: 'POST',
//     url: '/cart/add.js',
//     dataType: 'json',
//     data: {
//       quantity: 1,
//       id: vId
//     },
//     success: function (data) {
//       $.ajax({
//         type: 'GET',
//         dataType: 'jsonp',
//         url: '/cart.json',
//         success: function (cart) {
//           var item_count = cart['item_count'];
//           var total_price = cart['total_price'] / 100;
//           console.log(item_count);
//           if (item_count > 0) {
//             $('.cart-item-count').text(item_count);

//             // mini cart data
//             $('.cart-popup').attr('id', 'cartPopup');
//             $('.cartpopup-total .price').html('<span class="price"><span class="money" data-currency-inr="' + total_price.toFixed(2) + '">' + total_price.toFixed(2) + '</span></span> ');
//           }
//         }
//       });
//     }
//   });
// });

// remove
$(' .cart-popup .cartpopup-body').on('click', '.cartpopup-item .remove', function (e) {
  var obj = $(this);
  e.preventDefault();
  e.stopPropagation();
  console.log('data' + this );
  var productId = $(this).attr('data-variant');

  $.ajax({
    type: 'POST',
    url: '/cart/change.js',
    dataType: 'json',
    data: {
      quantity: 0,
      id: productId
    },
    success: function (data) {
      $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: '/cart.json',
        success: function (cart) {

          var item_count = cart['item_count'];
          var total_price = cart['total_price'] / 100;

          $('.cart-count').text(item_count);
          $('.cart-count').text(item_count);

          if (item_count == 0) {
            $('.cart-item-no').removeAttr('hidden');
            $('.cart-count').attr('hidden', 'hidden');
          }
          $('.cart-item-count').text(item_count);

          // mini cart data
          $('.cartpopup-total .price').html('<span class="price"><span class="money" data-currency-inr="' + total_price.toFixed(2) + '">' + total_price.toFixed(2) + '</span></span> ');

          // Remove item
          $(obj).parents('.cartpopup-item').remove();

        }
      });
    }
  });
});
