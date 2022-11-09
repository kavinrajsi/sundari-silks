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
