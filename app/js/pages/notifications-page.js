(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var textItems = HTMLCollectionToArray(document.getElementsByClassName('notifications__message-text'))

  textItems.map(function(item) {
    console.log('item', item)
    console.log('item.scrollHeight :', item.scrollHeight)
    console.log('item.clientHeight :', item.clientHeight)
    if(item.scrollHeight > item.clientHeight) {
      item.classList.add('notifications__message-text--withgradient')
    }
  })

  //SWITCHING TABS

  var ACTIVE_CLASSES = {
    tab: 'notifications__switcher-tab--active',
    list: 'notifications__item-list--active'
  }

  var tabs = HTMLCollectionToArray(document.getElementsByClassName('notifications__switcher-tab'))
  var lists = HTMLCollectionToArray(document.getElementsByClassName('notifications__item-list'))

  tabs[0].classList.add(ACTIVE_CLASSES.tab)
  lists[0].classList.add(ACTIVE_CLASSES.list)

  tabs.map((el) => {
    el.addEventListener('click', setActiveTab)
  })

  function setActiveTab () {
    tabs.map((el) => el.classList.remove(ACTIVE_CLASSES.tab))
    lists.map((el) => el.classList.remove(ACTIVE_CLASSES.list))
    this.classList.add(ACTIVE_CLASSES.tab)
    lists[getActiveTabIndex(this)].classList.add(ACTIVE_CLASSES.list)
  }

  function getActiveTabIndex (tab) {
    return tabs.indexOf(tab)
  }

})();