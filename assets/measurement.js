$(document).ready(function () {
// Data
  let measurement = measurementData.measurement;
  console.log(measurement);
  const measureBd = [
    { "id": "1", "bd_name": "Embroidery Design", "blouse_design_name": "embroidered-blouse", "blouse_design_value": "embroidered-blouse", "blouse_design_image_name": "blouse_designs-embroidered-blouse.png" },
    { "id": "2", "bd_name": "Plain - No Embroidery", "blouse_design_name": "plain-blouse", "blouse_design_value": "plain-blouse", "blouse_design_image_name": "blouse-designs-plain-blouse.png" },
  ];
  
  const measurementsFrontNeck = [
    { "id": "1", "name": "Axe Neck", "value": "axe-neck", "image_name": "blouse-front-necks-axe-neck.png", "parents_blouse": "1" },
    { "id": "2", "name": "Boat Neck", "value": "boat-neck", "image_name": "blouse-front-necks-boat-neck.png", "parents_blouse": "1" },
    { "id": "3", "name": "Chinese Mandarin Collar", "value": "chinese-mandarin-collar", "image_name": "blouse-front-necks-chinese-mandarin-collar.png", "parents_blouse": "1" },
    { "id": "4", "name": "Collar Deep V Neck", "value": "collar-deep-v-neck", "image_name": "blouse-front-necks-collar-deep-v-neck.png", "parents_blouse": "1" },
    { "id": "5", "name": "Collar Pot Shape Neck", "value": "collar-pot-shape-neck", "image_name": "blouse-front-necks-collar-pot-shape-neck.png", "parents_blouse": "1" },
    { "id": "6", "name": "Collar U Neck", "value": "collar-u-neck", "image_name": "blouse-front-necks-collar-u-neck.png", "parents_blouse": "1" },
    { "id": "7", "name": "Collar V Neck", "value": "collar-v-neck", "image_name": "blouse-front-necks-collar-v-neck.png", "parents_blouse": "1" },
    { "id": "8", "name": "High Collar Keyhole", "value": "high-collar-keyhole", "image_name": "blouse-front-necks-high-collar-keyhole.png", "parents_blouse": "1" },
    { "id": "9", "name": "High Neck", "value": "high-neck", "image_name": "blouse-front-necks-high-neck.png", "parents_blouse": "1" },
    { "id": "10", "name": "Leaf Neck", "value": "leaf-neck", "image_name": "blouse-front-necks-leaf-neck.png", "parents_blouse": "1" },
    { "id": "11", "name": "Nehru Collar Neck", "value": "nehru-collar", "image_name": "blouse-front-necks-nehru-collar.png", "parents_blouse": "1" },
    { "id": "12", "name": "Round Pot Neck", "value": "round-pot-neck", "image_name": "blouse-front-necks-round-pot-neck.png", "parents_blouse": "1" },
    { "id": "13", "name": "Round V Neck", "value": "round-v-neck", "image_name": "blouse-front-necks-round-v-neck.png", "parents_blouse": "1" },
    { "id": "14", "name": "Shawl Neck", "value": "shawl-neck", "image_name": "blouse-front-necks-shawl-neck.png", "parents_blouse": "1" },
    { "id": "15", "name": "Square Neck", "value": "square-neck", "image_name": "blouse-front-necks-square-neck.png", "parents_blouse": "1" },
    { "id": "16", "name": "Square Pot Neck", "value": "square-pot-neck", "image_name": "blouse-front-necks-square-pot-neck.png", "parents_blouse": "1" },
    { "id": "17", "name": "Square Round Neck", "value": "square-round-neck", "image_name": "blouse-front-necks-square-round-neck.png", "parents_blouse": "1" },
    { "id": "18", "name": "Sweetheart Neck", "value": "sweetheart-neck", "image_name": "blouse-front-necks-sweetheart-neck.png", "parents_blouse": "1" },
    { "id": "19", "name": "U Neck", "value": "u-neck", "image_name": "blouse-front-necks-u-neck.png", "parents_blouse": "1" },
    { "id": "20", "name": "V Neck", "value": "v-neck", "image_name": "blouse-front-necks-v-neck.png", "parents_blouse": "1" },
    { "id": "21", "name": "Wide Sweetheart Neck", "value": "wide-sweetheart", "image_name": "blouse-front-necks-wide-sweetheart.png", "parents_blouse": "1" },
    { "id": "22", "name": "Wide V Neck", "value": "wide-v-neck", "image_name": "blouse-front-necks-wide-v-neck.png", "parents_blouse": "1" },
    { "id": "23", "name": "Axe Neck", "value": "axe-neck", "image_name": "blouse-front-necks-axe-neck.png", "parents_blouse": "2" },
    { "id": "24", "name": "Boat Neck", "value": "boat-neck", "image_name": "blouse-front-necks-boat-neck.png", "parents_blouse": "2" },
    { "id": "25", "name": "Chinese Mandarin Collar", "value": "chinese-mandarin-collar", "image_name": "blouse-front-necks-chinese-mandarin-collar.png", "parents_blouse": "2" },
    { "id": "26", "name": "Collar Deep V Neck", "value": "collar-deep-v-neck", "image_name": "blouse-front-necks-collar-deep-v-neck.png", "parents_blouse": "2" },
    { "id": "27", "name": "Collar Pot Shape Neck", "value": "collar-pot-shape-neck", "image_name": "blouse-front-necks-collar-pot-shape-neck.png", "parents_blouse": "2" },
    { "id": "28", "name": "Collar U Neck", "value": "collar-u-neck", "image_name": "blouse-front-necks-collar-u-neck.png", "parents_blouse": "2" },
    { "id": "29", "name": "Collar V Neck", "value": "collar-v-neck", "image_name": "blouse-front-necks-collar-v-neck.png", "parents_blouse": "2" },
    { "id": "30", "name": "High Collar Keyhole", "value": "high-collar-keyhole", "image_name": "blouse-front-necks-high-collar-keyhole.png", "parents_blouse": "2" },
    { "id": "31", "name": "High Neck", "value": "high-neck", "image_name": "blouse-front-necks-high-neck.png", "parents_blouse": "2" },
    { "id": "32", "name": "Leaf Neck", "value": "leaf-neck", "image_name": "blouse-front-necks-leaf-neck.png", "parents_blouse": "2" },
    { "id": "33", "name": "Nehru Collar Neck", "value": "nehru-collar", "image_name": "blouse-front-necks-nehru-collar.png", "parents_blouse": "2" },
    { "id": "34", "name": "Round Pot Neck", "value": "round-pot-neck", "image_name": "blouse-front-necks-round-pot-neck.png", "parents_blouse": "2" },
    { "id": "35", "name": "Round V Neck", "value": "round-v-neck", "image_name": "blouse-front-necks-round-v-neck.png", "parents_blouse": "2" },
    { "id": "36", "name": "Shawl Neck", "value": "shawl-neck", "image_name": "blouse-front-necks-shawl-neck.png", "parents_blouse": "2" },
    { "id": "37", "name": "Square Neck", "value": "square-neck", "image_name": "blouse-front-necks-square-neck.png", "parents_blouse": "2" },
    { "id": "38", "name": "Square Pot Neck", "value": "square-pot-neck", "image_name": "blouse-front-necks-square-pot-neck.png", "parents_blouse": "2" },
    { "id": "39", "name": "Square Round Neck", "value": "square-round-neck", "image_name": "blouse-front-necks-square-round-neck.png", "parents_blouse": "2" },
    { "id": "40", "name": "Sweetheart Neck", "value": "sweetheart-neck", "image_name": "blouse-front-necks-sweetheart-neck.png", "parents_blouse": "2" },
    { "id": "41", "name": "U Neck", "value": "u-neck", "image_name": "blouse-front-necks-u-neck.png", "parents_blouse": "2" },
    { "id": "42", "name": "V Neck", "value": "v-neck", "image_name": "blouse-front-necks-v-neck.png", "parents_blouse": "2" },
    { "id": "43", "name": "Wide Sweetheart Neck", "value": "wide-sweetheart", "image_name": "blouse-front-necks-wide-sweetheart.png", "parents_blouse": "2" },
    { "id": "44", "name": "Wide V Neck", "value": "wide-v-neck", "image_name": "blouse-front-necks-wide-v-neck.png", "parents_blouse": "2" }
  ];
  
  const measurementsBackNeck = [
    { "id": "27", "name": "Arrow", "value": "arrow-back", "image_name": "blouse-back-necks-arrow-back.png", "parents_front_neck": "1" },
    { "id": "28", "name": "U Back", "value": "u-back", "image_name": "blouse-back-necks-u-back.png", "parents_front_neck": "1" },
    { "id": "29", "name": "U Neck With Criss Cross Tie Up Back", "value": "u-neck-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-u-neck-with-criss-cross-tie-up-back.png", "parents_front_neck": "1" },
    { "id": "30", "name": "V Back", "value": "v-back", "image_name": "blouse-back-necks-v-back.png", "parents_front_neck": "1" },
    { "id": "31", "name": "Drop Shape Keyhole With Tie Up Back", "value": "drop-shape-keyhole-with-tie-up-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-tie-up-back.png", "parents_front_neck": "1" },
    { "id": "32", "name": "Leaf With Tie Up Back", "value": "leaf-with-tie-up-back", "image_name": "blouse-back-necks-leaf-with-tie-up-back.png", "parents_front_neck": "1" },
    { "id": "33", "name": "Square Neck With Broad Strap", "value": "square-neck-with-broad-strap", "image_name": "blouse-back-necks-square-neck-with-broad-strap.png", "parents_front_neck": "1" },
    { "id": "34", "name": "Boat Back", "value": "boat-back", "image_name": "blouse-back-necks-boat-back.png", "parents_front_neck": "2" },
    { "id": "35", "name": "Boat With Slit Back", "value": "boat-with-slit-back", "image_name": "blouse-back-necks-boat-with-slit-back.png", "parents_front_neck": "2" },
    { "id": "36", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "2" },
    { "id": "37", "name": "Round Hole With Button Back", "value": "round-hole-with-button-back", "image_name": "blouse-back-necks-round-hole-with-button-back.png", "parents_front_neck": "2" },
    { "id": "38", "name": "Mandarin Collar Back", "value": "mandarin-collar-back", "image_name": "blouse-back-necks-mandarin-collar-back.png", "parents_front_neck": "3" },
    { "id": "39", "name": "Mandarin Collar Keyhole With String Back", "value": "mandarin-collar-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-keyhole-with-string-back.png", "parents_front_neck": "3" },
    { "id": "40", "name": "Simple With Multiple Triangles", "value": "simple-with-multiple-triangles", "image_name": "blouse-back-necks-simple-with-multiple-triangles.png", "parents_front_neck": "3" },
    { "id": "41", "name": "Bib With Diamond Keyhole Back", "value": "bib-with-diamond-keyhole-back", "image_name": "blouse-back-necks-bib-with-diamond-keyhole-back.png", "parents_front_neck": "4" },
    { "id": "42", "name": "Mandarin Collar Keyhole With String Back", "value": "mandarin-collar-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-keyhole-with-string-back.png", "parents_front_neck": "4" },
    { "id": "43", "name": "Mandarin Collar Wide Keyhole With String Back", "value": "mandarin-collar-wide-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-wide-keyhole-with-string-back.png", "parents_front_neck": "4" },
    { "id": "44", "name": "Simple With Multiple Triangles", "value": "simple-with-multiple-triangles", "image_name": "blouse-back-necks-simple-with-multiple-triangles.png", "parents_front_neck": "4" },
    { "id": "45", "name": "Bib With Diamond Keyhole Back", "value": "bib-with-diamond-keyhole-back", "image_name": "blouse-back-necks-bib-with-diamond-keyhole-back.png", "parents_front_neck": "5" },
    { "id": "46", "name": "Mandarin Collar Back", "value": "mandarin-collar-back", "image_name": "blouse-back-necks-mandarin-collar-back.png", "parents_front_neck": "5" },
    { "id": "47", "name": "Mandarin Collar Keyhole With String Back", "value": "mandarin-collar-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-keyhole-with-string-back.png", "parents_front_neck": "5" },
    { "id": "48", "name": "Mandarin Collar Wide Keyhole With String Back", "value": "mandarin-collar-wide-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-wide-keyhole-with-string-back.png", "parents_front_neck": "5" },
    { "id": "49", "name": "Simple With Multiple Triangles", "value": "simple-with-multiple-triangles", "image_name": "blouse-back-necks-simple-with-multiple-triangles.png", "parents_front_neck": "5" },
    { "id": "50", "name": "Mandarin Collar Back", "value": "mandarin-collar-back", "image_name": "blouse-back-necks-mandarin-collar-back.png", "parents_front_neck": "6" },
    { "id": "51", "name": "Mandarin Collar Keyhole With String Back", "value": "mandarin-collar-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-keyhole-with-string-back.png", "parents_front_neck": "6" },
    { "id": "52", "name": "Mandarin Collar Wide Keyhole With String Back", "value": "mandarin-collar-wide-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-wide-keyhole-with-string-back.png", "parents_front_neck": "6" },
    { "id": "53", "name": "Simple With Multiple Triangles", "value": "simple-with-multiple-triangles", "image_name": "blouse-back-necks-simple-with-multiple-triangles.png", "parents_front_neck": "6" },
    { "id": "54", "name": "Bib With Diamond Keyhole Back", "value": "bib-with-diamond-keyhole-back", "image_name": "blouse-back-necks-bib-with-diamond-keyhole-back.png", "parents_front_neck": "7" },
    { "id": "55", "name": "Mandarin Collar Back", "value": "mandarin-collar-back", "image_name": "blouse-back-necks-mandarin-collar-back.png", "parents_front_neck": "7" },
    { "id": "56", "name": "Mandarin Collar Keyhole With String Back", "value": "mandarin-collar-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-keyhole-with-string-back.png", "parents_front_neck": "7" },
    { "id": "57", "name": "Mandarin Collar Wide Keyhole With String Back", "value": "mandarin-collar-wide-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-wide-keyhole-with-string-back.png", "parents_front_neck": "7" },
    { "id": "58", "name": "Simple With Multiple Triangles", "value": "simple-with-multiple-triangles", "image_name": "blouse-back-necks-simple-with-multiple-triangles.png", "parents_front_neck": "7" },
    { "id": "59", "name": "Double Keyhole Back", "value": "double-keyhole-back", "image_name": "blouse-back-necks-double-keyhole-back.png", "parents_front_neck": "8" },
    { "id": "60", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "8" },
    { "id": "61", "name": "Drop Shape Keyhole With Tie Up Back", "value": "drop-shape-keyhole-with-tie-up-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-tie-up-back.png", "parents_front_neck": "8" },
    { "id": "62", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "8" },
    { "id": "63", "name": "Round Hole With Button Back", "value": "round-hole-with-button-back", "image_name": "blouse-back-necks-round-hole-with-button-back.png", "parents_front_neck": "8" },
    { "id": "64", "name": "Double Keyhole Back", "value": "double-keyhole-back", "image_name": "blouse-back-necks-double-keyhole-back.png", "parents_front_neck": "9" },
    { "id": "65", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "9" },
    { "id": "66", "name": "Razer With Zipper Back", "value": "razer-with-zipper-back", "image_name": "blouse-back-necks-razer-with-zipper-back.png", "parents_front_neck": "9" },
    { "id": "67", "name": "Round Hole With Button Back", "value": "round-hole-with-button-back", "image_name": "blouse-back-necks-round-hole-with-button-back.png", "parents_front_neck": "9" },
    { "id": "68", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "10" },
    { "id": "69", "name": "Drop Shape Keyhole With Tie Up Back", "value": "drop-shape-keyhole-with-tie-up-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-tie-up-back.png", "parents_front_neck": "10" },
    { "id": "70", "name": "Leaf With Tie Up Back", "value": "leaf-with-tie-up-back", "image_name": "blouse-back-necks-leaf-with-tie-up-back.png", "parents_front_neck": "10" },
    { "id": "71", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "10" },
    { "id": "72", "name": "Sweetheart With Tie Up Back", "value": "sweetheart-with-tie-up-back", "image_name": "blouse-back-necks-sweetheart-with-tie-up-back.png", "parents_front_neck": "10" },
    { "id": "73", "name": "Sweetheart Back", "value": "sweetheart-back", "image_name": "blouse-back-necks-sweetheart-back.png", "parents_front_neck": "10" },
    { "id": "74", "name": "U Back", "value": "u-back", "image_name": "blouse-back-necks-u-back.png", "parents_front_neck": "10" },
    { "id": "75", "name": "Square Neck With Broad Strap", "value": "square-neck-with-broad-strap", "image_name": "blouse-back-necks-square-neck-with-broad-strap.png", "parents_front_neck": "10" },
    { "id": "76", "name": "Bib With Diamond Keyhole Back", "value": "bib-with-diamond-keyhole-back", "image_name": "blouse-back-necks-bib-with-diamond-keyhole-back.png", "parents_front_neck": "11" },
    { "id": "77", "name": "Mandarin Collar Back", "value": "mandarin-collar-back", "image_name": "blouse-back-necks-mandarin-collar-back.png", "parents_front_neck": "11" },
    { "id": "78", "name": "Mandarin Collar Wide Keyhole With String Back", "value": "mandarin-collar-wide-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-wide-keyhole-with-string-back.png", "parents_front_neck": "11" },
    { "id": "79", "name": "Simple With Multiple Triangles", "value": "simple-with-multiple-triangles", "image_name": "blouse-back-necks-simple-with-multiple-triangles.png", "parents_front_neck": "11" },
    { "id": "80", "name": "Diamond Back", "value": "diamond-back", "image_name": "blouse-back-necks-diamond-back.png", "parents_front_neck": "11" },
    { "id": "81", "name": "Bib With Diamond Keyhole Back", "value": "bib-with-diamond-keyhole-back", "image_name": "blouse-back-necks-bib-with-diamond-keyhole-back.png", "parents_front_neck": "12" },
    { "id": "82", "name": "Mandarin Collar Wide Keyhole With String Back", "value": "mandarin-collar-wide-keyhole-with-string-back", "image_name": "blouse-back-necks-mandarin-collar-wide-keyhole-with-string-back.png", "parents_front_neck": "12" },
    { "id": "83", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "13" },
    { "id": "84", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "13" },
    { "id": "85", "name": "Round With Criss Cross Tie Up Back", "value": "round-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-round-with-criss-cross-tie-up-back.png", "parents_front_neck": "13" },
    { "id": "86", "name": "Sweetheart With Tie Up Back", "value": "sweetheart-with-tie-up-back", "image_name": "blouse-back-necks-sweetheart-with-tie-up-back.png", "parents_front_neck": "13" },
    { "id": "87", "name": "Sweetheart Back", "value": "sweetheart-back", "image_name": "blouse-back-necks-sweetheart-back.png", "parents_front_neck": "13" },
    { "id": "88", "name": "Bib With Diamond Keyhole Back", "value": "bib-with-diamond-keyhole-back", "image_name": "blouse-back-necks-bib-with-diamond-keyhole-back.png", "parents_front_neck": "14" },
    { "id": "89", "name": "Diamond Back", "value": "diamond-back", "image_name": "blouse-back-necks-diamond-back.png", "parents_front_neck": "14" },
    { "id": "90", "name": "Mandarin Collar Back", "value": "mandarin-collar-back", "image_name": "blouse-back-necks-mandarin-collar-back.png", "parents_front_neck": "14" },
    { "id": "91", "name": "Arrow", "value": "arrow-back", "image_name": "blouse-back-necks-arrow-back.png", "parents_front_neck": "15" },
    { "id": "92", "name": "Round Hole With Button Back", "value": "round-hole-with-button-back", "image_name": "blouse-back-necks-round-hole-with-button-back.png", "parents_front_neck": "15" },
    { "id": "93", "name": "Sweetheart With Tie Up Back", "value": "sweetheart-with-tie-up-back", "image_name": "blouse-back-necks-sweetheart-with-tie-up-back.png", "parents_front_neck": "15" },
    { "id": "94", "name": "Sweetheart Back", "value": "sweetheart-back", "image_name": "blouse-back-necks-sweetheart-back.png", "parents_front_neck": "15" },
    { "id": "95", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "16" },
    { "id": "96", "name": "U Back", "value": "u-back", "image_name": "blouse-back-necks-u-back.png", "parents_front_neck": "16" },
    { "id": "97", "name": "U Neck With Criss Cross Tie Up Back", "value": "u-neck-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-u-neck-with-criss-cross-tie-up-back.png", "parents_front_neck": "16" },
    { "id": "98", "name": "U Neck With Tie Up Back", "value": "u-neck-with-tie-up-back", "image_name": "blouse-back-necks-u-neck-with-tie-up-back.png", "parents_front_neck": "16" },
    { "id": "99", "name": "V Back", "value": "v-back", "image_name": "blouse-back-necks-v-back.png", "parents_front_neck": "16" },
    { "id": "100", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "17" },
    { "id": "101", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "17" },
    { "id": "102", "name": "Razer With Zipper Back", "value": "razer-with-zipper-back", "image_name": "blouse-back-necks-razer-with-zipper-back.png", "parents_front_neck": "17" },
    { "id": "103", "name": "Sweetheart Back", "value": "sweetheart-back", "image_name": "blouse-back-necks-sweetheart-back.png", "parents_front_neck": "17" },
    { "id": "104", "name": "Sweetheart With Tie Up Back", "value": "sweetheart-with-tie-up-back", "image_name": "blouse-back-necks-sweetheart-with-tie-up-back.png", "parents_front_neck": "17" },
    { "id": "105", "name": "Round Hole With Button Back", "value": "round-hole-with-button-back", "image_name": "blouse-back-necks-round-hole-with-button-back.png", "parents_front_neck": "18" },
    { "id": "106", "name": "Round With Criss Cross Tie Up Back", "value": "round-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-round-with-criss-cross-tie-up-back.png", "parents_front_neck": "18" },
    { "id": "107", "name": "Round With Criss Cross Tie Up Back", "value": "round-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-round-with-criss-cross-tie-up-back.png", "parents_front_neck": "18" },
    { "id": "108", "name": "Sweetheart Back", "value": "sweetheart-back", "image_name": "blouse-back-necks-sweetheart-back.png", "parents_front_neck": "18" },
    { "id": "109", "name": "Sweetheart With Tie Up Back", "value": "sweetheart-with-tie-up-back", "image_name": "blouse-back-necks-sweetheart-with-tie-up-back.png", "parents_front_neck": "18" },
    { "id": "110", "name": "U Back", "value": "u-back", "image_name": "blouse-back-necks-u-back.png", "parents_front_neck": "18" },
    { "id": "111", "name": "U Neck With Tie Up Back", "value": "u-neck-with-tie-up-back", "image_name": "blouse-back-necks-u-neck-with-tie-up-back.png", "parents_front_neck": "18" },
    { "id": "112", "name": "Double Keyhole Back", "value": "double-keyhole-back", "image_name": "blouse-back-necks-double-keyhole-back.png", "parents_front_neck": "19" },
    { "id": "113", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "19" },
    { "id": "114", "name": "Glass Back", "value": "glass-back", "image_name": "blouse-back-necks-glass-back.png", "parents_front_neck": "19" },
    { "id": "115", "name": "Glass With Cords Back", "value": "glass-with-cords-back", "image_name": "blouse-back-necks-glass-with-cords-back.png", "parents_front_neck": "19" },
    { "id": "116", "name": "Leaf With Tie Up Back", "value": "leaf-with-tie-up-back", "image_name": "blouse-back-necks-leaf-with-tie-up-back.png", "parents_front_neck": "19" },
    { "id": "117", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "19" },
    { "id": "118", "name": "Double Keyhole Back", "value": "double-keyhole-back", "image_name": "blouse-back-necks-double-keyhole-back.png", "parents_front_neck": "20" },
    { "id": "119", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "20" },
    { "id": "120", "name": "Glass Back", "value": "glass-back", "image_name": "blouse-back-necks-glass-back.png", "parents_front_neck": "20" },
    { "id": "121", "name": "Glass With Cords Back", "value": "glass-with-cords-back", "image_name": "blouse-back-necks-glass-with-cords-back.png", "parents_front_neck": "20" },
    { "id": "122", "name": "V Back", "value": "v-back", "image_name": "blouse-back-necks-v-back.png", "parents_front_neck": "20" },
    { "id": "123", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "21" },
    { "id": "124", "name": "Drop Shape Keyhole With Tie Up Back", "value": "drop-shape-keyhole-with-tie-up-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-tie-up-back.png", "parents_front_neck": "21" },
    { "id": "125", "name": "Round With Criss Cross Tie Up Back", "value": "round-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-round-with-criss-cross-tie-up-back.png", "parents_front_neck": "21" },
    { "id": "126", "name": "Sweetheart Back", "value": "sweetheart-back", "image_name": "blouse-back-necks-sweetheart-back.png", "parents_front_neck": "21" },
    { "id": "127", "name": "Sweetheart With Tie Up Back", "value": "sweetheart-with-tie-up-back", "image_name": "blouse-back-necks-sweetheart-with-tie-up-back.png", "parents_front_neck": "21" },
    { "id": "128", "name": "U Back", "value": "u-back", "image_name": "blouse-back-necks-u-back.png", "parents_front_neck": "21" },
    { "id": "129", "name": "U Neck With Criss Cross Tie Up Back", "value": "u-neck-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-u-neck-with-criss-cross-tie-up-back.png", "parents_front_neck": "21" },
    { "id": "130", "name": "Drop Shape Keyhole With Button Back", "value": "drop-shape-keyhole-with-button-back", "image_name": "blouse-back-necks-drop-shape-keyhole-with-button-back.png", "parents_front_neck": "22" },
    { "id": "131", "name": "Round Back", "value": "round-back", "image_name": "blouse-back-necks-round-back.png", "parents_front_neck": "22" },
    { "id": "132", "name": "Round With Criss Cross Tie Up Back", "value": "round-with-criss-cross-tie-up-back", "image_name": "blouse-back-necks-round-with-criss-cross-tie-up-back.png", "parents_front_neck": "22" },
    { "id": "133", "name": "Sweetheart Back", "value": "sweetheart-back", "image_name": "blouse-back-necks-sweetheart-back.png", "parents_front_neck": "22" },
    { "id": "134", "name": "Sweetheart With Tie Up Back", "value": "sweetheart-with-tie-up-back", "image_name": "blouse-back-necks-sweetheart-with-tie-up-back.png", "parents_front_neck": "22" },
    { "id": "135", "name": "Square Neck With Broad Strap", "value": "square-neck-with-broad-strap", "image_name": "blouse-back-necks-square-neck-with-broad-strap.png", "parents_front_neck": "22" }
  ];
  
  const typesOfSleeves = [
    { "id": "1", "name": "3-4-th-sleeves", "value": "3-4-th-sleeves", "image_name": "blouse-types-of-sleeves-3-4-th-sleeves.png" },
    { "id": "2", "name": "cap-sleeves", "value": "cap-sleeves", "image_name": "blouse-types-of-sleeves-cap-sleeves.png" },
    { "id": "3", "name": "elbow-sleeves", "value": "elbow-sleeves", "image_name": "blouse-types-of-sleeves-elbow-sleeves.png" },
    { "id": "4", "name": "full-sleeves", "value": "full-sleeves", "image_name": "blouse-types-of-sleeves-full-sleeves.png" },
    { "id": "5", "name": "half-sleeves", "value": "half-sleeves", "image_name": "blouse-types-of-sleeves-half-sleeves.png" },
    { "id": "6", "name": "sleeveless", "value": "sleeveless", "image_name": "blouse-types-of-sleeves-sleeveless.png" }
  ];
  
  const openings = [
    { "id": "1", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "arrow-back" },
    { "id": "2", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "arrow-back" },
    { "id": "3", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "boat-back" },
    { "id": "4", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "boat-back" },
    { "id": "6", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "bib-with-diamond-keyhole-back" },
    { "id": "7", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "bib-with-diamond-keyhole-back" },
    { "id": "8", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "boat-with-slit-back" },
    { "id": "9", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "boat-with-slit-back" },
    { "id": "10", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "diamond-back" },
    { "id": "11", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "diamond-back" },
    { "id": "12", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "double-keyhole-back" },
    { "id": "13", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "double-keyhole-back" },
    { "id": "14", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "drop-shape-keyhole-with-button-back" },
    { "id": "15", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "drop-shape-keyhole-with-button-back" },
    { "id": "16", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "drop-shape-keyhole-with-tie-up-back" },
    { "id": "17", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "drop-shape-keyhole-with-tie-up-back" },
    { "id": "18", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "glass-back" },
    { "id": "19", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "glass-back" },
    { "id": "20", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "glass-with-cords-back" },
    { "id": "21", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "glass-with-cords-back" },
    { "id": "22", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "leaf-with-tie-up-back" },
    { "id": "23", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "leaf-with-tie-up-back" },
    { "id": "24", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "mandarin-collar-back" },
    { "id": "25", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "mandarin-collar-back" },
    { "id": "26", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "mandarin-collar-keyhole-with-string-back" },
    { "id": "27", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "mandarin-collar-keyhole-with-string-back" },
    { "id": "28", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "mandarin-collar-wide-keyhole-with-string-back" },
    { "id": "29", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "mandarin-collar-wide-keyhole-with-string-back" },
    { "id": "30", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "razer-with-zipper-back" },
    { "id": "31", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "round-back" },
    { "id": "32", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "round-back" },
    { "id": "33", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "round-hole-with-button-back" },
    { "id": "34", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "round-with-criss-cross-tie-up-back" },
    { "id": "35", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "round-with-criss-cross-tie-up-back" },
    { "id": "36", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "sweetheart-back" },
    { "id": "37", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "sweetheart-back" },
    { "id": "38", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "sweetheart-back" },
    { "id": "39", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "sweetheart-with-tie-up-back" },
    { "id": "40", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "sweetheart-with-tie-up-back" },
    { "id": "41", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "u-back" },
    { "id": "42", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "u-back" },
    { "id": "43", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "u-back" },
    { "id": "44", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "u-neck-with-criss-cross-tie-up-back" },
    { "id": "45", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "u-neck-with-criss-cross-tie-up-back" },
    { "id": "46", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "u-neck-with-tie-up-back" },
    { "id": "47", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "u-neck-with-tie-up-back" },
    { "id": "48", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "u-neck-with-tie-up-back" },
    { "id": "49", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "v-back" },
    { "id": "50", "os_name": "back-opening", "os_value": "back-opening", "os_image_name": "blouse-openings-back-opening.png", "parents_back_neck": "v-back" },
    { "id": "51", "os_name": "side-opening", "os_value": "side-opening", "os_image_name": "blouse-openings-side-opening.png", "parents_back_neck": "simple-with-multiple-triangles" },
    { "id": "52", "os_name": "front-opening", "os_value": "front-opening", "os_image_name": "blouse-openings-front-opening.png", "parents_back_neck": "simple-with-multiple-triangles" }
  ];
  
  let errorMessages = {
    embroidery: 'Please select blouse design type',
    front_neck_designs: "Please select atleast one in Front Neck Design",
    back_neck_designs: "Please select atleast one in Back Neck Design",
    openings: "Please select atleast one in Opening",
    types_of_sleeves: "Please select atleast one in Types of sleeve"
  }
  
  let tabIdMapping = {
    embroidery: "embroidery",
    front_neck_designs: "frontNeckDesign",
    back_neck_designs: "backNeckDesign",
    openings: "sleeveOpeningDesign",
    types_of_sleeves: "sleeveOpeningDesign"
  }
  
  let allowTabNavigation = false;
  
  // Tab panel ids
  const tabIds = ['embroidery', 'frontNeckDesign', 'backNeckDesign', 'sleeveOpeningDesign', 'measurements', 'confirmation'];
  
  // Elements
  let homeSection$ = $('.home-section');
  let measurementSection$ = $('.measurement-section');
  let addNewMeasurementBtn$ = $('.add-new-measurement-btn');
  
  // On page load hiding measurement section
  measurementSection$.hide();
  
  // Add new measurements
  addNewMeasurementBtn$.click(function () {
    homeSection$.hide();
    measurementSection$.show();
    $('.embroidery').addClass('active');
    get_front_neck_designs();
  });
  
  // Select Blouse Type
  $('input[type=radio][name=option-blouse-type]').change(function () {
    // $("#blouse_design_selected").css('display', 'block').html('&nbsp;' + humanize(this.value));
    // measurement['type'] = this.value;
    set_blouse_design();
  });
  
  function get_front_neck_designs() {
    const json = measurementsFrontNeck.filter((val) => val.parents_blouse === "1");
    var html = '';
    var html_selected = '<option value="all">Select</option>';
    for (i = 0; i < json.length; ++i) {
      html = html + '<div class="col-md-3 col-sm-6 col-xs-6 ' + json[i].value + ' all front_neck_url"><div class="product_image"><label class="image-radio"><input type="radio" name="front_neck_design" class="radio_image" value="' + json[i].value + '" /><img src="{{' + json[i].image_name + ' | asset_img_url }}" style="width: 100%" class="img-responsive image_radio"></label></div></div>';
  
      html_selected = html_selected + '<option value=' + json[i].value + '>' + json[i].name + '</option>';
    }
    $('#fn_design').html(html).fadeIn(500);
    $("#select2").html(html_selected).fadeIn(500);
    $('input[name=front_neck_design]').on('change', function () {
      set_front_neck_design($(this).val());
      measurement.front_neck_designs = $(this).val();
      measurement.back_neck_designs = null;
      $('#back_neck_design_selected').empty();
    });
  }
  
  function set_blouse_design() {
    let bd_check = $('input[type=radio].blouse_design:checked').attr('url');
    bd_check = humanize(bd_check);
    $("#blouse_design").val(bd_check);
    $("#blouse_design_selected").css('display', 'block').html('&nbsp;' + humanize(bd_check));
    $("#blouse_design").attr('src', "{{ " + 'blouse-designs-' + measurement.blouse_designs + '.png' + " | asset_img_url }}");
    measurement['type'] = bd_check;
  }
  
  // front design
  function set_front_neck_design(val) {
    $("#front_neck_design_selected").css('display', 'block').html('&nbsp;' + humanize(val));
    $("#front_neck_design").attr('src', "{{ " + 'blouse-front-necks-' + val + '.png' + " | asset_img_url }}");
  }
  
  $('#select2').on('change', function () {
    $(".all").css("display", "none");
    if (this.value == 'all') {
      $(".all").css("display", "block");
    }
    var fnd_name = $("#select2").val();
    if (this.value == fnd_name) {
      $(".col-md-3.col-sm-6.col-xs-6." + fnd_name + ".all.front_neck_url").css("display", "block");
    }
  });
  
  // Moving to back neck design
  function navigateToBackNeck() {
    // proceed
    $('#frontNeckDesign').removeClass("active");
    $('#backNeckDesign').addClass("active");
    get_back_neck_designs();
  }
  
  function get_back_neck_designs() {
    const frontSide = measurementsFrontNeck.find((front) => front.value === measurement['front_neck_designs']);
    if (!frontSide) {
      return;
    }
    const json = measurementsBackNeck.filter((val) => val.parents_front_neck === frontSide.id);
    let html = '<h3>Types of Sleeve</h3>';
    let html_selected = '<option value="all">Select</option>';
    for (i = 0; i < json.length; ++i) {
      html = html + '<div class="col-md-3 col-sm-6 col-xs-6 ' + json[i].value + '3 all3"><div class="product_image"><label class="image-radio"><input type="radio" id="' + json[i].value + '" name="back_neck_design" class="radio_image" value="' + json[i].value + '"><img src="{{' + json[i].image_name + '| asset_img_url}}" style="width: 100%" class="img-responsive image_radio"></label></div></div>';
  
      html_selected = html_selected + '<option value=' + json[i].value + '>' + json[i].name + '</option>';
    }
    $('#bnd_design').html(html).fadeIn(500);
    $("#select3").html(html_selected).fadeIn(500);
  
    $('input[name=back_neck_design]').on('change', function () {
      set_back_neck_design($(this).val());
      measurement.back_neck_designs = $(this).val();
      measurement.openings = null;
      $('#opening_design_selected').empty();
    });
    $("#loading-image").hide();
  
    if (measurement['back_neck_designs']) {
      $('#' + measurement['back_neck_designs']).prop('checked', true);
    }
    // pre_fill_back_neck_design();
  }
  
  function set_back_neck_design(val) {
    $("#back_neck_design_selected").css('display', 'block').html('&nbsp;' + humanize(val));
    $("#back_neck_design").attr('src', "{{ " + 'blouse-back-necks-' + val + '.png' + " | asset_img_url }}");
  }
  
  $('#select3').on('change', function () {
    $(".all3").css("display", "none");
    if (this.value == 'all') {
      $(".all3").css("display", "block");
    }
    var bnd_name = $("#select3").val();
    if (this.value == bnd_name) {
      $(".col-md-3.col-sm-6.col-xs-6." + bnd_name + "3.all3").css("display", "block");
    }
  });
  
  $('#additional_description').val(measurement['additional_description']);
  $('#title').val(measurement['title']);
  $('#like_to_save').val(measurement['like_to_save']);
  
  $('#additional_description').keyup(function () {
    measurement['additional_description'] = this.value;
  });
  
  $('#title').keyup(function () {
    measurement['title'] = this.value;
  })
  
  // Sleeve types and opening
  function navigateToSleeveAndOpening() {
    $('#backNeckDesign').removeClass("active");
    $('#sleeveOpeningDesign').addClass("active");
    getTypesOfSleeves();
    get_opening_designs();
  }
  
  function getTypesOfSleeves() {
    let html = '';
    for (let i = 0; i < typesOfSleeves.length; i++) {
      html = html + '<div class="col-md-3 col-sm-6  col-xs-6"><div class="product_image"><label class="image-radio">';
      html = html + '<input type="radio" id="' + typesOfSleeves[i].value + '" name="types_of_sleeve" class="radio_image" value="' + typesOfSleeves[i].value + '">';
      html = html + '<img src="{{' + typesOfSleeves[i].image_name + ' | asset_img_url }}" style="width: 100%" class="img-responsive image_radio"></label></div></div>';
    }
    $('#typesOfSleeves').html(html).fadeIn(500);
    $('input[name=types_of_sleeve]').on('change', function () {
      set_types_of_sleeve_design($(this).val());
      measurement['types_of_sleeves'] = $(this).val();
    });
  
    if (measurement['types_of_sleeves']) {
      $('#' + measurement['types_of_sleeves']).prop('checked', true);
    }
  }
  
  function set_types_of_sleeve_design(val) {
    $("#types_of_sleeve_design_selected").css('display', 'block').html('&nbsp;' + humanize(val));
    $("#types_of_sleeve").attr('src', "{{ " + 'blouse-types-of-sleeves-' + val + '.png' + "| asset_img_url }}");
  }
  
  function get_opening_designs() {
    const json = openings.filter(val => val.parents_back_neck === measurement.back_neck_designs);
    var html = ''
    for (i = 0; i < json.length; ++i) {
      html = html + '<div class="col-md-3 col-sm-6 col-xs-6"><div class="product_image"><label class="image-radio"><input id="' + json[i].os_value + '" type="radio" name="opening" class="radio_image" value="' + json[i].os_value + '" /><img src="{{' + json[i].os_image_name + ' | asset_img_url}}" style="width: 100%" class="img-responsive image_radio"></label></div></div>';
    }
    $('#opening_value').html(html).fadeIn(500);
    $('input[name=opening]').on('change', function () {
      measurement['openings'] = $(this).val();
      set_opening_design($(this).val());
    });
    $("#loading-image").hide();
  
    if (measurement['openings']) {
      $('#' + measurement['openings']).prop('checked', true);
    }
  }
  
  function set_opening_design(val) {
    $("#opening_design_selected").css('display', 'block').html('&nbsp;' + humanize(val));
    $("#opening").attr('src', "{{ " + 'blouse-openings-' + val + '.png' + "| asset_img_url }}");
  }
  
  // Measurement
  function navigateToMeasurements() {
    $('#sleeveOpeningDesign').removeClass("active");
    $('#measurements').addClass("active");
  }
  
  function navigateToConfirmation() {
    var flag = 0;
    $(".err_text").css('display', 'none');
  
    var input_no = $('input[type=number].image_url');
    for (var i = 0; i < input_no.length; i++) {
      var temp_val = $(input_no[i]).val();
      var temp_id = $(input_no[i]).attr("id");
      var temp_name = $(input_no[i]).attr("name");
      var temp_min = $(input_no[i]).attr("min");
      var temp_max = $(input_no[i]).attr("max");
      if ((temp_val != null) && (temp_val == "")) {
        flag = 1;
        $("." + temp_id + "_text").css('display', 'block');
      } else {
        if ((parseFloat(temp_min) <= parseFloat(temp_val)) && (parseFloat(temp_max) >= parseFloat(temp_val))) {
          measurement[temp_id] = temp_val;
        } else {
          flag = 1;
          $("." + temp_id + "_text").css('display', 'block');
        }
      }
    }
  
    if (flag == 1) {
      setTimeout(function () {
        // move_to_measurements();
      }, 100);
      return false;
    } else {
  
  
      var lts = measurement['like_to_save'];
      $('#like_to_save').attr('checked', lts)
      $('#title').val(measurement['title']);
      if (lts === "true") {
        $("#like_to_save").prop("checked", true);
        save();
      }
  
      var armhole_val = measurement['e_arm_hole'];
      var bn_depth = measurement['back_neck_depth'];
      var bl_length = measurement['blouse_length'];
      var ch_bust = measurement['b_chest'];
      var fn_depth = measurement['front_neck_depth'];
      var shoulder_val = measurement['d_shoulder'];
      var sta_depth = measurement['shoulder_apex_point'];
      var sl_length = measurement['f_sleeve_length'];
      var wmb_bust = measurement['below_bust'];
      var sl_circumference = measurement['sleeve_circumference'];
  
      $("#bl_length_text").html(bl_length);
      $("#ch_bust_text").html(ch_bust);
      $("#wmb_bust_text").html(wmb_bust);
      $("#shoulder_val_text").html(shoulder_val);
      $("#fn_depth_text").html(fn_depth);
      $("#sta_depth_text").html(sta_depth);
      $("#bn_depth_text").html(bn_depth);
      $("#armhole_val_text").html(armhole_val);
      $("#sl_length_text").html(sl_length);
      $("#sl_circumference_text").html(sl_circumference);
  
      $(".val_act_hide").removeClass('active');
      $(".tab-pane").removeClass('active');
      $("#confirmation").addClass('active');
      updateActiveTab('confirmation');
    }
  }
  
  // Setting active panel tab
  function setActiveTab(currentTab) {
    tabIds.forEach((value) => {
      if (currentTab === value) {
        $("#parent_" + value).addClass("active");
      } else {
        $("#parent_" + value).removeClass("active");
      }
    });
  }
  
  // selecting particular tab
  $('.show_tab').click(function (event) {
    var currentTabName = event.currentTarget.getAttribute('tab-name');
    navigate(currentTabName);
  });
  
  $('#like_to_save').change(function () {
    save();
  });
  
  function save() {
    var checkBox = document.getElementById("like_to_save");
    var text = document.getElementById("title_form");
    measurement['like_to_save'] = checkBox.checked;
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      $('#title').val('');
      measurement['title'] = '';
      text.style.display = "none";
    }
  }
  
  
  function navigate(path) {
    switch (path) {
      case 'embroidery':
        updateActiveTab(path)
        break;
      case 'frontNeckDesign':
        if (!measurement['type']) {
          showErrorMessage(['embroidery']);
          return;
        }
        updateActiveTab(path);
        break;
      case 'backNeckDesign':
        if (!measurement['front_neck_designs']) {
          showErrorMessage(['front_neck_designs']);
          return;
        }
        navigateToBackNeck();
        updateActiveTab(path);
        break;
      case 'sleeveOpeningDesign':
        if (!measurement['front_neck_designs'] || !measurement['back_neck_designs']) {
          showErrorMessage(['front_neck_designs', 'back_neck_designs']);
          return;
        }
        navigateToSleeveAndOpening();
        updateActiveTab(path);
        break;
      case 'measurements':
        if (!measurement['front_neck_designs'] || !measurement['back_neck_designs'] || !measurement['openings'] || !measurement['types_of_sleeves']) {
          showErrorMessage(['front_neck_designs', 'back_neck_designs', 'types_of_sleeves', 'openings']);
          return;
        }
        navigateToMeasurements();
        updateActiveTab(path);
        break;
      case 'confirmation':
        navigateToConfirmation();
        break;
    }
  }
  
  function updateActiveTab(currentTabName) {
    console.log(currentTabName);
    tabIds.forEach((value) => {
      if (currentTabName === value) {
        $("#" + value).addClass("active");
        setActiveTab(value);
      } else {
        $("#" + value).removeClass("active");
      }
    });
  }
  
  function humanize(str) {
    if (!str) {
      return;
    }
    var temp_str = str.split("_").join(" ");
    temp_str = str.split("-").join(" ");
    return temp_str;
  }
  
  $('#message_submit').on('click', function (event) {
  
    event.preventDefault();
  
    if (!measurement['id']) {
      measurement['id'] = uuidv4();
    }
    console.log(measurement);
  
    // var blouse_design = $("#blouse_design_option_val").val();
    // var front_neck_design = get_front_neck_designs();
    // var back_neck_design = get_back_neck_designs();
    // var types_of_sleeve = get_types_of_sleeve_design();
    // var opening = get_opening_design();
  
  
    // var bl_length = localStorage.getItem('blouse_length');
    // var ch_bust = localStorage.getItem('chest_bust');
    // var wmb_bust = localStorage.getItem('waist_midrift_below_bust');
    // var shoulder_val = localStorage.getItem('shoulder');
    // var fn_depth = localStorage.getItem('front_neck_depth');
    // var sta_depth = localStorage.getItem('shoulder_to_apex_depth');
    // var bn_depth = localStorage.getItem('back_neck_depth');
    // var armhole_val = localStorage.getItem('arm_hole');
    // var sl_length = localStorage.getItem('sleeve_length');
    // var sl_circumference = localStorage.getItem('sleeve_circumference');
  
    // var additional_description = localStorage.getItem('additional_description');
    // var like_to_save = localStorage.getItem('like_to_save');
    // var title = localStorage.getItem('title');
  
    // $('.preloader').show();
  
    // $.ajax({
    //     type: "POST",
    //     url: "{{ action }}",
    //     data: {
    //         id: '{{ id }}',
    //         product_id: '{{ product_id }}',
    //         blouse_design: blouse_design,
    //         front_neck_design: front_neck_design,
    //         back_neck_design: back_neck_design,
    //         types_of_sleeve: types_of_sleeve,
    //         opening: opening,
  
    //         bl_length: bl_length,
    //         ch_bust: ch_bust,
    //         wmb_bust: wmb_bust,
    //         shoulder_val: shoulder_val,
    //         fn_depth: fn_depth,
    //         sta_depth: sta_depth,
    //         bn_depth: bn_depth,
    //         armhole_val: armhole_val,
    //         sl_length: sl_length,
    //         sl_circumference: sl_circumference,
  
    //         title:title,
    //         like_to_save:like_to_save,
    //         additional_description:additional_description,
    //     }
    // }).done(function(msg) {
    //     window.location.href = '{{ continue }}';
    // });
  
  
  });
  
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  function showErrorMessage(checkArr) {
    let isNavigated = false;
    checkArr.forEach((val) => {
      if (!measurement[val]) {
        alert(errorMessages[val]);
        if (!isNavigated) {
          isNavigated = true;
          navigate(tabIdMapping[val]);
        }
      }
    });
  }
  });
  
  
  function myFunction(image) {
    var img = $(image).attr("url");
    $('.myimage_new').attr('src', "{{ " + img + " | asset_img_url }}");
  }
  