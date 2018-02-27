(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var ACTIVE_CLASSES = {
    tab: 'user-profile__tab--active',
    list: 'user-profile__item-list--active'
  }

  var tabs = HTMLCollectionToArray(document.getElementsByClassName('user-profile__tab'))
  var lists = HTMLCollectionToArray(document.getElementsByClassName('user-profile__item-list'))

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
