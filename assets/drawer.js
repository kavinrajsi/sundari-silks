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
          if (data.items.length > 0) {
            data.items.forEach(function (product, index) {
              daad +=
                '<div class="cart__item"><div class="card__item-image"><img src="' +
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
                '</span></p><p class=""><a class="removeCta" href="/cart/change?line=' +
                index +
                1 +
                '&amp;quantity=1"><svg width="16" height="16"> <use href="#trash-mini" /> </svg> Remove</a></p></div></div>';
            });
            document.getElementById("cart__drawer_items").innerHTML = daad;
          } else {
            $(".cart-count").text(data.items.length);
            $(".cart-count").text(data.items.length);

            if (data.items.length == 0) {
              $(".cart-item-no").removeAttr("hidden");
              $(".cart-count").attr("hidden", "hidden");
            }
            $(".cart-item-count").text(data.items.length);

            document
              .querySelector(".cartpopup-button-alter")
              .setAttribute("disabled", "disabled");
            document.querySelector(
              ".cartpopup-button-alter"
            ).style.pointerEvents = "none";
          }
          // document.getElementById('cart__total_price').innerHTML = '<p><span class="money" data-currency-inr="'+data.currency+'.'+Shopify.formatMoney(data.total_price)+'">'+ data.currency +'. '+ Shopify.formatMoney(data.total_price) + '</span></p>';
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
