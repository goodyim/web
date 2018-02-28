(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var ACTIVE_CLASSES = {
    tab: 'nco__switcher-tab--active',
    list: 'nco__item-list--active'
  }

  var tabs = HTMLCollectionToArray(document.getElementsByClassName('nco__switcher-tab'))
  var lists = HTMLCollectionToArray(document.getElementsByClassName('nco__item-list'))

  tabs[0].classList.add(ACTIVE_CLASSES.tab)
  lists[0].classList.add(ACTIVE_CLASSES.list)

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', setActiveTab)
  }

  function setActiveTab () {
    tabs.map((el) => el.classList.remove(ACTIVE_CLASSES.tab))
    lists.map((el) => el.classList.remove(ACTIVE_CLASSES.list))
    this.classList.add(ACTIVE_CLASSES.tab)
    lists[getActiveTabIndex(this)].classList.add(ACTIVE_CLASSES.list)
  }

  function getActiveTabIndex (tab) {
    return tabs.indexOf(tab)
  }

})()
