if (window.jQuery || typeof jQuery !== 'undefined') {
  $(function() {
    // $('#registration-datapicker').datepicker()
    $('#post-create__form-help').selectmenu({ icons: { button: 'post-create__form-help-icon' } })
  });
}

(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var ACTIVE_CLASSES = {
    tab: 'tabs-switcher__tab--active'
  }

  var tabs = HTMLCollectionToArray(document.getElementsByClassName('tabs-switcher__tab'))

  tabs[0].classList.add(ACTIVE_CLASSES.tab)

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', setActiveTab)
  }

  function setActiveTab () {
    tabs.map((el) => el.classList.remove(ACTIVE_CLASSES.tab))
    this.classList.add(ACTIVE_CLASSES.tab)
  }

  function getActiveTabIndex (tab) {
    return tabs.indexOf(tab)
  }

})();
