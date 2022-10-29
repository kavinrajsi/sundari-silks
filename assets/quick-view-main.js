var productInfoAnchors = document.querySelectorAll("#productInfoAnchor");
var productModal;

if( document.getElementById('productInfoModal') != null ) {
    productModal = new bootstrap.Modal(document.getElementById('productInfoModal'), {});
}

if(productInfoAnchors.length > 0) {
    productInfoAnchors.forEach(item => {
        item.addEventListener("click", event => {

            var url = '/products/' + item.getAttribute('product-handle') + '.js';
            var url2 = '/products/' + item.getAttribute('product-handle') + '.json';
            console.log(url2);

            fetch(url)
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);

                document.getElementById("productInfoImg").src = data.images[0];
                document.getElementById("productInfoTitle").innerHTML = data.title;
                document.getElementById("productInfoPrice").innerHTML = item.getAttribute('product-price');
                document.getElementById("productInfoDescription").innerHTML = data.description;

                var variants = data.variants;
                var variantSelect = document.getElementById("modalItemID");

                variantSelect.innerHTML = '';

                variants.forEach(function( variant, index) {
                    console.log(variant);

                    variantSelect.options[variantSelect.options.length] = new Option(variant.option1, variant.id);
                });

                productModal.show();
            });


        });
    });
}

var modalAddToCartForm = document.querySelector("#addToCartForm");

if( modalAddToCartForm != null ) {
    modalAddToCartForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let formData = {
            'items': [
                {
                    'id': document.getElementById("modalItemID").value,
                    'quantity': document.getElementById("modalItemQuantity").value
                }
            ]
        };

        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            // update_cart();
        })
        .catch((err) => {
            console.error('Error: ' + err);
        })
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // update_cart();
});

// function update_cart() {
//     fetch('/cart.js')
//     .then((resp) => resp.json())
//     .then((data) => document.getElementById("numberOfCartItems").innerHTML = data.items.length)
//     .catch((err) => console.error(err));
// }
