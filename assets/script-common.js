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

var productModal,productInfoAnchors=document.querySelectorAll("#productInfoAnchor");null!=document.getElementById("productInfoModal")&&(productModal=new bootstrap.Modal(document.getElementById("productInfoModal"),{})),productInfoAnchors.length>0&&productInfoAnchors.forEach(t=>{t.addEventListener("click",e=>{var o="/products/"+t.getAttribute("product-handle")+".js",n="/products/"+t.getAttribute("product-handle")+".json";console.log(n),fetch(o).then(t=>t.json()).then(function(e){console.log(e),document.getElementById("productInfoImg").src=e.images[0],document.getElementById("productInfoTitle").innerHTML=e.title,document.getElementById("productInfoPrice").innerHTML=t.getAttribute("product-price"),document.getElementById("productInfoDescription").innerHTML=e.description;var o=e.variants,n=document.getElementById("modalItemID");n.innerHTML="",o.forEach(function(t,e){console.log(t),n.options[n.options.length]=new Option(t.option1,t.id)}),productModal.show()})})});var modalAddToCartForm=document.querySelector("#addToCartForm"),err="";function update_cart(){fetch("/cart.js").then(t=>t.json()).then(t=>document.getElementsByClassName("cart-count span").innerHTML=t.items.length).catch(t=>console.error(t)),console.log(err)}null!=modalAddToCartForm&&modalAddToCartForm.addEventListener("submit",function(t){t.preventDefault();let e={items:[{id:document.getElementById("modalItemID").value,quantity:document.getElementById("modalItemQuantity").value}]};fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>t.json()).then(t=>{update_cart(),jQuery.getJSON("/cart.js",function(t){console.log("There are now "+t.item_count+" items in the cart.")});var e=document.querySelector(".cart-count");jQuery.ajax({url:"/cart.js",dataType:"json"}).done(function(t){var o=t.item_count;o>0&&$(".cart-count").removeAttr("hidden"),e.innerText=o})}).catch(t=>{console.error("Error: "+t),console.log(t)})}),document.addEventListener("DOMContentLoaded",function(){update_cart()});
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

var err = "";
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
        jQuery.getJSON('/cart.js', function(cart) {
          console.log('There are now ' + cart.item_count + ' items in the cart.');
        } );
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

const LOCAL_STORAGE_WISHLIST_KEY="shopify-wishlist",LOCAL_STORAGE_DELIMITER=",",BUTTON_ACTIVE_CLASS="active",GRID_LOADED_CLASS="loaded",selectors={button:"[button-wishlist]",grid:"[grid-wishlist]",productCard:".product-card"};document.addEventListener("DOMContentLoaded",()=>{initButtons(),initGrid()}),document.addEventListener("shopify-wishlist:updated",t=>{console.log("[Shopify Wishlist] Wishlist Updated ✅",t.detail.wishlist),initGrid()}),document.addEventListener("shopify-wishlist:init-product-grid",t=>{console.log("[Shopify Wishlist] Wishlist Product List Loaded ✅",t.detail.wishlist)}),document.addEventListener("shopify-wishlist:init-buttons",t=>{console.log("[Shopify Wishlist] Wishlist Buttons Loaded ✅",t.detail.wishlist)});const fetchProductCardHTML=t=>{const i=document.location.origin+`/products/${t}`;jQuery.ajax({url:i,dataType:"json"}).done(function(t){console.log(t),console.log(t.product.id),console.log(t.product.title),console.log(t.product.image.src),console.log(t.product.variants[0].price)})},setupGrid=async t=>{const i=getWishlist(),s=i.map(fetchProductCardHTML),e=(await Promise.all(s)).join("");t.innerHTML=e,t.classList.add("loaded"),initButtons();const o=new CustomEvent("shopify-wishlist:init-product-grid",{detail:{wishlist:i}});document.dispatchEvent(o)},setupButtons=t=>{t.forEach(t=>{const i=t.dataset.productHandle||!1;if(!i)return console.error("[Shopify Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.");wishlistContains(i)&&t.classList.add("active"),t.addEventListener("click",()=>{updateWishlist(i),t.classList.toggle("active")})})},initGrid=()=>{const t=document.querySelector(selectors.grid)||!1;t&&setupGrid(t)},initButtons=()=>{const t=document.querySelectorAll(selectors.button)||[];if(!t.length)return;setupButtons(t);const i=new CustomEvent("shopify-wishlist:init-buttons",{detail:{wishlist:getWishlist()}});document.dispatchEvent(i)},getWishlist=()=>{const t=localStorage.getItem("shopify-wishlist")||!1;return t?t.split(","):[]},setWishlist=t=>{const i=t.join(",");t.length?localStorage.setItem("shopify-wishlist",i):localStorage.removeItem("shopify-wishlist");const s=new CustomEvent("shopify-wishlist:updated",{detail:{wishlist:t}});return document.dispatchEvent(s),i},updateWishlist=t=>{const i=getWishlist(),s=i.indexOf(t);return-1===s?i.push(t):i.splice(s,1),setWishlist(i)},wishlistContains=t=>{return getWishlist().includes(t)},resetWishlist=()=>setWishlist([]);
const LOCAL_STORAGE_WISHLIST_KEY = 'shopify-wishlist';
const LOCAL_STORAGE_DELIMITER = ',';
const BUTTON_ACTIVE_CLASS = 'active';
const GRID_LOADED_CLASS = 'loaded';

