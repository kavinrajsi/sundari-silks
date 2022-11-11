var Shopify=Shopify||{};Shopify.money_format="{{amount}}",Shopify.formatMoney=function(a,o){"string"==typeof a&&(a=a.replace(".",""));var e="",t=/\{\{\s*(\w+)\s*\}\}/,r=o||this.money_format;function n(a,o){return void 0===a?o:a}function i(a,o,e,t){if(o=n(o,2),e=n(e,","),t=n(t,"."),isNaN(a)||null==a)return 0;var r=(a=(a/100).toFixed(o)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+e)+(r[1]?t+r[1]:"")}switch(r.match(t)[1]){case"amount":e=i(a,2);break;case"amount_no_decimals":e=i(a,0);break;case"amount_with_comma_separator":e=i(a,2,".",",");break;case"amount_no_decimals_with_comma_separator":e=i(a,0,".",",")}return r.replace(t,e)};
var Shopify = Shopify || {};
// ---------------------------------------------------------------------------
// Money format handler
// ---------------------------------------------------------------------------
Shopify.money_format = "{{amount}}";
Shopify.formatMoney = function(cents, format) {
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);

  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) { return 0; }

    number = (number/100.0).toFixed(precision);

    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';

    return dollars + cents;
  }

  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};

var drawer=function(){Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(this))return null;do{if(e.matches(t))return e;e=e.parentElement}while(null!==e);return null});var t=50,e=350,a="is-active",r="is-visible",n="[data-drawer-target]",o="[data-drawer-trigger]",c="[data-drawer-close]",i=function(t){"true"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded",!1):t.setAttribute("aria-expanded",!0)},s=function(t){var o=t.closest(n),c=document.querySelector('[aria-controls="'+o.id+'"');o.classList.remove(r),document.documentElement.style.overflow="",i(c),setTimeout(function(){o.classList.remove(a)},e)};document.addEventListener("click",function(e){var n,l,d=e.target,p=d.closest(o),u=d.closest(c);p&&(n=p,(l=document.getElementById(n.getAttribute("aria-controls"))).classList.add(a),document.documentElement.style.overflow="hidden",i(n),setTimeout(function(){l.classList.add(r)},t),fetch("/cart.js").then(t=>t.json()).then(t=>{let e="";console.log(t),t.items.length>0&&($(".cart-item-no").attr("hidden",!0),t.items.forEach(function(a,r){e+='<div class="cart__item cartpopup-item"><div class="card__item-image"><img src="'+a.featured_image.url+'" alt="'+a.featured_image.alt+'"></div><div class="card__item-content"><h5>'+a.title+'</h5><p class="productPrice">'+a.quantity+' x <span class="money"  data-currency-inr="'+t.currency+"."+Shopify.formatMoney(a.price)+'">'+Shopify.formatMoney(a.price)+'</span></p><p class="delete"><a class="remove removeCta" data-variant="'+a.variant_id+'" href="/cart/change?line='+r+'1&amp;quantity=1"><svg width="16" height="16"> <use href="#trash-mini" /> </svg> Remove</a></p></div></div>'}),document.getElementById("cart__drawer_items").innerHTML=e),document.getElementById("cart__total_price").innerHTML='<p><span class="money" data-currency-inr="'+t.currency+"."+Shopify.formatMoney(t.original_total_price)+'">'+t.currency+". "+Shopify.formatMoney(t.original_total_price)+"</span></p>"})),u&&s(u),(p||u)&&e.preventDefault()},!1),document.addEventListener("keydown",function(t){if("Escape"===t.key||27===t.keyCode){var e,r=document.querySelectorAll(n);for(e=0;e<r.length;++e)r[e].classList.contains(a)&&s(r[e])}},!1)};drawer(),$(" .cart-popup .cartpopup-body").on("click",".cartpopup-item .remove",function(t){var e=$(this);t.preventDefault(),t.stopPropagation(),console.log("data"+this);var a=$(this).attr("data-variant");$.ajax({type:"POST",url:"/cart/change.js",dataType:"json",data:{quantity:0,id:a},success:function(t){$.ajax({type:"GET",dataType:"jsonp",url:"/cart.json",success:function(t){var a=t.item_count,r=t.total_price/100;$(".cart-count").text(a),$(".cart-count").text(a),0==a&&($(".cart-item-no").removeAttr("hidden"),$(".cart-count").attr("hidden","hidden")),$(".cart-item-count").text(a),$(".cartpopup-total .price").html('<span class="price"><span class="money" data-currency-inr="'+r.toFixed(2)+'">'+r.toFixed(2)+"</span></span> "),$(e).parents(".cartpopup-item").remove()}})}})});
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

var productModal,productInfoAnchors=document.querySelectorAll("#productInfoAnchor");null!=document.getElementById("productInfoModal")&&(productModal=new bootstrap.Modal(document.getElementById("productInfoModal"),{})),productInfoAnchors.length>0&&productInfoAnchors.forEach(t=>{t.addEventListener("click",e=>{var o="/products/"+t.getAttribute("product-handle")+".js",n="/products/"+t.getAttribute("product-handle")+".json";console.log(n),fetch(o).then(t=>t.json()).then(function(e){console.log(e),document.getElementById("productInfoImg").src=e.images[0],document.getElementById("productInfoTitle").innerHTML=e.title,document.getElementById("productInfoPrice").innerHTML=t.getAttribute("product-price"),document.getElementById("productInfoDescription").innerHTML=e.description;var o=e.variants,n=document.getElementById("modalItemID");n.innerHTML="",o.forEach(function(t,e){console.log(t),n.options[n.options.length]=new Option(t.option1,t.id)}),productModal.show()})})});var modalAddToCartForm=document.querySelector("#addToCartForm");let err="";function update_cart(){fetch("/cart.js").then(t=>t.json()).then(t=>document.getElementsByClassName("cart-count span").innerHTML=t.items.length).catch(t=>console.error(t)),console.log(err)}null!=modalAddToCartForm&&modalAddToCartForm.addEventListener("submit",function(t){t.preventDefault();let e={items:[{id:document.getElementById("modalItemID").value,quantity:document.getElementById("modalItemQuantity").value}]};fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>t.json()).then(t=>{update_cart();var e=document.querySelector(".cart-count");jQuery.ajax({url:"/cart.js",dataType:"json"}).done(function(t){var o=t.item_count;o>0&&$(".cart-count").removeAttr("hidden"),e.innerText=o})}).catch(t=>{console.error("Error: "+t),console.log(t)})}),document.addEventListener("DOMContentLoaded",function(){update_cart()});
var productInfoAnchors = document.querySelectorAll("#productInfoAnchor");
var productModal;

