#wishlist-items-container {
    max-width: 1180px;
    margin: auto;
  }

  #wishlist-items-container .swym-wishlist-grid {
    max-width: 900px;
    margin: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }

  .swym-wishlist-grid .swym-is-anchor {
    opacity: 1;
    cursor: pointer;
    text-decoration: none;
    touch-action: manipulation;
  }
  .swym-wishlist-grid * {
    font-size: 100%;
    font: inherit;
    font-family: "HelveticaNeue",Helvetica,Verdana,Arial,sans-serif;
    line-height: 1.4em;
    vertical-align: baseline;
    box-sizing: border-box;
    border: 0;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-transform: none;
  }

  a.swym-wishlist-item.swym-is-anchor {
    background: #fff;
    border: 1px solid #333;
    width: 21%;
    margin: 0 4% 4% 0;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    cursor: pointer;
  }

  button.swym-delete-btn.swym-nav.swym-nav-1.swym-is-button {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 25px;
    height: 25PX;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swym-wishlist-grid .swym-wishlist-image-wrapper {
    overflow: hidden !important;
    height: 180px;
  }

  .swym-wishlist-grid .swym-wishlist-image-wrapper img {
    max-width: 100%;
  }

  .swym-wishlist-grid .swym-is-button {
    text-align: left;
    background: inherit;
    height: auto;
    width: auto;
    z-index: auto;
    display: inline-block;
    background: 0;
    border: 0;
    text-transform: none;
    bottom: auto;
    box-shadow: none;
    clear: none;
    cursor: pointer;
    font-family: inherit;
    font-size: medium;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    height: auto;
    left: auto;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
    opacity: 1;
    padding: 0;
    position: static;
    right: auto;
    text-align: inherit;
    text-decoration: none;
    text-transform: none;
    top: auto;
    transform: none;
    visibility: visible;
  }

  .swym-wishlist-grid .swym-wishlist-item .swym-delete-btn ::before {
    color: #000;
    content: "X";
    font-size: 16px;
  }

  button.swym-add-to-cart-btn.swym-button.swym-button-1.swym-is-button.swym-is-button {
    z-index : 1000;
  }

  button.swym-delete-btn.swym-nav.swym-nav-1.swym-is-button {
    z-index : 1000;
  }
  .swym-is-button .swym-title.swym-title-1 {
    font-weight: bold;
    font-size: 16px;
    color: #4f4f4f;
    margin: 12px 15px 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .swym-wishlist-grid .swym-wishlist-item .swym-variant-title {
    font-size: 14px;
    line-height: 16px;
    color: #333;
    margin: 0 15px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .swym-wishlist-grid .swym-wishlist-item .swym-product-price {
    color: #333;
    font-weight: bold;
    font-size: 18px;
    padding: 0 15px 13px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .swym-wishlist-grid .swym-product-price .swym-product-final-price {
    display: inline-block;
    margin-right: .4em;
  }

  .swym-wishlist-grid .swym-wishlist-item .swym-add-to-cart-btn {
    background: #dc3b1a;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    padding: 6px;
    display: block;
    color: #fff;
  }


  /*   Mobile Screens   */
  @media only screen and (max-width: 900px){
    #wishlist-items-container .swym-wishlist-grid .swym-wishlist-item {
      width: 48%;
      max-width: none;
      margin: 0 4% 4% 0;
    }
    #wishlist-items-container .swym-wishlist-grid .swym-wishlist-item {
      width: auto ;
      margin: 0 0 4% 0;
      padding: 0px;
    }

    #wishlist-items-container .swym-wishlist-grid {
      justify-content: center;
    }
  }

  /*   Ipad   */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
      .swym-wishlist-grid .swym-wishlist-image-wrapper {
        overflow: hidden !important;
        height: 280px;
      }
    }

  /* Landscape */
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {
      .swym-wishlist-grid .swym-wishlist-image-wrapper {
        overflow: hidden !important;
        height: 100px;
      }
    }

  button#swym-custom-add-toCartBtn[data-state-cart="swym-added"]{
    background : green;
  }