const selectors = {
  button: '[button-wishlist]',
  grid: '[grid-wishlist]',
  productCard: '.product-card',
};

document.addEventListener('DOMContentLoaded', () => {
  initButtons();
  initGrid();
});

document.addEventListener('shopify-wishlist:updated', (event) => {
  console.log('[Shopify Wishlist] Wishlist Updated ✅', event.detail.wishlist);
  initGrid();
});

document.addEventListener('shopify-wishlist:init-product-grid', (event) => {
  console.log('[Shopify Wishlist] Wishlist Product List Loaded ✅', event.detail.wishlist);
});

document.addEventListener('shopify-wishlist:init-buttons', (event) => {
  console.log('[Shopify Wishlist] Wishlist Buttons Loaded ✅', event.detail.wishlist);
});

const fetchProductCardHTML = (handle) => {
  const productTileTemplateUrl = document.location.origin + `/products/${handle}`;
  // console.log(document.location.origin);
  // console.log(productTileTemplateUrl);

    jQuery
    .ajax({
      url: productTileTemplateUrl,
      dataType: "json",
    })
    .done(function (data) {
      // console.table(data);
      console.log(data);
      console.log(data.product.id);
      console.log(data.product.title);
      console.log(data.product.image.src);
      console.log(data.product.variants[0].price);
let productCard = `
<div class="product__card">
  <div class="product__card--img">
    <a href="{{ product.url | within: collection }}" class="product__card--link">
      <div class="product__card--image--wrapper">
        {% if product.featured_image != blank %}
        <!-- [200,400,600,700,800,900,1000,1200] -->
        <img loading="lazy" id="Image-{{ image.id }}" class="blur-up responsive-image__image lazyload"
          src="{{ product.featured_image | image_url: width: '300x', format: 'pjpg' }}"
          data-src="{{ product.featured_image | image_url: width: '300x', format: 'pjpg' }}"
          data-aspectratio="{{ product.featured_image.aspect_ratio }}"
          data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]" data-sizes="auto"
          data-parent-fit="cover" alt="{{ product.feature_image.alt }}">
        {% comment %}
        {% endcomment %}
        {% else %}
        {{ 'product-1' | placeholder_svg_tag: 'product-img' }}
        {% endif %}

      </div>
    </a>
    <div class="product__card-cta quick-view-button">
      <a href="javascript:void(0)" id="productInfoAnchor" class="quick-view" product-handle="{{ product.handle }}"
        product-price="{{ product.price | money_without_trailing_zeros }}">Quick View</a>
    </div>
  </div>
  <div class="product__card--content">
    <a href="{{ product.url | within: collection }}" class="product__card--link">
      <h2 itemprop="name" class="product__title">{{ product.title }}</h2>
      <div class="product__variant--price">
        {% if product.price_varies %}
        <p>From {{ product.price_min | money_with_currency }} to {{ product.price_max | money_without_currency }}</p>
        {% else %}
        <p>
          {% if product.compare_at_price_max > product.price %}
          <span><s>{{ product.compare_at_price_max | money_with_currency }}</s></span>
          <span>{{ product.price | money_with_currency }}</span>
          {% else %}
          <span>{{ product.price | money_with_currency }}</span>
          {% endif %}
        </p>
        {% endif %}
      </div>
        {% if product.variants.size > 1 %}
        <div class="product__variant--list">
          <span class="product__variant--list-title">
            {{product.options }} :
          </span>
          {% for variant in product.variants %}
          {% if variant.inventory_quantity == 0 %} <s>  {% endif %}
          <span class="product__variant--list-name"> {{ variant.title }} </span>
          {% if variant.inventory_quantity == 0 %} </s>  {% endif %}
          {% endfor %}
        </div>
        {% endif %}
    </a>
  </div>
</div>`;

    });

  // return fetch(productTileTemplateUrl)
  // .then((res) => res.text())
  // .then((res) => {
  //   const text = res;
  //   const parser = new DOMParser();
  //   const htmlDocument = parser.parseFromString(text, 'text/html');
  //   const productCard = htmlDocument.documentElement.querySelector(selectors.productCard);
  //   return productCard.outerHTML;
  // })
  // .catch((err) => console.error(`[Shopify Wishlist] Failed to load content for handle: ${handle}`, err));
};

