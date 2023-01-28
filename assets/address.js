let addressClicked, addressClickedForm, addressClickedFormId = '';

$('[data-address] button').click(function(e) {
  e.preventDefault();
  addressClicked = $(this).data('contact-address');
  addressClickedForm = $(this).parent().parent().find('.contact-address-form-edit');
  addressClickedFormId = $(this).parent().parent().find('.contact-address-form-edit').data('contact-address-form');
  console.log(addressClicked);
  console.log(addressClickedFormId);
  if(addressClicked == addressClickedFormId){
    addressClickedForm.show();
    console.log('if');
  }else{
    addressClickedForm.hide();
    console.log('else');
  }
});
