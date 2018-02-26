if (window.jQuery || typeof jQuery !== 'undefined') {
  $(function() {
    $('#registration-datapicker').datepicker()
    $('#auth__form-field-input-country').selectmenu()
    $('#auth__form-field-input-city').selectmenu()
  });
}

(function(){
 'use strict'

  var first = document.getElementById('first-step')
  var second = document.getElementById('second-step')
  var registrationForm = document.getElementById('registration-form')

  first.classList.add('auth__content--active')

  registrationForm.onsubmit = function (event) {
    event.preventDefault()
    first.classList.remove('auth__content--active')
    second.classList.add('auth__content--active')
 }

})()