if (document.getElementById("productInfoModal") != null) {
  productModal = new bootstrap.Modal(
    document.getElementById("productInfoModal"),
    {}
  );
}

if (productInfoAnchors.length > 0) {
  productInfoAnchors.forEach((item) => {
    item.addEventListener("click", (event) => {
      var url = "/products/" + item.getAttribute("product-handle") + ".js";
      var url2 = "/products/" + item.getAttribute("product-handle") + ".json";
      console.log(url2);

      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          console.log(data);

          document.getElementById("productInfoImg").src = data.images[0];
          document.getElementById("productInfoTitle").innerHTML = data.title;
          document.getElementById("productInfoPrice").innerHTML =
            item.getAttribute("product-price");
          document.getElementById("productInfoDescription").innerHTML =
            data.description;

          var variants = data.variants;
          var variantSelect = document.getElementById("modalItemID");

          variantSelect.innerHTML = "";

          variants.forEach(function (variant, index) {
            console.log(variant);

            variantSelect.options[variantSelect.options.length] = new Option(
              variant.option1,
              variant.id
            );
          });

          productModal.show();
        });
    });
  });
}



var modalAddToCartForm = document.querySelector("#addToCartForm");

let err = "";
if (modalAddToCartForm != null) {
  modalAddToCartForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = {
      items: [
        {
          id: document.getElementById("modalItemID").value,
          quantity: document.getElementById("modalItemQuantity").value,
        },
      ],
    };

    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        update_cart();
        // jQuery.getJSON('/cart.js', function(cart) {
        //   alert('There are now ' + cart.item_count + ' items in the cart.');
        // } );
        var cartItemCounter = document.querySelector(".cart-count");
        jQuery
          .ajax({
            url: "/cart.js",
            dataType: "json",
          })
          .done(function (data) {
            var newCount = data.item_count;
            if (newCount > 0) {
              $(".cart-count").removeAttr("hidden");
            }
            cartItemCounter.innerText = newCount;
          });
      })
      .catch((err) => {
        console.error("Error: " + err);
        console.log(err);
      });
  });
}

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
