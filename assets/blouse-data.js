
    // var myProduct = {{ product | json}};
    // var customTags = myProduct.tags;
    // document.addEventListener('readystatechange', event => {
    //   // When HTML/DOM elements are ready:
    //   if (event.target.readyState === "interactive") {
    //     console.log("dom interactive");
    //   }
    //   // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
    //   if (event.target.readyState === "complete") {
    //     console.log("dom complete");
    //     var withBlouse = customTags.filter(v => v.toLocaleLowerCase() === 'with blouse') || [];
    //     if (withBlouse.length) {
    //       $(".blouse-stitching").removeClass('hide');
    //     } else {
    //       var isSaree = myProduct.title.match(/saree/gi) || [];
    //       isSaree = isSaree.length;
    //       var isBlouse = customTags.filter(v => (v.toLocaleLowerCase().match(/blouse/gi) || []).length);
    //       isBlouse = isBlouse.length;
    //       if (isSaree || isBlouse) {
    //         $(".blouse-stitching").removeClass('hide');
    //         $('.blouse-stitching .hulkapps_option_set .hulkapps_option:nth-child(2)').remove();
    //       }
    //     }
    //   }
    // });


    $(".blouse-stitching").on('change', function (e) {
      console.log('blouse stitching');
      var blouseStiching;
      console.log('--');
      var measurementType = ['', 'plain blouse', 'embroidered blouse'];
      var measurementArray = [];
      var index = $("select[name='properties[Alankara Blouse Stitching]']").prop('selectedIndex');
      var blouseStiching = $("select[name='properties[Alankara Blouse Stitching]']").val();
      var blouseStichingData = $("select[name='properties[Alankara Blouse Stitching]'] :selected").attr("data-conditional-value");
      console.log("blouse select index :" + index);
      console.log("blouse select blouseStiching :" + blouseStiching);
      $("#add-measurement-link").addClass("hide");
      // -- find the customer if logged in or not --/
      // if blouse stitching index is greater then 1
      if (index > 0) {
        $(".hulkapps_submit_cart").prop('disabled', true);
        $(".shopify-payment-button__button").prop('disabled', true);
        console.log('index > 0 if remove class if');
      } else {
        $(".hulkapps_submit_cart").prop('disabled', false);
        $(".shopify-payment-button__button").prop('disabled', false);
        console.log('index > 0 else remove class else');
      }
      // don't know how this function works but need to check how this work to show please add measurement <ADD> btn
      var currentTypeMeasurements = measurementArray.filter(v => v.type === measurementType[index]) || [];
      console.log(currentTypeMeasurements);
      if (index && !currentTypeMeasurements.length) {
        console.log(index, currentTypeMeasurements, currentTypeMeasurements.length);
        $("#add-measurement-link").removeClass("hide");
        //$(".measurement-select").addClass("hide");
        $(".hulkapps_submit_cart").prop('disabled', true);
        $(".shopify-payment-button__button").prop('disabled', true);
        console.log('index && currentTypeMeasurements length if');
        if (index == 1) {
          $("#select-measurement-title").text("Select your Plain blouse measurement");
        } else if (index == 2) {
          $("#select-measurement-title").text("Select your Embroidered blouse measurement");
        }
      } else {
        console.log('index && currentTypeMeasurements length else');
      }
    });
    // add measurement link btn select function
    $('#addMeasurementLink').click(function () { setProductValues(); });
    function setProductValues() {
      let picoFallsOption;
      let measurementTypeOption;
      let quantity = $('input[name="quantity"]')[0].value;
      if (!!$('.hulkapps_check_option > input') && $('.hulkapps_check_option > input').length > 0) {
        picoFallsOption = $('.hulkapps_check_option > input')[0].checked;
      }
      if ($('.hulkapps_option_value > select') && $('.hulkapps_option_value > select').length > 0) {
        measurementTypeOption = $('.hulkapps_option_value > select')[0].value;
      }
      var selectedProduct = {
        product: window.location.pathname.split('/')[2],
        quantity,
        picoFallsOption,
        measurementTypeOption
      };
      localStorage.setItem('selectedProductValues', JSON.stringify(selectedProduct));
      console.log('local selectProduct');
      console.log(localStorage);
      console.log(localStorage.setItem);
    }
    // if we have measurement id in url
    $(window).on('load', function () {
      console.log('value from measurement page');
      // if we have measurement id in the url
      if (window.location.search.includes("?measurement_id=")) {
        console.log(window.location);
        var queryString = window.location.search;
        console.log(queryString);
        var urlParams = new URLSearchParams(queryString);
        var productURLb = urlParams.get('measurement_id');
        console.log(productURLb);
        console.log(JSON.parse(localStorage.getItem('selectedProductValues')));
        var productValues = JSON.parse(localStorage.getItem('selectedProductValues'));
        // check the product id in localstorage
        if (productValues != null || productValues != undefined) {
          console.log('checking prodcut value not null in localstorage if ');
          // trying to access the local storage
          if (productURLb === productValues.measurement.id) {
            console.log('URL id matching with localstorage');
            // pass the qty
            if (!!productValues['quantity']) {
              $('input[name="quantity"]')[0].value = productValues['quantity'];
            }
            // check the pico fall if we added previously
            if (Object.keys(productValues).includes('picoFallsOption')) {
              console.log('object key productValue picoFallsOption');
              if (productValues['picoFallsOption'] === false) {
                $('.hulkapps_check_option > input').click();
                console.log('if object key productValue picoFallsOption');
              }
              else {
                // Just small hackie
                $('.hulkapps_check_option > input').click();
                $('.hulkapps_check_option > input').click();
                console.log('else object key productValue picoFallsOption');
              }
            }
            // select the blouse option select in hulk app
            $('.hulkapps_check_option > input').click();
            if (Object.keys(productValues).includes('measurementTypeOption')) {
              var measurmentType = productValues['measurement'].type.startsWith('plain')
                ? $('.hulkapps_option_value > select option')[1].value : $('.hulkapps_option_value > select option')[2].value;
              $('.hulkapps_option_value > select')[0].value = measurmentType;
              console.log(measurmentType);
              console.log('.hulkapps_check_option > input');
            }
            // conver and load data in hidden input
            // enable the select option
            // $(".measurement-select").removeClass("hide");
            $("#measurement-data").removeClass("hide");
            var selectedMeasurement = encodeMeasurement([productValues['measurement']])[0];
            var measurementObj = selectedMeasurement;
            var measurementValues = `<input readonly type="hidden" name="properties[Measurements]" value="-"><div class="row">`;
            measurementObj.keyValues.forEach(function (k) {
              measurementValues += `<div class="col-6"><label for="${k.keyLabel}">${k.keyLabel}</label><input readonly type="text" name="properties[${k.keyLabel}]" value="${k.valueLabel}"></div>`;
            });
            measurementValues += `</div>`;
            console.log('timeout 4000');
            $("#measurement-data").empty().append(measurementValues);
            $('#select-measurement')[0].value = JSON.stringify(selectedMeasurement);
            var cusMadTitle = $("input[name='properties[Title]']").val();
            $('#select-measurement').append(`<option value="${cusMadTitle}" selected>${cusMadTitle}</option>`);
            console.log(measurementValues);
            console.log(selectedMeasurement);
          } else {
            console.log('URL id not matching with localstorage');
          }
        } else {
          console.log('checking prodcut value not null in localstorage else ');
        }
      } else {
        console.log(window.location);
        console.log('no value from measurement page');
      }
    });

    function encodeMeasurement(list) {
      console.log('encodeMeasurement');
      let updatedMeasurementList = [];
      for (let i = 0; i < list.length; i++) {
        let keyValueObject = {};
        let keyValues = [];
        Object.keys(list[i]).forEach(key => {
          if (key !== 'id' && key !== 'type') {
            let object = {};
            object['key'] = key;
            object['keyLabel'] = capitalizeTheFirstLetterOfEachWord(key.replaceAll('_', ' '));
            object['value'] = list[i][key];
            object['valueLabel'] = capitalizeTheFirstLetterOfEachWord(list[i][key].replaceAll('-', ' '));
            keyValues.push(object);
          } else {
            keyValueObject[key] = list[i][key];
          }
        });
        keyValueObject['keyValues'] = keyValues;
        updatedMeasurementList.push(keyValueObject);
      }
      return updatedMeasurementList;
    }
    function capitalizeTheFirstLetterOfEachWord(words) {
      console.log('capitalizeTheFirstLetterOfEachWord');
      var separateWord = words.toLowerCase().split(' ');
      for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
      }
      return separateWord.join(' ');
    }