const setupGrid = async (grid) => {
  const wishlist = getWishlist();
  const requests = wishlist.map(fetchProductCardHTML);
  const responses = await Promise.all(requests);
  const wishlistProductCards = responses.join('');
  grid.innerHTML = wishlistProductCards;
  grid.classList.add(GRID_LOADED_CLASS);
  initButtons();

  const event = new CustomEvent('shopify-wishlist:init-product-grid', {
    detail: { wishlist: wishlist }
  });
  document.dispatchEvent(event);
};

const setupButtons = (buttons) => {
  buttons.forEach((button) => {
    const productHandle = button.dataset.productHandle || false;
    if (!productHandle) return console.error('[Shopify Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.');
    if (wishlistContains(productHandle)) button.classList.add(BUTTON_ACTIVE_CLASS);
    button.addEventListener('click', () => {
      updateWishlist(productHandle);
      button.classList.toggle(BUTTON_ACTIVE_CLASS);
    });
  });
};

const initGrid = () => {
  const grid = document.querySelector(selectors.grid) || false;
  if (grid) setupGrid(grid);
};

const initButtons = () => {
  const buttons = document.querySelectorAll(selectors.button) || [];
  if (buttons.length) setupButtons(buttons);
  else return;
  const event = new CustomEvent('shopify-wishlist:init-buttons', {
    detail: { wishlist: getWishlist() }
  });
  document.dispatchEvent(event);
};

const getWishlist = () => {
  const wishlist = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY) || false;
  if (wishlist) return wishlist.split(LOCAL_STORAGE_DELIMITER);
  return [];
};

const setWishlist = (array) => {
  const wishlist = array.join(LOCAL_STORAGE_DELIMITER);
  if (array.length) localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, wishlist);
  else localStorage.removeItem(LOCAL_STORAGE_WISHLIST_KEY);

  const event = new CustomEvent('shopify-wishlist:updated', {
    detail: { wishlist: array }
  });
  document.dispatchEvent(event);

  return wishlist;
};

const updateWishlist = (handle) => {
  const wishlist = getWishlist();
  const indexInWishlist = wishlist.indexOf(handle);
  if (indexInWishlist === -1) wishlist.push(handle);
  else wishlist.splice(indexInWishlist, 1);
  return setWishlist(wishlist);
};

const wishlistContains = (handle) => {
  const wishlist = getWishlist();
  return wishlist.includes(handle);
};

const resetWishlist = () => {
  return setWishlist([]);
};
