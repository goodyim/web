if (window.jQuery || typeof jQuery !== 'undefined') {
  $(function() {
    $('#registration-datapicker').datepicker()
    $('#auth__form-field-input-country').selectmenu()
    $('#auth__form-field-input-city').selectmenu()
  });
}
