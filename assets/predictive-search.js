class PredictiveSearch extends HTMLElement {
  constructor() {
    super();

    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector('#predictive-search');

    this.input.addEventListener('input', this.debounce((event) => {
      this.onChange(event);
    }, 300).bind(this));
  }a

  onChange() {
    const searchTerm = this.input.value.trim();

    if (!searchTerm.length) {
      this.close();
      return;
    }

    this.getSearchResults(searchTerm);
  }

  getSearchResults(searchTerm) {
    fetch(`/search/suggest?q=${searchTerm}&resources[type]=product&resources[limit]=4&section_id=predictive-search`)
      .then((response) => {
        if (!response.ok) {
          var error = new Error(response.status);
          this.close();
          throw error;
        }

        return response.text();
      })
      .then((text) => {
        const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
        this.predictiveSearchResults.innerHTML = resultsMarkup;
        this.open();
      })
      .catch((error) => {
        this.close();
        throw error;
      });
  }

  open() {
    console.log(this + 'open');
    this.predictiveSearchResults.style.display = 'block';
  }

  close() {
    console.log(this + 'close');
    this.predictiveSearchResults.style.display = 'none';
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
}

customElements.define('predictive-search', PredictiveSearch);

// $('#Search').keyup(function(){
//   var q = $('#Search').val();
//   var b = '&resources[type]=product'

//   $.ajax('/search/suggest.json?q=' + q + b,{
//     type: 'GET',
//     dataType: 'json', // added data type
//     success: function(response) {
//         console.log(response);
//         var productSuggestions = response.resources.results.products;
//         if (productSuggestions.length > 0) {
//           $("#searchResults").empty()
//           $(productSuggestions).each(function() {
//             $("#searchResults").append(
//               '<li class="list-group-item list-group-item-action d-flex align-items-center"><div class="image-parent mr-3"><img class="img-fluid" src="' + this.featured_image.url + '"/></div><div><p class="mb-0">'+ this.title +'</p><small>' + this.body + '</small></div><p class="ms-auto">' + this.price + '</p></li>'
//             );
//             console.log(this.title);
//             console.log(this.price);
//             console.log(this.featured_image.url);
//           });
//         } else {
//           $("#searchResults").empty().append(
//               '<li class="list-group-item list-group-item-action d-flex align-items-center"><small>No Results Found</small></li>'
//           );
//         }
//     }
//   });
// });
